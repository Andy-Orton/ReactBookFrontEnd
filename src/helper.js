import axios from 'axios';

const apikey = "5f909498d57649786096da50";

const trade_delay = 10000;

let restdb = axios.create({
    baseURL: 'https://bookdb-3296.restdb.io/',
    timeout: 1000,
    headers: { 'x-apikey': apikey}
});

const realtimeURL = `https://bookdb-3296.restdb.io/realtime?apikey=${apikey}`

export {apikey, restdb, realtimeURL, trade_delay};