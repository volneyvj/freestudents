const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema(
    {
        name: String,  
        status: String, 
        content: [{
            content_name:  String,
        }] 
    },
);

module.exports = model("Categories", categorySchema);

