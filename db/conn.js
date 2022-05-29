const mongoose = require("mongoose");

// const DB = process.env.DATABASE
const DB = 'mongodb+srv://aniket:mongo1234@cluster0.n0dn5.mongodb.net/crudapp?retryWrites=true&w=majoritys'


mongoose.connect(DB,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));