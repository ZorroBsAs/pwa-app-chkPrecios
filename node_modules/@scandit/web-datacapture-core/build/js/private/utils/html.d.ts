/// <reference types="emscripten" />
declare function html(strings: TemplateStringsArray, ...parameters: unknown[]): string;
/**
 * Conditionally renders HTML content based on a boolean condition.
 *
 * This utility function provides a clean, readable way to handle conditional rendering
 * in HTML template literals while maintaining compatibility with build tools and minifiers.
 *
 * **Why use renderIf instead of inline ternary operators?**
 *
 * 1. **Minifier Compatibility**: Complex ternary expressions with nested template literals
 *    can cause issues with HTML minifiers, potentially resulting in incorrect output like
 *    rendering "false" instead of empty content.
 *
 * 2. **Readability**: Separates the conditional logic from the template structure,
 *    making templates easier to read and understand.
 *
 * 3. **Maintainability**: Changes to conditional rendering logic are isolated and easier
 *    to test and debug.
 *
 * 4. **Performance**: Pre-calculating template parts reduces the complexity of expressions
 *    evaluated during template rendering.
 *
 * 5. **Consistency**: Provides a standardized pattern for conditional rendering across
 *    the codebase.
 *
 * @example
 * ```typescript
 * // ✅ Recommended: Using renderIf utility
 * const buttonTemplate = renderIf(
 *   this.showButton,
 *   html`<button onclick="handleClick()">Click me</button>`
 * );
 *
 * const template = html`
 *   <div class="container">
 *     ${buttonTemplate}
 *     ${renderIf(this.showText, `<p>Some text</p>`)}
 *   </div>
 * `;
 *
 * // ❌ Problematic: Nested template literals with ternary operators
 * const template = html`
 *   <div class="container">
 *     ${this.showButton
 *       ? html`<button onclick="handleClick()">Click me</button>`
 *       : ""
 *     }
 *   </div>
 * `;
 * ```
 *
 * @param condition - Boolean condition to evaluate
 * @param content - HTML content to render when condition is true (can be string or html template)
 * @param fallback - Optional content to render when condition is false (defaults to empty string)
 * @returns The content if condition is true, fallback otherwise
 */
declare function renderIf(condition: boolean, content: string, fallback?: string): string;

export { html, renderIf };
