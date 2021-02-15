const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema(
    {
        name: String,
        status: String,
    },
);

module.exports = model("Categories", categorySchema);

