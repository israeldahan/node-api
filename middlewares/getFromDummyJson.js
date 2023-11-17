import fs from "fs";
import axios from "axios";

export default (req, res, next) => {
    axios.get('https://dummyjson.com/products')
    .then(response => {
        req.data = response.data;
        next();
        })
        .catch(err => {
            console.log(err);
            res.status(404).send("Data not found");
        });
}