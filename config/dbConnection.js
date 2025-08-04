const mongoose=require("mongoose");

const Connectdb= async ()=>{

    try{
        const connect=await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected : ", connect.connection.host, connect.connection.name);

    }catch(err){
        console.log("MONGODB connection FAILED ",err);
        process.exit(1);
    }
};

module.exports=Connectdb;