import { LayoutItem, LayoutItemObj } from "./../interfaces";


import vietnamese from "../layouts/vietnamese";


class SimpleKeyboardLayouts {
  layouts: LayoutItemObj = {

    vietnamese,
   
  };

  public get = (layout?: string): LayoutItem | LayoutItemObj =>
    layout ? this.layouts[layout] : this.layouts;
}

export default SimpleKeyboardLayouts;
