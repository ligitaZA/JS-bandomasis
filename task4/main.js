/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai+pavardės).
*/
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const movieList = document.createElement('ul');
    data.movies && data.movies.forEach(movie => {
      const movieTitle = movie.title;
      const movieItem = document.createElement('li');
      movieItem.textContent = movieTitle;
      movieList.appendChild(movieItem);

      const actorList = document.createElement('ul');
      movie.cast && movie.cast.forEach(actor => {
        const actorName = `${actor.name.first} ${actor.name.last}`;
        const actorItem = document.createElement('li');
        actorItem.textContent = actorName;
        actorList.appendChild(actorItem);
      });
      movieItem.appendChild(actorList);
    });
    document.body.appendChild(movieList);
  });