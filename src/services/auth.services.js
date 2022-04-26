import axios from 'axios'
import {BASE_URL} from "../constants/commons";
import {LOGIN, SIGNUP} from "../constants/routes";

export async function signup(data) {
    await axios.post(BASE_URL + SIGNUP, data).then(res => {

        if (res.status === 200) {
            return res.data
        }
        return null;
    }).catch(err => {
        return null;
    })
}

export async function login(data) {
    console.log(data)
    await axios.post(BASE_URL + LOGIN, data).then(res => {
        console.log(res)
        if (res.status === 200) {
            return res.data
        }
        return null;
    }).catch(err => {
        console.log(err)
        return null;
    })
}
