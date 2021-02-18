const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const scheduleSchema = new Schema(
    {
        course: { type: Schema.Types.ObjectId, ref: 'Course' },
        teacher: { type: Schema.Types.ObjectId, ref: 'User' },
        student: { type: Schema.Types.ObjectId, ref: 'User' },
        schedule_dates: [Date],
        status: String,
    },
    {
        timestamps: true
    }
);

module.exports = model("schedules", scheduleSchema);

