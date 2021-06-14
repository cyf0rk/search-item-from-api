let myHeaders = new Headers();

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
}


// Fetch data from API upon search using connection.php
async function searchName() {
  await fetch(`connection.php/${search.value}`, requestOptions)
    .then(response => response.json())
    .then(result => productsObj = result.result)
    .catch(error => console.log('error', error))
  
  emptyProductList();

  productsObj[0]['artikli'].forEach(product => {
    if (product.naziv.toLowerCase().includes(search.value.toLowerCase())) {
      displayData(product);
    }
  })
}

let productsObj = {};

const search = document.getElementById('search');
search.oninput = searchName;


function displayData(product) {
  document.getElementById("product-list").innerHTML += `<div class="artikl col border border-2"><span>Naziv: ${product.naziv}</span><br><span>Šifra: ${product.artikl}</span></div><br>`;
}

function emptyProductList() {
  document.getElementById("product-list").innerHTML = '';
}
