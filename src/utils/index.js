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

export const storageSession = {
    getItem: () => Taro.getStorageSync('session'),
    removeItem: () => Taro.removeStorageSync('session'),
    setItem: (session) => Taro.setStorageSync('session', session),
}

export const toast = (msg) => {
    Taro.showToast({
        title: msg,
        icon: 'none',
    })
}