import {BASE_URL} from "../constants";
const axios = require("axios")

export const submitFormToServer = (formData) => {
    axios.post(`${BASE_URL}/api/journal`, {
        formData
    })
}