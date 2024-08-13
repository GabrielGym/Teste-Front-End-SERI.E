import axios from 'axios';
import md5 from 'md5';

const publicKey = '46d3e1fb10df77445e403e1890a264ef';
const privateKey = '5d4632b49001b8fd4da3550cb28b28dead0ddd89';
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
