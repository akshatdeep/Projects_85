const mongoose = require ('mongoose')

const Blog = mongoose.Schema({

    userId:{
        type:String,
        require:true
    },
    
    description:{
        type:String,
        require:true
    },

    blog:{
        type:String,
        require:true
    }
})


module.exports=mongoose.model("blogs",Blog)