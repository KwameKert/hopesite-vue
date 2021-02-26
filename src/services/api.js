import axios from "axios";
export default axios.create({
 baseURL: `https://hope-cms-api.herokuapp.com`,
 headers: {
 'Accept': 'application/json',
 'Content-Type': 'application/json'
 }
 })