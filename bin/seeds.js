// const mongoose = require('mongoose');
// const Category = require('../models/Category.model');
// const User = require('../models/User.model');
// const Message = require('../models/Message.model');
// const Course = require('../models/Course.model');
// const Schedule = require('../models/Schedule.model');

// mongoose
//   .connect('mongodb+srv://USER:SENHA@cluster0.kwmwv.mongodb.net/dbname?retryWrites=true&w=majority',
//     {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(x =>
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   )
//   .catch(err => console.error('Error connecting to mongo', err));

// // criacao categorias e conteudos // 

// const categories = [
//   {
//     name: "Idiomas",
//     status: "Ativo",
//     content: [
//       { content_name: "Inglês" },
//       { content_name: "Francês" },
//       { content_name: "Italiano" },
//       { content_name: "Japonês" },
//       { content_name: "Mandarim" },
//       { content_name: "Espanhol" },
//       { content_name: "Hebráico" },
//       { content_name: "Outros" },
//     ]
//   },
//   {
//     name: "Educação Escolar",
//     status: "Ativo",
//     content: [
//       { content_name: "Matemática" },
//       { content_name: "Física" },
//       { content_name: "Química" },
//       { content_name: "História" },
//       { content_name: "Geografia" },
//       { content_name: "Biologia" },
//       { content_name: "Português" },
//       { content_name: "Outros" },
//     ]
//   },
//   {
//     name: "Tecnologia",
//     status: "Ativo",
//     content: [
//       { content_name: "Desenvolvimento WEB" },
//       { content_name: "Softwares" },
//       { content_name: "TI - Infra" },
//       { content_name: "Segurança e Nuvem" },
//       { content_name: "Banco de Dados" },
//       { content_name: "IA" },
//       { content_name: "UXI" },
//       { content_name: "Outros" },
//     ]
//   },
//   {
//     name: "Negócios",
//     status: "Ativo",
//     content: [
//       { content_name: "Adminstração" },
//       { content_name: "Empreendedorismo" },
//       { content_name: "Gestão" },
//       { content_name: "Secretariado" },
//       { content_name: "Outros" },
//     ]
//   },
//   {
//     name: "Mentoria",
//     status: "Ativo",
//     content: [
//       { content_name: "Plano de Carreira" },
//       { content_name: "Mentoria Universitária" },
//       { content_name: "Coaching" },
//       { content_name: "Outros" },
//     ]
//   },
//   {
//     name: "Culinária",
//     status: "Ativo",
//     content: [
//       { content_name: "Salgados" },
//       { content_name: "Sobremesa" },
//       { content_name: "Culinária Brasileira" },
//       { content_name: "Culinária Italiana" },
//       { content_name: "Culinária Francesa" },
//       { content_name: "Geral" },
//       { content_name: "Outros" },
//     ]
//   },
//   {
//     name: "Manufatura",
//     status: "Ativo",
//     content: [
//       { content_name: "PLC" },
//       { content_name: "Processos Industriais" },
//       { content_name: "Soldagem" },
//       { content_name: "AutoCad" },
//       { content_name: "Outros" },
//     ]
//   },
//   {
//     name: "Financeira",
//     status: "Ativo",
//     content: [
//       { content_name: "Excel" },
//       { content_name: "Ações e Investimentos" },
//       { content_name: "Contabilidade" },
//       { content_name: "Faturamento e Fiscal" },
//       { content_name: "Operacões" },
//       { content_name: "Outros" },
//     ]
//   },
//   {
//     name: "Marketing",
//     status: "Ativo",
//     content: [
//       { content_name: "Marketing Digital" },
//       { content_name: "Marketing Geral" },
//       { content_name: "Marcas e Logos" },
//       { content_name: "Outros" },
//     ]
//   },
//   {
//     name: "Arte",
//     status: "Ativo",
//     content: [
//       { content_name: "Artes Plásticas" },
//       { content_name: "História da Arte" },
//       { content_name: "Literatura" },
//       { content_name: "Cinema e TV" },
//       { content_name: "Outros" },
//     ]
//   },
//   {
//     name: "Musica",
//     status: "Ativo",
//     content: [
//       { content_name: "Piano" },
//       { content_name: "Guitarra" },
//       { content_name: "Violão" },
//       { content_name: "Trompete" },
//       { content_name: "Bateria" },
//       { content_name: "Baixo" },
//       { content_name: "Flauta" },
//       { content_name: "Outros" },
//     ]
//   },
// ];


