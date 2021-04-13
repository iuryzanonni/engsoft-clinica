import axios from "axios";

const baseUrl = "https://engsoft-clinica.vercel.app/api";

const get = async (address, params = null) => {
    let query = "?";
    for (const key in params) {
        query += `${key}=${params[key]}&`;
    }

    query = query.slice(0, -1);

    return axios.get(`${baseUrl}/${address}${query}`).then((res) => {
        return res ? res.data : null;
    });
};

const post = async (address, data) => {
    const url = `${baseUrl}/${address}/insert`;

    axios
        .post(url, data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
};

export { get, post };
