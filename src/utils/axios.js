import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://lyricist-api.herokuapp.com/lyrics/',
})


export default axiosInstance;
