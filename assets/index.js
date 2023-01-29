const fetchBasic = async (link) => {
  const res = await fetch(link);
  /* console.log(res) */ if (res.ok) {
    const { data: songs } = await res.json();
    return songs;
  } else {
    console.log("Ops, c'è stato un errore");
  }
};

//PRIMA SEZIONE

const myFavSongs = async () => {
  let bestSongs = await fetchBasic(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica"
  );
  let firstRow = document.querySelector("#primaSezione");
  let favourite = [bestSongs[0], bestSongs[1], bestSongs[8], bestSongs[10]];
  favourite.forEach(({ album, title, rank, artist }) => {
    firstRow.innerHTML += `<div class="card d-flex mx-auto mb-2 col-6 col-lg-3 " >
      <img src="${album.cover_xl}" class="card-img-top" alt="${title}">
      <div class="card-body">
      <h5 class="card-title" songRank='${rank}'>${title}</h5>
        <p class="card-text text-center">${artist.name}</p>
      </div>
    </div>`;
  });
};

//SECONDA SEZIONE

const bestSong = async () => {
  let [myBestOne] = await fetchBasic(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=bestofyou"
  );
  /* console.log(myBestOne) */ const { album, title, artist, rank } = myBestOne;
  let secondRow = document.getElementById("secondaSezione");
  secondRow.innerHTML += `<div class="card mb-3" ">
<div class="text-bg-seconday row g-0">
  <div class="col-md-4">
    <img src="${album.cover_xl}" class=" w-100 img-fluid rounded-start text-center " alt="${title}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title" songRank='${rank}'>${title}</h5>
      <p class="card-text">Those are the ${artist.name}, one of the best rock band.</p>
      <i class="bi bi-music-note-beamed"></i>
    </div>
  </div>
</div>
</div>`;
};

//TERZA SEZIONE

const carouselAlbum = async () => {
  try {
    let myAlbum = [
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=thedarksideofthemoon",
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=spaceoddity",
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=madeinheaven",
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=jaggedlittlepill",
    ];

    for (let i = 0; i < myAlbum.length; i++) {
      const album = myAlbum[i];
      let [brano] = await fetchBasic(album);
      const sezione = document.querySelector(".carousel-inner");
      sezione.innerHTML += `<div class="carousel-item  ${
        i == 0 ? "active" : ""
      }">
    <img src="${brano.album.cover_xl}" class="d-block col-4" alt="${
        brano.title
      }">
    
  </div>`;
    }
  } catch (error) {
    console.log("Ops c'e stato un errore del tipo:", error);
  }
};

//ALERT - BRANI POPOLARI

const titlesArray = () => {
  let h5 = document.querySelectorAll("h5");
  let titoli = [];
  h5.forEach((singoloTitolo) => {
    titoli.push({
      titolo: singoloTitolo.innerText,
      rank: parseInt(singoloTitolo.getAttribute("songRank")),
    });
  });
  return titoli;
};

const titlesModal = () => {
  let titoli = titlesArray();
  let sorted = titoli.map((song) => song.titolo);
  console.log(sorted);
  let alert = document.querySelector(".modal ul.canzoniOrdinate");
  alert.innerHTML = "";
  sorted.forEach((song) => {
    alert.innerHTML += `<li class='list-group-item'>
      ${song}
      
      </li>`;
  });
};

const titlesRank = () => {
  let titoli = titlesArray();
  let sorted = titoli.sort((a, b) => {
    return a.rank - b.rank;
  });
  console.log(sorted);
  let alert = document.querySelector(".alert ul.canzoniOrdinate");
  alert.innerHTML = "";
  sorted.forEach((brano) => {
    alert.innerHTML += `<li class='list-group-item'>
      ${brano.titolo} - ${brano.rank}  
      
      </li>`;
  });
  alert.parentElement.classList.toggle("d-none");
};

//RICHIAMO LE FUNZIONI
window.onload = async () => {
  await bestSong();
  await myFavSongs();
  await carouselAlbum();
  await titlesModal();
};
