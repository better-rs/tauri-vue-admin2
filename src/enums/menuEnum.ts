/**
 * @description: menu type
 */
export enum MenuTypeEnum {
  // left menu
  SIDEBAR = 'sidebar',

  MIX_SIDEBAR = 'mix-sidebar',
  // mixin menu
  MIX = 'mix',
  // top menu
  TOP_MENU = 'top-menu',
}

export enum LayoutClsEnum {
  SIDEBAR = 'sider-layout',
  MIX_SIDEBAR = 'mix-sider-layout',
  MIX = 'mix-layout',
  TOP_MENU = 'top-menu-layout',
}

// 折叠触发器类型位置
export enum TriggerEnum {
  // 条型
  BAR = 'bar',
  // 按钮
  BUTTON = 'arrow-circle',
  // 头部icon
  HEADER = 'header',
  // 底部贴合菜单
  BOTTOM = 'bottom',
}

export type Mode = 'vertical' | 'vertical-right' | 'horizontal' | 'inline';

// menu mode
export enum MenuModeEnum {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  // VERTICAL_RIGHT = 'vertical-right',
  // INLINE = 'inline',
}

export enum MenuSplitTypeEnum {
  NONE,
  ROOT,
  SECONDARY,
}

export enum TopMenuAlignEnum {
  CENTER = 'center',
  START = 'start',
  END = 'end',
}

export enum MixSidebarTriggerEnum {
  HOVER = 'hover',
  CLICK = 'click',
}

export enum MixSidebarEnum {
  WIDTH = 80,
  COLLAPSED_WIDTH = 48,

  LOGO_SIZE = 34,
  LOGO_COLLAPSED_SIZE = 30,

  LOGO_WRAPPER_HEIGHT = '50px',
  LOGO_COLLAPSED_WRAPPER_HEIGHT = '50px',
}

export enum TabsStyleEnum {
  SMART = 'smart',
  BUTTON = 'button',
}
