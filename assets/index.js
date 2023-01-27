let firstRow = document.getElementById("primaSezione");
let secondRow = document.getElementById("secondaSezione");
let thirdRow = document.getElementById("terzaSezione");
const fetchGenerale = async function (sito) {
  try {
    let res = await fetch(sito);
    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      let arrayData = data.data;

      for (let i = 0; i < 4; i++) {
        firstRow.innerHTML =
          firstRow.innerHTML +
          `<div class="card d-flex mx-auto mb-2 col-6 col-lg-3 " >
      <img src="${arrayData[i].album.cover}" class="card-img-top" alt="${arrayData[i].title}">
      <div class="card-body">
        <p class="card-text text-center">${arrayData[i].title}</p>
      </div>
    </div>`;
      }

      secondRow.innerHTML =
        secondRow.innerHTML +
        `<div class="card mb-3" ">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${arrayData[8].album.cover}" class=" w-100 img-fluid rounded-start text-center " alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${arrayData[8].title}</h5>
      <p class="card-text">This is ${arrayData[8].artist.name}, one of the best metal band. And this is their cover of a song written by Sweetpea.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>`;

      thirdRow.innerHTML =
        thirdRow.innerHTML +
        `<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${arrayData[6].album.cover}" class="  d-block col-4" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${arrayData[10].album.cover}" class="d-block col-4" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${arrayData[19].album.cover}" class="d-block col-4" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev  type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden ">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden ">Next</span>
        </button>
      </div>`;
    } else {
      console.log("ops, c'è stato un errore");
    }
  } catch (error) {
    console.log("C'è stato un errore:", error);
  }
};

window.onload = fetchGenerale(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica"
);

//TEST

/* const fetchBasic = async function (sito) {
  try {
    let res = await fetch(sito);
     console.log(res); 
    if (res.ok) {
      let data = await res.json();
      console.log(data); 
      let arrayData = data.data;
      console.log(arrayData);
      return arrayData;

    } else {
      console.log("ops, c'è stato un errore");
    }
  } catch (error) {
    console.log("C'è stato un errore:", error);
  }
}; */
