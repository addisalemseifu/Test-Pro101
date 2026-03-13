// import User from "../models/userModel.js";

export const getUser = async(req,res)=>{
    try{
        // const allUsers = await User.find({})
        // res.json(users)
        res.send('this is working perfectly well!!')
    }catch(err){
        console.log(err)
    }
}

export const createUser = (req,res)=>{
    try{
        res.send('it creating....')
    }catch(err){
        console.log(err)
    }
}

export const deleteUser = (req,res)=>{
    try{
        res.send('delete is working')
    }catch(err){
        console.log(err)
    }
}

export const updateUser = (req,res)=>{
    try{
        res.send('updating in progress')
    }catch(err){
        console.log(err)
    }
}