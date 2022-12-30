/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/

function increaseCount(id) {
  const countElement = document.getElementById(`${id}-count`);
  let count = parseInt(countElement.innerHTML);
  count++;
  countElement.innerHTML = count;
}
document.getElementById('nuotrauka1').addEventListener('click', function() {
  increaseCount('nuotrauka1');
});

document.getElementById('nuotrauka2').addEventListener('click', function() {
  increaseCount('nuotrauka2');
});