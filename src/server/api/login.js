import request from '../request';

export const login = (data) => request({
    url: '/api/login',
    method: 'post',
    data,
});