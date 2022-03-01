/*
 * @Date: 2022-03-01 17:01:38
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-03-01 17:37:27
 * @FilePath: \virtual_dom\example.js
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

const vnode = h(
    'div#container.two.classes',
    {
        on: {
            click: () => {
                console.log('打印一下')
            },
        },
    },
    [
        h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
        ' and this is just normal text',
        h('p', { props: { href: '/foo' } }, "I'll take you places!"),
    ]
)
// Patch into empty DOM element – this modifies the DOM as a side effect
patch(container, vnode)

const newVnode = h(
    'div#container.two.classes',
    {
        on: {
            click: () => {
                console.log('jimous-----')
            },
        },
    },
    [
        h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),
        ' and this is still just normal text',
        h('p', { props: { href: '/bar' } }, "I'll take you places!"),
    ]
)
// Second `patch` invocation
setTimeout(() => {
    patch(vnode, newVnode) // Snabbdom efficiently updates the old view to the new state
}, 5000)
