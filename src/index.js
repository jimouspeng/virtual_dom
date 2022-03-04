/*
 * @Date: 2022-03-01 17:09:09
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-03-02 14:05:49
 * @FilePath: \virtual_dom\src\index.js
 */
import { init, classModule, propsModule, styleModule, eventListenersModule, h } from 'snabbdom'

/** init函数内部return function patch
 * 接受两个参数：oldVnode vnode
 */
const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
])

const container = document.getElementById('container')

/** h函数生成vnode
 * @param sel
 * @param b data数据, sel的描述
 * @param c sel元素的子元素, 可以是数组，也可以是单个vnode对象
 */
//  const vnode = h('div', { style: { color: '#000' }, data: '1212' }, [h('h1', 'Headline'), h('p', 'A paragraph')])
const vnode = h('div', { style: { color: '#000' }, data: '1212' }, h('div', { style: { color: 'pink' } }, h('p', '哈哈哈哈')))

patch(container, vnode)
