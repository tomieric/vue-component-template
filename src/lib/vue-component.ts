export interface Dictionary < T > {
  [key: string]: T;
}

export interface KeyMap {
  key: string | number;
}

export interface VueComponentOptions {
  debug: boolean;
}

export interface VueComponentInterface {
  version: string;
  debug: () => void;
}

export default class VueComponent implements VueComponentInterface {
  version = '0.1.0'
  el: HTMLElement

  constructor (el: HTMLElement, options?: VueComponentOptions) {
    this.el = el
    options?.debug && this.debug()
  }

  /**
   * 调试级别
   */
  debug () {
    // 开发环境调试
    if (process.env.NODE_ENV === 'development') {
      // code
    }
  }
}
