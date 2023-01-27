let firstRow = document.getElementById("primaSezione");

const fetchGenerale = async function (sito) {
  try {
    let res = await fetch(sito);
    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      let arrayData = data.data;
      console.log(typeof arrayData);

      for (let i = 0; i < 4; i++) {
        firstRow.innerHTML =
          firstRow.innerHTML +
          `<div class="card d-flex mx-auto mb-2 col-6 col-lg-3 " >
      <img src="${arrayData[i].album.cover}" class="card-img-top" alt="${arrayData[i].title}">
      <div class="card-body">
        <p class="card-text">${arrayData[i].title}</p>
        
      </div>
    </div>`;
      }
    } else {
      console.log("ops, c'è stato un errore");
    }
  } catch (error) {
    console.log("C'è stato un errore:", error);
  }
};

fetchGenerale(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica"
);
