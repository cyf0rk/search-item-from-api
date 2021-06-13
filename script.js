// let user = 'luceed_mb';
// let pass = '7e5y2Uza';

// let auth = btoa(user + ":" + pass);

// let myHeaders = new Headers();
// myHeaders.append("Authorization", "Basic " + auth);

// let requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// }


// Fetch data from API upon search
// async function searchName() {
//   await fetch(`http://apidemo.luceed.hr/datasnap/rest/artikli/naziv/${search.value}`, requestOptions)
//     .then(response => response.json())
//     .then(result => productsObj = result.result)
//     .catch(error => console.log('error', error))
  
//   emptyProductList();

//   productsObj[0]['artikli'].forEach(product => {
//     if (product.naziv.toLowerCase().includes(search.value.toLowerCase())) {
//       displayData(product);
//     }
//   })
// }


let productsObj = {};

const search = document.getElementById('search');
search.oninput = searchName;

// Test - fetch data from .json file and store it in a object productsObj
async function searchName() {
  await fetch('test.json').then(response => response.json()).then(obj => productsObj = obj.result);
  productsObj[0]['artikli'].forEach(displayData);

  emptyProductList();

  productsObj[0]['artikli'].forEach(product => {
    if (product.naziv.toLowerCase().includes(search.value.toLowerCase())) {
      displayData(product);
    }
  })
}

function displayData(product) {
  document.getElementById("product-list").innerHTML += `<div class="artikl col border border-2"><span>Naziv: ${product.naziv}</span><br><span>Šifra: ${product.artikl}</span></div><br>`;
}

function emptyProductList() {
  document.getElementById("product-list").innerHTML = '';
}
