import { NAV_ITEM } from "./constants";

let selectedItem = NAV_ITEM.INTRO;

export function getSelectedItem() {
  return selectedItem;
}

export function setSelectedItem(item: string) {
  selectedItem = item;
}
