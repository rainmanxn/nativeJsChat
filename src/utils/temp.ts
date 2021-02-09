// type Indexed<T = unknown> = {
//   [key in string]: T;
// };
//
// function strToObj(str, value) {
//   return str.split('.').reduceRight((acc, el, i) => {
//     const result = {};
//     if (Object.keys(acc).length === 0) {
//       result[el] = value
//     } else {
//       result[el] = acc;
//     }
//     return result
//   }, {})
// }
//
// function merge(lhs, rhs) {
//   const result = lhs ;
//
//   Object.entries(rhs).forEach(([key, value]) => {
//     if (typeof rhs[key] === 'object' && key in lhs) {
//       result[key] = merge(lhs[key], value);
//     } else {
//       result[key] = value;
//     }
//   });
//
//   return result;
// }
//
//
// function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
//   if (typeof path !== 'string') {
//     throw new Error('path must be string')
//   }
//   if (typeof(object) !== 'object' || Array.isArray(object) || !object || object === null) {
//     return object
//   }
//   const newObject = strToObj(path, value);
//   const result = merge(object, newObject)
//   return JSON.parse(JSON.stringify(result))
// }
//
// export default set
//
// /**
//  * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
//  * set(3, 'foo.bar', 'baz'); // 3
//  */
//
// const checkObjectType = obj => (typeof(obj) === 'object') && !!obj;
//
// function isEqual(a: object, b: object): boolean {
//   // toDO добавить сравнение по длине
//   // if (Object.keys(lhs).length !== Object.keys(rhs).length) {
//   //   return false;
//   // }
//   return Object.keys(a).reduce((acc, key) => {
//     if (checkObjectType(a[key]) && checkObjectType(b[key])) {
//       return acc && isEqual(a[key], b[key])
//     }
//     return acc && a[key] === b[key]
//   }, true)
// }