let firstRow = document.getElementById("primaSezione");

const fetchGenerale = async function (sito) {
  try {
    let res = await fetch(sito);
    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
    } else {
      console.log("ops, c'è stato un errore");
    }
  } catch (error) {
    console.log("C'è stato un errore:", error);
  }
};

let WhiskeyInTheJar = fetchGenerale(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica"
);
for (let i = 0; i < 4; i++) {
  firstRow.innerHTML =
    firstRow.innerHTML +
    `<div class="card" style="width: 18rem;">
      <img src="data.md5_img" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">data.title</p>
      </div>
    </div>`;
}
