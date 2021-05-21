import { config } from 'dotenv';
config();

const PORT = process.env.PORT;
const AWS_ACCESS_ID = process.env.AWS_USER_ACCESS_ID;
const AWS_USER_SECRET_KEY = process.env.AWS_USER_SECRET_KEY;
const AWS_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
const AWS_REGION = process.env.AWS_REGION;
const PG_USER = process.env.RDS_USERNAME;
const PG_PASSWORD = process.env.RDS_PASSWORD;
const PG_PORT = process.env.RDS_PORT;
const PG_HOSTNAME = process.env.RDS_HOSTNAME;
const PG_DATABASE = process.env.RDS_DB_NAME;

export {
    PORT,
    AWS_ACCESS_ID,
    AWS_USER_SECRET_KEY,
    AWS_BUCKET_NAME,
    AWS_REGION,
    PG_HOSTNAME,
    PG_USER,
    PG_PORT,
    PG_PASSWORD,
    PG_DATABASE
}