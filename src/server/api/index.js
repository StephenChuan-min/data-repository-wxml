import request from '../request';

export const userView = (data) => request({
    url: '/api/asset/admin/userView',
    method: 'get',
    data,
});