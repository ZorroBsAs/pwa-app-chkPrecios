import { ScanditHTMLElement } from '@scandit/web-datacapture-core/build/js/private/utils/index.js';
import { Card } from '@scandit/web-datacapture-core/build/js/private/ui/atoms/Card.js';

declare enum CardListContainerAttribute {
    TextForCollapseCardsButton = "text-for-collapse-cards-button"
}
declare class CardListContainer extends ScanditHTMLElement {
    static tag: "scandit-find-card-list-container";
    static observedAttributes: string[];
    private onCarListTapHandler;
    private onCardListWillExpandHandler;
    private onCarouselButtonClickHandler;
    private textNode;
    constructor();
    set [CardListContainerAttribute.TextForCollapseCardsButton](text: string);
    get [CardListContainerAttribute.TextForCollapseCardsButton](): string | null;
    private get cardsList();
    private get carouselButton();
    static create(): CardListContainer;
    static register(): void;
    private static createStyleElement;
    attributeChangeCallback(name: keyof CardListContainer, _oldValue: string, newValue: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    collapse(): void;
    expand(): void;
    renderCards(cards: Card[]): void;
    unshiftCard(card: Card): Promise<void>;
    getCardBySelector(selector: string): Card | null;
    updateHeight(height: number): void;
    private onCardListWillExpand;
    private onCarListTap;
    private onCarouselButtonClick;
}
declare global {
    interface HTMLElementTagNameMap {
        [CardListContainer.tag]: CardListContainer;
    }
}

export { CardListContainer, CardListContainerAttribute };