// Category.create(categories)
//   .then(catFromDB => {
//     console.log(`Created ${catFromDB.length} Categories`);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));


// CRIANDO USUARIO 

// const users = [
//   {
//     name: 'Joao de Deus',
//     email: "joao@gmail.com.br",
//     password: "senha1",
//     teacher: true,
//     student: false,
//     city: "Belo Horizonte",
//     state: "MG",
//     birthdate: 09 / 07 / 1984,
//     how_got_to_us: "1",
//     skype_username: "skype@skype.com",
//     zoom_username: "zoom@zoom.com",
//     teams_username: "teams@teams.com",
//     other_com: "msn",
//     other_com_username: "msn@msn.com",
//     about: "Sou legal e quero aprender",
//     phone: "11 997675544",
//     imageUrl: "www.google.com.br",
//     interests: ["TI", "Mkt", "Financas"],
//     rating: 4,
//       admin_level: 2,
//       testimonials: [
//         {
//           title: "primeiro testimonial",
//           testimonial: 'gostei mutio do site',
//         },
//       ]
//   },

//   {
//     name: 'Maria de Deus',
//     email: "maria@gmail.com.br",
//     password: "senha2",
//     teacher: false,
//     student: true,
//     city: "jao pessoa",
//     state: "PB",
//     birthdate: 01 / 02 / 1944,
//     how_got_to_us: "3",
//     skype_username: "skype2@skype.com",
//     zoom_username: "zoom2@zoom.com",
//     teams_username: "teams2@teams.com",
//     other_com: "msn2",
//     other_com_username: "msn2@msn.com",
//     about: "Sou legalLLLLL e quero aprender",
//     phone: "11 88888",
//     imageUrl: "www.MSN.com.br",
//     interests: ["Culinario", "manutafuara", "outros"],
//     rating: 3,
//       admin_level: 1,
//       testimonials: [
//         {
//           title: "segundo testimonial",
//           testimonial: 'gostei bastante do site',
//         },
//       ]
//   },

//   {
//     name: 'VOLNEY de Deus',
//     email: "volney@gmail.com.br",
//     password: "senha3",
//     teacher: true,
//     student: true,
//     city: "Sao paul",
//     state: "SP",
//     birthdate: 08 / 08 / 1988,
//     how_got_to_us: "4",
//     skype_username: "skype3@skype.com",
//     zoom_username: "zoom3@zoom.com",
//     teams_username: "teams3@teams.com",
//     other_com: "msn3",
//     other_com_username: "msn3@msn.com",
//     about: "Sou lega33333333l e quero aprender",
//     phone: "11 12341234",
//     imageUrl: "www.google.com.br",
//     interests: ["WEB DEV", "SO ISSO", "CHEGA"],
//     rating: 5,
//       admin_level: 1,
//       testimonials: [
//         {
//           title: "TERCEIRO testimonial",
//           testimonial: 'gostei mMMMMMMutio do site',
//         },
//       ]
//   },

// ];

//  User.create(users)
//   .then(usersFromDB => {
//       console.log(`cREATED ${usersFromDB.length} users`);
//       mongoose.connection.close();
//   })
//   .catch(err => console.log(err));



// Criando Mensagens 

// User.find({ name: 'Joao de Deus' }, '_id')
//   .then(userFound => {
//     const joao = userFound[0]
// User.find({ name: 'Maria de Deus' }, '_id')
//   .then(userFound => {
//     var maria = userFound[0]

// User.find({ name: 'VOLNEY de Deus' }, '_id')
//   .then(userFound => {
//     const volney = userFound[0]



// const messages = [
//   {
//     message: "obrigado pelo curso JOAO , foi muito bom",
//     from: maria,
//     to: joao,
//     status: "Nao Lida",
//   },
//   {
//     message: "obrigado pelo curso MARIA , foi muito bom",
//     from: volney,
//     to: maria,
//     status: "Nao Lida",
//   },
//   {
//     message: "obrigado pelo curso VOLNEY, foi muito bom",
//     from: joao,
//     to: volney,
//     status: "Lida",
//   },
//   {
//     message: "obrigado VOCE por assistir JOAO aluno , foi muito bom",
//     from: volney,
//     to: joao,
//     status: "Lida",
//   },
// ];


