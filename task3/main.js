/*
  Parašyti JS kodą, kuris vartotojui paspaudus ant mygtuko "Rodyti Vartotoją" užkrautų vartotoją iš API į ekraną. (Mygtukas neberodomas ekrane po jo paspaudimo. Nebūtina ekrane rodyti visos informacijos apie vartotoją.)
  API nuoroda: https://randomuser.me/api/
*/

function showUser() {
  const userContainer = document.getElementById('user-container');
  const userContainer1 = document.getElementById('user-container1')
  const userContainer2 = document.getElementById('image')
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      userContainer.innerHTML = `Vardas: ${user.name.first}`;
      userContainer1.innerHTML = `Pavarde: ${user.name.last}`
      userContainer2.innerHTML = `<img src="${user.picture.large}">`
    });
}
document.getElementById('show-user-button').addEventListener('click', function() {
  showUser();
  this.style.display = 'none';
});