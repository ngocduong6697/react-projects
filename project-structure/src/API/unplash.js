import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID AWxPfAM5_oM1s8BHbznqQ6wQC2lNFuJIW5J2plFYLv0'
    }
});