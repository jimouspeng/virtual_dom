/*
 * @Date: 2022-03-01 17:09:09
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-03-01 17:40:16
 * @FilePath: \virtual_dom\src\index.js
 */
import { init, classModule, propsModule, styleModule, eventListenersModule, h } from 'snabbdom'

const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
])

const container = document.getElementById('container')

const vnode = h('div', { style: { color: '#000' } }, [h('h1', 'Headline'), h('p', 'A paragraph')])

patch(container, vnode)
