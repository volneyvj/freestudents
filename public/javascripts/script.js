const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Course = require("../models/Course.model");
const Category = require('../models/Category.model')

document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

// Formulário 1 - "Botão quero aprender"
let mostraFormQueroAprender = false;
let mostraFormQueroEnsinar = false;
let mostraOpçãoOutros = false;

function queroAprenderForm() {
  mostraFormQueroAprender = !mostraFormQueroAprender;
  let form = document.getElementById("formQueroAprender");

  if (mostraFormQueroAprender) {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
// Formulário 2 - "Botão quero ensinar"

function queroEnsinarForm() {
  mostraFormQueroEnsinar = !mostraFormQueroEnsinar;
  let form = document.getElementById("formQueroEnsinar");

  if (mostraFormQueroEnsinar) {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

// formulario adicionar cursos
function addCourse() {
  let form = document.getElementById("formAddCourse");

  if (formAddCourse) {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function OutrosMeios() {
  mostraOpçãoOutros = !mostraOpçãoOutros;
  let outros = document.getElementById("outrosMeios");
  if (mostraOpçãoOutros) {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
// function DatesOfCourses() {
// const { id } = req.params;
// console.log(`e ai como vai: ${id}`);
// Course.findById(id)
// .then(courseDetails => {
//   let dates_html = ''
//   const classes = courseDetails.classes
//   for (let i=1; i<=classes; i+=1) {
//   dates_html += `<label for="input-city">Escolha data de sua opção:</label><input type="date" id="input-date${i}" name="date${i}"/>`
//   }
//   document.getElementById('date-course').innerHTML = dates_html
// })
// .catch((err) => console.log(`Error while getting the classes from the DB: ${err}`));
// }


function categorySelected() {
  let selectedCategory = document.getElementById("interests-input").value;
  // alert(selectedCategory);
  Category.findById(selectedCategory)
    .then((showContents) => {
      alert(showContents);
      res.render("signup", showContents);
    })
    .catch((error) => next(error));
}
module.exports = router;
