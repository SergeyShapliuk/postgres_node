const Pool = require('pg').Pool
const dotenv = require('dotenv')

dotenv.config()

const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
console.log("env", process.env.DB_PASSWORD)
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL?ssl=true : connectionString,
    ssl: isProduction,
});
console.log("rwerwer",process.env.DB_USER)
pool.on('connect', () => {
    console.log('Teamwork Database connected successfully!');
});
module.exports = pool
