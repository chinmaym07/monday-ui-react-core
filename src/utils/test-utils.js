export const ELEMENT_TYPES = {
  // Don't remove next line
  // plop_marker:default-data-testid-declarations
  COMBOBOX: "combobox",
  DROPDOWN: "dropdown",
  BUTTON: "button",
  CLICKABLE: "clickable",
  VIRTUALIZED_LIST: "virtualized-list",
  VIRTUALIZED_GRID: "virtualized-grid",
  TEXT_FIELD: "text-field",
  TEXT_FIELD_SECONDARY_BUTTON: "text-field-secondary-button",
  SEARCH: "search",
  CLEAN_SEARCH_BUTTON: "clean-search-button",
  COLOR_PICKER_ITEM: "color-picker-item",
  ICON_BUTTON: "icon-button",
  CHIP: "chip",
  TAB: "tab",
  TAB_PANEL: "tab-panel",
  ALERT_BANNER_BUTTON: "alert-banner-button",
  ALERT_BANNER_LINK: "alert-banner-link",
  ALERT_BANNER_TEXT: "alert-banner-text",
  ATTENTION_BOX: "attention-box",
  AVATAR: "avatar",
  AVATAR_BADGE: "avatar-badge",
  AVATAR_CONTENT: "avatar-content",
  BREADCRUMB_ITEM: "breadcrumb-item",
  BREADCRUMBS_BAR: "breadcrumbs-bar",
  COLOR_PICKER_ITEM_COMPONENT: "color-picker-item-component",
  COMBOBOX_CATEGORY: "combobox-category",
  COMBOBOX_OPTION: "combobox-option",
  COUNTER: "counter",
  MENU: "menu",
  OPTION: "option",
  EDITABLE_HEADING: "editable-heading",
  HEADING: "heading",
  LABEL: "label",
  LINK: "link",
  MENU_DIVIDER: "menu-divider",
  MENU_ITEM: "menu-item",
  MENU_ITEM_BUTTON: "menu-item-button",
  MENU_TITLE: "menu-title",
  MENU_BUTTON: "menu-button",
  STEP_INDICATOR: "step-indicator",
  SKELETON: "skeleton",
  SPLIT_BUTTON: "split-button",
  TEXT_WITH_HIGHLIGHT: "text-with-highlight",
  TOAST: "toast",
  TOAST_LINK: "toast-link",
  TOGGLE: "toggle",
  DIVIDER: "divider",
  LOADER: "loader"
};

export const NAVIGATIONS_COMMANDS = {
  RIGHT_ARROW: "{arrowright}",
  LEFT_ARROW: "{arrowleft}",
  UP_ARROW: "{arrowup}",
  DOWN_ARROW: "{arrowdown}",
  TAB: "#TAB#",
  ENTER: "{enter}",
  PAGE_UP: "{pageup}",
  PAGE_DOWN: "{pagedown}"
};

export const getTestId = (elementType, id) => {
  return id ? `${elementType}_${id}` : elementType;
};
