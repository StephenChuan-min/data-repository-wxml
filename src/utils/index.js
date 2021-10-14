/**
 * 去除对象中空值
 * @param obj
 * @returns {*}
 */
export const clearEmpty = (obj) => {
    if (typeof obj === 'object') {
        const l = Object.keys(obj);
        const _obj = {
            ...obj
        };
        l.forEach((item) => {
            if (_obj[item] === '' || _obj[item] === undefined || _obj[item] === null) delete _obj[item];
            else if (typeof _obj[item] === 'string') _obj[item] = _obj[item].replace(/^\s+|\s+$/g, '');
        });
        return _obj;
    }
    return obj;
};