import request from '../request';

export const logout = () => request({
    url: '/api/logout',
    method: 'get',
});