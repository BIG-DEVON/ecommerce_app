import axios from "axios";

const BASE_URL =  "http://localhost:5000/api/";
const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjE5M2NlYjgyOGQwMmIyNDlhMjRkMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTQ1NjUwMywiZXhwIjoxNjYxNzE1NzAzfQ.DYxYb-J-5gr21J95G0-rlTtaKUwMgOMsvGif-fLYf8c" ;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});