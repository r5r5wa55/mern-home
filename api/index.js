import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './routes/users.route.js'
import Authrouter from './routes/auth.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('connect mogooseDB');
}).catch((err) => {
    console.log(err);
});



const app = express()
const PORT = 3000


app.use(express.json())
app.listen(PORT,()=>{
    console.log(`server run port ${PORT}`);
})

app.use('/api/user',UserRouter )
app.use('/api/auth',Authrouter )