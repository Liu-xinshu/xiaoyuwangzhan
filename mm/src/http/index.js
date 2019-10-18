import axios from '@/interceptor/index';

//登陆接口
export const loginPort = (params) => axios.post('/login', params);

//注册接口
export const registerProt = (params) => axios.post('/register', params);

//获取所有投票接口
export const getVote = () => axios.get('/vote/allVote');

//获取所有投票接口
export const addVote = (params) => axios.post('/vote/newvote', params);