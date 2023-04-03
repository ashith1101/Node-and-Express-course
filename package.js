const ldh=require('lodash')

const items=[1,[2,[3,[4,[5]]]]]
const newItems=ldh.flattenDeep(items)
console.log(newItems)

console.log("Hello World")