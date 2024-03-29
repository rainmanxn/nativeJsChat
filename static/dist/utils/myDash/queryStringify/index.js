import isPlainObject from '../isPlainObject/index';
const objToStr = (obj, keyParent, str = '') => {
    const currentObj = Object.entries(obj);
    return currentObj.reduce((acc, [key, val]) => {
        if (!isPlainObject(val)) {
            return str ? `${acc}&${keyParent}[${str}][${key}]=${val}` : `${acc}&${keyParent}[${key}]=${val}`;
        }
        return acc + objToStr(val, keyParent, key);
    }, '');
};
function queryStringify(data) {
    if (!isPlainObject(data)) {
        throw new Error('input must be an object');
    }
    return Object.entries(data).reduce((acc, [key, value]) => {
        if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
            return `${acc}&${key}=${value}`;
        }
        if (Array.isArray(value)) {
            const str = value.reduce((acc, el, i) => {
                if (!isPlainObject(el)) {
                    return `${acc}&${key}[${i}]=${el}`;
                }
                return acc + objToStr(el, key);
            }, '');
            return `${acc}${str}`;
        }
        if (isPlainObject(value)) {
            return `${acc}${objToStr(value, key)}`;
        }
        return acc;
    }, '').slice(1);
}
export default queryStringify;