//  Message.create(messages)
//   .then(msgsFromDB => {
//       console.log(`cREATED ${msgsFromDB.length} MESSAGES`);
//       mongoose.connection.close();
//   })
// })
// })
// })
// .catch((error) => console.log(`Error while getting a user ${error}`));


// criando cursos

// Category.find({ name: 'Tecnologia' }, '_id')
//   .then(tecFound => {
//     const tecno = tecFound[0]
//     Category.find({ name: 'Culinária' }, '_id')
//   .then(culFound => {
//     const culinar = culFound[0]
// User.find({ name: 'Maria de Deus' }, '_id')
//   .then(mariaFound => {
//     var maria = mariaFound[0]
// User.find({ name: 'VOLNEY de Deus' }, '_id')
//   .then(volneyFound => {
//     const volney = volneyFound[0]

// const courses = [
//   {
//       name: "Curso de WEBDEV para iniciantes",
//       category: tecno,
//       content: "602ef7033baac26e9a19eb9e",
//       description: "Um curso bem bacana e facil",
//       user: volney,
//       classes: 5,
//       WeekAvailability: ["Segunda", "Terca", "Domingo"],
//       HourAvailability: ["A1", "C3", "D3"],
//       times_lectured: 0,
//       status: "Agendado",
//   },
//   {
//     name: "Curso de CULINARIA DA maria",
//     category: culinar,
//     content: "602ef7033baac26e9a19ebb2",
//     description: "Um curso de comida italiana e facil",
//     user: maria,
//     classes: 4,
//     WeekAvailability: ["Sabado", "Quarta", "Sexta"],
//     HourAvailability: ["F1", "A2", "E2"],
//     times_lectured: 1,
//     status: "Concluido",
// },

// ];

//  Course.create(courses)
//   .then(coursesFromDB => {
//       console.log(`cREATED ${coursesFromDB.length} cOURSES`);
//       mongoose.connection.close();
//   })
// })
// })
// })
// })
// .catch((error) => console.log(`Error while getting a user ${error}`));


// criando schedule  - na pratica criar query com dois parametros.

// Course.find({ name: 'Curso de WEBDEV para iniciantes' }, '_id')
//   .then(cursoFound => {
//     const cursoweb = cursoFound[0]
//     Course.find({ name: 'Curso de CULINARIA DA maria' }, '_id')
//       .then(cursoFound2 => {
//         const cursocul = cursoFound2[0]
//         User.find({ name: 'Maria de Deus' }, '_id')
//           .then(mariaFound => {
//             var joao = mariaFound[0]
//             User.find({ name: 'VOLNEY de Deus' }, '_id')
//               .then(volneyFound => {
//                 const volney = volneyFound[0]

//                 const schedules = [
//                   {
//                     course: cursocul,
//                     teacher: volney,
//                     student: joao,
//                     schedule_dates: [01/03/2021, 01/04/2021, 02/04/2021],
//                     status: "Programado",
//                     classes_completed: 0,
//                   },
//                   {
//                     course: cursoweb,
//                     teacher: joao,
//                     student: volney,
//                     schedule_dates: [10/02/2021, 11/02/2021, 12/02/2021, 13/02/2021],
//                     status: "Concluido",
//                   },
//                 ];

//                 Schedule.create(schedules)
//                   .then(schedulesFromDB => {
//                     console.log(`cREATED ${schedulesFromDB.length} schedules`);
//                     mongoose.connection.close();
//                   })
//               })
//           })
//       })
//   })
//   .catch((error) => console.log(`Error while getting a user ${error}`));


// nao precisa, apenas par consulta..

// User.find({ name: 'Joao de Deus' }, '_id')
//   .then(userFound => {
//     const joao = userFound[0]

// Course.find({ name: 'Curso de CULINARIA DA maria' }, '_id')
//   .then(courseFound => {
//     const idCurso = courseFound[0]
   
//     User.findByIdAndUpdate(joao, {$push: {registrated_courses.courseid: idCurso,  }}, { new: true })
//       .then(updateuSER => console.log ("okkk"))

//   })
// })
//     .catch(error => console.log(`Error while updating a single movie: ${error}`));

    