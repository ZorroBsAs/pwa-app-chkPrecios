import { BarcodeFindItem } from './BarcodeFindItem.js';

interface BarcodeFindViewUiListener {
    didTapFinishButton(foundItems: BarcodeFindItem[]): Promise<void>;
}

export type { BarcodeFindViewUiListener };
