import axios from 'axios';
import md5 from 'md5';

const publicKey = '905c5ae9bfbeff154c34d0c60990236c';
const privateKey = '7d6df5827e203946e0d1ca2b6e9110afc2e72f08';
const baseUrl = 'https://gateway.marvel.com/v1/public/characters';

const ts = new Date().getTime().toString();
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: baseUrl,
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;