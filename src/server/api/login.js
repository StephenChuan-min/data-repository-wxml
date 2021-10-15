import request from '../request';

export const login = (data) => request({
    url: '/api/login',
    method: 'post',
    data,
});

export const imgCode = () => request({
    url: '/api/code/image',
    method: 'get',
});