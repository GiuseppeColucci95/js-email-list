/* 
TRACCIA
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch di altre 10 mail (sostituendo le altre)
*/

//select the DOM elements
const ulEl = document.getElementById('list');
const btnEl = document.querySelector('button');
console.log(ulEl);

//call the init function to generate the email list
init();

//add event listener to the button 
btnEl.addEventListener('click', function () {
  init();
})

/**
 * Function that generate and show the email list
 */
function init() {

  //clear the html ul element
  ulEl.innerHTML = '';

  //create for loop 
  for (let i = 0; i < 10; i++) {
    //fetch request to get the random email
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
      //first then for get the json object
      .then(response => response.json())
      //access to the json object
      .then(data => {

        //add the generated email to html
        ulEl.innerHTML += `<li class="list-group-item">${data.response}</li>`;
      })
      //catch the error and print it eventually
      .catch(error => console.error(error));
  }
}