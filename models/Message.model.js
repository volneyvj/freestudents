const mongoose = require("mongoose");
const {
    Schema,
    model
} = mongoose;

const messageSchema = new Schema({
    message: String,
    from: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    status: String,
}, {
    timestamps: true
});

module.exports = model("messages", messageSchema);