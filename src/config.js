const dotenv = require("dotenv");
dotenv.config();

export default {
    env : process.env.REACT_APP_ENV,
    public_url : process.env.REACT_APP_ENV,
    api_url: process.env.REACT_APP_API_URL,
    database: process.env.REACT_APP_MONGO_DB,
}