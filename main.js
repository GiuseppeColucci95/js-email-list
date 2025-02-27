/* 
TRACCIA
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

//select the DOM elements
const ulEl = document.getElementById('list');
console.log(ulEl);

//create for loop 
for (let i = 0; i < 10; i++) {
  //fetch request to get the random email
  fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    //first then for get the json object
    .then(response => response.json())
    //access to the json object
    .then(data => {

      //add the generated email to html
      ulEl.innerHTML += `<li>${data.response}</li>`;
    }).catch(error => console.error(error));
}


