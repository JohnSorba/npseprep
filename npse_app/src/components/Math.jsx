import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Math component that renders mathematical expressions using KaTeX
 * 
 * @param {string} children - The LaTeX math expression to render
 * @param {boolean} block - If true, renders as a block element (display mode)
 * @param {string} className - Additional CSS classes to apply
 */
const Math = ({ children, block = false, className = '' }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && children) {
            try {
                katex.render(children, containerRef.current, {
                    throwOnError: false,
                    displayMode: block,
                    strict: false,
                    trust: true,
                    output: 'html'
                });
            } catch (error) {
                console.error('KaTeX rendering error:', error);
                containerRef.current.textContent = children;
            }
        }
    }, [children, block]);

    if (block) {
        return (
            <div
                ref={containerRef}
                className={`math-block ${className}`}
                aria-label={`Math expression: ${children}`}
            />
        );
    }

    return (
        <span
            ref={containerRef}
            className={`math-inline ${className}`}
            aria-label={`Math expression: ${children}`}
        />
    );
};

/**
 * Fraction component for easier fraction notation
 * 
 * @param {string|number} num - Numerator
 * @param {string|number} den - Denominator
 * @param {boolean} block - If true, renders as a block element
 */
export const Fraction = ({ num, den, block = false, className = '' }) => (
    <Math block={block} className={className}>
        {`\\frac{${num}}{${den}}`}
    </Math>
);

/**
 * Parses text with inline math notation and returns rendered components
 * Math expressions should be wrapped in $ ... $ for inline or $$ ... $$ for block
 * 
 * @param {string} text - Text containing math expressions
 * @returns {Array} Array of text and Math components
 */
export const parseMathText = (text) => {
    if (!text) return text;

    // Pattern to match both inline ($...$) and block ($$...$$) math
    const mathPattern = /\$\$(.*?)\$\$|\$(.*?)\$/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = mathPattern.exec(text)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        // Check if it's block ($$...$$) or inline ($...$)
        if (match[1] !== undefined) {
            // Block math ($$...$$)
            parts.push(
                <Math key={match.index} block>
                    {match[1]}
                </Math>
            );
        } else {
            // Inline math ($...$)
            parts.push(
                <Math key={match.index}>
                    {match[2]}
                </Math>
            );
        }

        lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
};

/**
 * Component that renders text with embedded math expressions
 * Use $ ... $ for inline math and $$ ... $$ for block math
 */
export const MathText = ({ children, as: Component = 'span', className = '' }) => {
    if (typeof children !== 'string') return children;

    const parsed = parseMathText(children);

    return <Component className={className}>{parsed}</Component>;
};

export default Math;
