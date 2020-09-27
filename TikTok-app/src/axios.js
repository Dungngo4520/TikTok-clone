import axios from 'axios'

const instance = axios.create({
    baseURL:"https://tiktok-clone-01.herokuapp.com/",
});

export default instance;