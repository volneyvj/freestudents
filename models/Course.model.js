const mongoose = require("mongoose");
const {
    Schema,
    model
} = mongoose;

const courseSchema = new Schema(
    // SIGNUP DO PROFESSOR:
    {
        name: {
            type: String,
            trim: true,
            // required: [true, 'Name is required.'],
            // default: 'Curso sem nome',
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "categories",
            // required: [true, 'Categoria é necessário.'],
        },
        content: {
            type: String,
            // required: [true, 'Conteúdo é necessário.'],
        },
        description: {
            type: String,
            // required: [true, 'Escreva uma descriçào.'],
        },

        //
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        classes: Number,
        week_availability: [String],
        hour_availability: [String],
        times_lectured: Number,
        status: String,
    }, {
        timestamps: true,
    }
);

module.exports = model("courses", courseSchema);