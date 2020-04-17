/**
 * 工具函数
 * by tommyshao <tomieric@gmail.com>
 * update on 2020-04-16
 */

/**
 * 驼峰转中划线
 * @param str
 */
export const hyphenate = (str: string) => str.replace(/([A-Z])+/, '-$1').toLowerCase()
