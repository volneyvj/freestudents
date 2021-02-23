const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const scheduleSchema = new Schema(
    {
        course: { type: Schema.Types.ObjectId, ref: 'courses' },
        teacher: { type: Schema.Types.ObjectId, ref: 'users' },
        student: { type: Schema.Types.ObjectId, ref: 'users' },
        schedule_dates: [Date],
        status: String,
        classes_completed: Number,
    },
    {
        timestamps: true
    }
);

module.exports = model("schedules", scheduleSchema);

