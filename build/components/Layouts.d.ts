import { LayoutItem, LayoutItemObj } from "./../interfaces";
declare class SimpleKeyboardVNLayouts {
    layouts: LayoutItemObj;
    get: (layout?: string | undefined) => LayoutItem | LayoutItemObj;
}
export default SimpleKeyboardVNLayouts;
