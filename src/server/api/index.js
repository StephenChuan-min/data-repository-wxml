import request from '../request';

export const userView = (data) => {
    let urlPlus = '';
    for (const key in data) {
        urlPlus = `${urlPlus + key}=${data[key]}&`;
    }
    urlPlus = urlPlus.substring(0, urlPlus.length - 1);
    return request({
        url: `/api/asset/admin/userView?${urlPlus}`,
        method: 'get',
    });
}