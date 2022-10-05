const Pool = require('pg').Pool
const dotenv = require('dotenv')

dotenv.config()

const isProduction = process.env.NODE_ENV === 'production';

const connectionDev = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const connectionProd = `postgresql://${process.env.PROD_DB_USER}:${process.env.PROD_DB_PASSWORD}@${process.env.PROD_DB_HOST}:${process.env.PROD_DB_PORT}/${process.env.PROD_DB_DATABASE}`;

const pool = new Pool({
    connectionString: isProduction ? connectionProd: connectionDev,
    ssl: isProduction,
});
console.log("rwerwer",connectionProd)
pool.on('connect', () => {
    console.log('Teamwork Database connected successfully!');
});
module.exports = pool
