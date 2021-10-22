import request from '../request';

export const login = (data) => request({
    url: '/api/login',
    method: 'post',
    data,
});

export const imgCode = (username) => request({
    url: `/api/code/image?username=${username}`,
    method: 'get',
});