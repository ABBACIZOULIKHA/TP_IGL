import axios from 'axios' ;

export function getProfile(){
    return axios.get('http://127.0.0.1:8000/profile')
    .then(res => {
    return res.data
    })
}