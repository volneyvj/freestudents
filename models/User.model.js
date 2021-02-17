const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
    // dados para preencher no signup:
    {
        email: {
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, preencha um e-mail válido'],
            type: String,
            trim: true,
            required: [true, 'E-mail necessário.'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Senha é necessario.'],
        },
        teacher: Boolean,
        student: Boolean,
        city: String,
        state: String,
        birthdate: Date,
        how_got_to_us: String,
        skype_username: String,
        zoom_username: String,
        teams_username: String,
        other_com: String,
        other_com_username: String,
        about: String,
        phone: {
            match: [/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/, "Insira telefone completo com DDD"],
            type: String,
        },


        // somente para quem clicar no QUERO SER PROFESSOR
        my_courses: [
            {
                courseid: { type: Schema.Types.ObjectId, ref: 'Course' },
            },
        ],
           // SOMENTE para quem clicar no QUERO SER ESTUDANTE 
           interests: [String],
  

// a partir daqui nao é preenchido, atualiazado conforme uso do aplicativo:

        rating: Number,   // colocar numero padrao quando nao coloca
        given_rates: [{
            userid: { type: Schema.Types.ObjectId, ref: 'User' },
            given_rate: Number,
        },
        {
            timestamps: true
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

        messages: [
            {
                messageid: { type: Schema.Types.ObjectId, ref: 'Message' },
            },
        ],

        // extra fora do signup , no footer
        testimonials: [
            {
                title: String,
                testimonial: String,
            },
            {
                timestamps: true
            },
        ],
    
        admin_level: Number,
        },
    {
        timestamps: true
    }
);


module.exports = model("Users", userSchema);


