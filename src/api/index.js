
import axios from './request';

export const reqLogin = (username, password) => axios.post('/login', { username, password });