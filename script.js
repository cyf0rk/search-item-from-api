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


// Fetch data from API
// fetch('http://apidemo.luceed.hr/datasnap/rest/grupeartikala/lista', requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error))

let productsObj = {};

function displayData(product) {
  document.getElementById("product-list").innerHTML += `<div class="artikl col border border-2"><span>Naziv: ${product.naziv}</span><br><span>Šifra: ${product.artikl}</span></div><br>`;
}

// Fetch data from .json file and store it in a object productsObj
async function getData() {
  await fetch('test.json').then(response => response.json()).then(obj => productsObj = obj.result);
  // console.log(productsObj[0]['artikli'][0].artikl);
  productsObj[0]['artikli'].forEach(displayData);
}

getData();


let search = document.getElementById('search');
search.oninput = searchName;

function searchName() {
  document.getElementById("product-list").innerHTML = '';
  productsObj[0]['artikli'].forEach(product => {
    if (product.naziv.toLowerCase().includes(search.value.toLowerCase())) {
      displayData(product);
    }
  })
}
