import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();
    const scrollPositions = useRef({});

    useEffect(() => {
        // Save scroll position before navigating away
        const saveScrollPosition = () => {
            scrollPositions.current[pathname] = window.scrollY;
        };

        // Listen for beforeunload to save position
        window.addEventListener('beforeunload', saveScrollPosition);

        return () => {
            // Save position when leaving this route
            scrollPositions.current[pathname] = window.scrollY;
            window.removeEventListener('beforeunload', saveScrollPosition);
        };
    }, [pathname]);

    useEffect(() => {
        // Check if this is a back/forward navigation (POP) or fresh navigation (PUSH/REPLACE)
        if (navigationType === 'POP') {
            // Restore scroll position when going back/forward
            const savedPosition = scrollPositions.current[pathname];
            if (savedPosition !== undefined) {
                // Use setTimeout to ensure DOM is ready
                setTimeout(() => {
                    window.scrollTo(0, savedPosition);
                }, 0);
            }
        } else {
            // Scroll to top for new navigation (PUSH or REPLACE)
            window.scrollTo(0, 0);
        }
    }, [pathname, navigationType]);

    return null;
};

export default ScrollToTop;
