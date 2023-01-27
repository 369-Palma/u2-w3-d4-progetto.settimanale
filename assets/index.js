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

fetchGenerale(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica"
);
