const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        email: {
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
            type: String,
            trim: true,
            required: [true, 'E-mail is required.'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required.'],
        },
        teacher: Boolean,
        student: Boolean,
        city: String,
        state: String,
        birthdate: Date,
        interests: [String],
        how_got_to_us: String,
        skype_username: String,
        zoom_username: String,
        teams_username: String,
        other_com: String,
        other_com_username: String,
        about: String,
        rating: Number,
        phone: {
            match: [/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/, "Insira telefone completo com DDD"],
            type: String,
        },
        given_rates: [{
            userid: { type: Schema.Types.ObjectId, ref: 'User' },
            given_rate: Number,
        },
        {
            timestamps: true
        },
        ],
        my_courses: [
            {
                courseid: { type: Schema.Types.ObjectId, ref: 'Course' },
            },
        ],
        registrated_courses: [
            {
                courseid: { type: Schema.Types.ObjectId, ref: 'Course' },
                schedules: [{ type: Schema.Types.ObjectId, ref: 'Schedule' }],
                status: String,
                lecturing: Boolean,
                classes_completed: Number,
            },
        ],
        testimonials: [
            {
                title: String,
                testimonial: String,
            },
            {
                timestamps: true
            },
        ],
        messages: [
            {
                messageid: { type: Schema.Types.ObjectId, ref: 'Message' },
            },
        ],
        admin_level: Number,
    },
    {
        timestamps: true
    }
);


module.exports = model("Users", userSchema);


