import mogoose from 'mongoose'

const userSchema = new mogoose.Schema({
    username:{
        type:String,
        required:true,
        uniqure:true
    },
    email:{
        type:String,
        required:true,
        uniqure:true
    },
    password:{
        type:String,
        required:true,
        uniqure:true
    }
},{timestamps:true})

const User = mogoose.model('User',userSchema)
export default User;