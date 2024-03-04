fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "5829d60e06msh713aa33f360ff95p1ad948jsn811b3d357bb6",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const list = data.d;

    list.forEach((item) => {
      const name = item.l;
      const poster = item.i ? item.i.imageUrl : "";
      const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`;
      document.querySelector(".movies").innerHTML += movie;
    });
  })
  .catch((err) => {
    console.error(err);
  });
