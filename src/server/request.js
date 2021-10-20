import { baseUrl } from './base';
import Taro from '@tarojs/taro';

const request = (options) => {
    return new Promise((resolve, reject) => {

        const setting = {
            url: baseUrl + options.url,
            data: options.data,
            method: options.method.toUpperCase() || 'GET',
            timeout: 1000 * 30,
            header: {
                ...options.header
                // 'content-type': 'application/x-www-form-urlencoded', // from data
            },
            success: (res) => {
                if (res.code === 401) {
                    Taro.reLaunch({
                        url: '/pages/login/index',
                    });
                }
                if(res.success == false){
                    Taro.showToast({
                        icon:"none",
                        title:res.data.message
                    })
                }
                resolve(res.data);
            },
        }
        if (options.header) {
            setting.header = Object.assign(setting.header, options.header);
        }
        Taro.request(setting);
    })
}


export default request;

