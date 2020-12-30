import axios from 'axios';
const KEY = 'AIzaSyC8zZ_odq2X7oAwjL62g1SC0IVDEcpZ2zY';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key : KEY
            }
})