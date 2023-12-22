//Event Loop 

// const delay = (time = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve();
//             reject('Error');
//         },time);
//     });
//     return promise
// };

// delay(2500).then((data) => {
//     console.log('Hi timeout');
//     return data.map((x) => x** 2)
// })
// .then((data) => {console.log(data)})
// .catch((err) =>{ console.log(err)})
// .finally(() => { console.log('Finaly')});

// const getData = () => new Promise((resolve) => resolve([1,2,3]));

// async function asyncExample () {
//     try {
//         const data = await getData();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log('Finally');
//     }
// };

// asyncExample();

let photosLibrary;
const html = document.querySelector('.container');

async function fetchData (url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        photosLibrary = data;
        let cardsHtml = '';
        photosLibrary.map((element) => {
            cardsHtml += renderCard(element);
        } );
        html.innerHTML = cardsHtml;
    } catch (error) {
        console.error('Error');
    }
}

fetchData('https://jsonplaceholder.typicode.com/photos');

function renderCard (obj) {
    return `
    <div class="card" style="width: 18rem;">
        <img src=${obj.url} class="card-img-top" alt="img">
        <div class="card-body">
            <p class="card-text">${obj.title}</p>
        </div>
    </div>
    `
};