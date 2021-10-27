import Taro from '@tarojs/taro';

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

export const storage = {
    getItem: (name) => Taro.getStorageSync(name),
    removeItem: (name) => Taro.removeStorageSync(name),
    setItem: (name, data) => Taro.setStorageSync(name, data),
}

/**
 * 函数防抖 created by wchuan  date:2021-10-22
 * @param func
 * @param wait
 * @returns {function(): void}
 */
export const debounce = (func, wait) => {
    let timer;
    return function() {
        let args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}
