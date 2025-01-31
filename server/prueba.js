import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.MONGODB_URI); 

console.log(process.env.SMTP_USER); 

console.log(process.env.SMTP_PASS); 

console.log(process.env.SENDER_EMAIL); 