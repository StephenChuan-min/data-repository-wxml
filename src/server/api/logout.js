import request from '../request';

export const logout = () => request({
    url: '/api/logout',
    method: 'get',
});

export const userToken = () => request({
    url: '/api/userToken',
    method: 'get',
});