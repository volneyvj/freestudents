const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contentSchema = new Schema(
    {
        name: String,  
        status: String, 
        category: { 
            type: Schema.Types.ObjectId, ref: 'Category',
        },
    },
);

module.exports = model("Content", contentSchema);

