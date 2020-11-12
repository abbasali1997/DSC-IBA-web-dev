let packages = [
    {
        name: 'Turkey',
        price: 1200,
        description: 'Istanbul is incredible. It’s one of the most awe-inspiring countries. Home to breathtaking architecture, delicious food, and some of the warmest, most genuinely hospitable people, it’s a country to visit again and again.',
        image: 'https://images.unsplash.com/photo-1545119743-a1bdb8f1f502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80'
    },
    {
        name: 'Malaysia',
        price: 900,
        description: 'Malaysia, the country that is famous for tree plantation. The famous slogan “Malaysia Truly Asia” is really true because it is an assemblage of Asian culture. Muslims, Indians, Chinese, Portuguese and other religions are settled in Malaysia.',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80'
    },
    {
        name: 'UAE',
        price: 1000,
        description: ' United Arab Emirates or UAE or only Emirates is more than just Dubai’s iconic skyscrapers, palm-shaped islands, city-sized malls, and palatial beach resorts. Beyond the gloss await a diverse mosaic of six more emirates, each unique with its character and allure.',
        image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80'
    }
];

let conversionRates = {
    pkr: 158.21,
    eur: 0.85,
    inr: 74.63,
    usd: 1
};

let currencySymbols = {
    pkr: 'Rs',
    eur: '&#8364',
    inr: '&#8377',
    usd: '$'
};

{/* <section class="container">
    <div class="row">
        <div class="col-6">
            <img class="img-fluid border rounded w-100" src="https://images.unsplash.com/photo-1545119743-a1bdb8f1f502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80">
        </div>
        <div class="col-6 d-flex flex-column justify-content-between p-5 mt-5 mt-lg-0 packageDetails">
            <div class="d-flex justify-content-between">
                <h1>Turkey</h1>
                <h5>$1200</h5>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tempora odio corporis ad non numquam eius deleniti impedit veritatis accusamus ab labore repellendus libero quas nisi odit assumenda quis eum.</p>

            <button class="btn btn-outline-light">Read more</button>
        </div>
    </div>
</section>

<hr class="my-5"> */}

// creating all packages
const container = document.querySelector('.container');

let newSection;
let newHr;
packages.forEach(function (package, idx, arr) {
    newRow = document.createElement('div');
    newRow.setAttribute('class', 'row');
    newRow.innerHTML += `\
            <div class="col-6">\
                <img class="img-fluid border rounded w-100" src=${package.image}>\
            </div>\
            <div class="col-6 d-flex flex-column justify-content-around packageDetails">\
                <div class="d-flex justify-content-between">\
                    <h1>${package.name}</h1>\
                    <h5 class="price"><span>$</span>${package.price}</h5>\
                </div>\
                <p>${package.description}</p>\
                <button class="btn btn-outline-light">Read more</button>\
            </div>`;
    container.appendChild(newRow);
    if (idx !== arr.length - 1) {
        newHr = document.createElement('hr');
        newHr.setAttribute('class', 'my-5');
        container.appendChild(newHr);
    }
});

//Currency exchange
const input = document.querySelector('#currencies');
const price = document.querySelectorAll('.price');
let inputValue;

input.addEventListener('change', function () {
    inputValue = this.value.slice(0, 3).toLowerCase();
    // console.log(conversionRates[inputValue]);

    price.forEach(function (pr, idx) {
        let calcuatedPrice = packages[idx].price * conversionRates[inputValue];
        pr.innerHTML = `<span>${currencySymbols[inputValue]}</span>${calcuatedPrice}`;
    })
})
