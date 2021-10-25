import { baseUrl } from './base';
import { storage } from '../utils';
import Taro from '@tarojs/taro';

const request = (options) => {
    return new Promise((resolve, reject) => {
        const session = storage.getItem('session') || '';
        const setting = {
            url: baseUrl + options.url,
            data: options.data,
            method: options.method.toUpperCase() || 'GET',
            timeout: 1000 * 30,
            header: {
                Cookie: session,
                ...options.header
            },
            success: (res) => {
                if (res.data.code === 401) {
                    storage.removeItem('session');
                    Taro.reLaunch({
                        url: '/pages/login/index',
                    });
                }
                if(res.data.success == false){
                    Taro.showToast({
                        icon:"none",
                        title:res.data.message
                    })
                }
                resolve(res);
            },
        }
        if (options.header) {
            setting.header = Object.assign(setting.header, options.header);
        }
        Taro.request(setting);
    })
}


export default request;

