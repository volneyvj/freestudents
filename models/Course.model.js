const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const courseSchema = new Schema(
    {
        name: {
        type: String,
        trim: true,
        required: [true, 'Name is required.'],
        },
        category: { 
            type: Schema.Types.ObjectId, ref: 'Category',
            required: [true, 'Category is required.'],
        },
        description: {
            type: String,
            required: [true, 'Description needed.'],
        },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        classes: Number,
        Availability: [Date],
        type_of_place: String,
        prefered_place: String,
        times_lecturing: Number,
        status: String,
    },
    {
        timestamps: true
    }
);

module.exports = model("Courses", courseSchema);

