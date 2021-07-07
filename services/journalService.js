import {BASE_URL} from "../constants";
const axios = require("axios")

export const submitFormToServer = async (formData) => {
    const res =  await axios.post(`${BASE_URL}/api/journal`, {
        formData
    });

    console.log("res.data: ",res.data);
    return res.data.payload;

}