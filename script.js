const country = document.querySelectorAll('.country');
const flag = document.querySelectorAll('.flag');
const countryname = document.querySelectorAll('.name');
const population = document.querySelectorAll('.population');
const region = document.querySelectorAll('.region');
const capital = document.querySelectorAll('.capital');
const main = document.querySelector('.main');
const filter = document.querySelector('.filter');
const filterbtns = document.querySelector('.filterbtns');
const africa = document.querySelector('.africa');
const america = document.querySelector('.america');
const asia = document.querySelector('.asia');
const europe = document.querySelector('.europe');
const oceania = document.querySelector('.oceania');
const searchbar = document.querySelector('.searchbar');
const searchbtn = document.querySelector('.searchbtn');


let filterstate = 0;

let flagid;



function addEventListeners(data) {
    const flagLinks = document.querySelectorAll('.flaglink');

    flagLinks.forEach(flag => {
        flag.addEventListener('click', (e) => {
            const flagId = e.currentTarget.getAttribute('data-flag-id');
            const flagData = data[flagId];

            localStorage.setItem('selectedCountry', JSON.stringify(flagData));

            window.location.href = './detail.html';
        });
    });
}



async function fetchCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let flagnumber = 0;

        for (; flagnumber < data.length;) {
            for (let j = 0; j < 4; j++) {
                if (flagnumber >= data.length) break; 
                if (typeof data[flagnumber].capital === "undefined") {
                    flagnumber++;
                    continue;
                }

                main.innerHTML += `
                    <div class="country">
                        <div class="flag">
                            <span class="flaglink" data-flag-id="${flagnumber}">
                                <img src="${data[flagnumber].flags.png}" alt="Flag">
                            </span>
                        </div>
                        <h4 class="name">${data[flagnumber].name.common}</h4>
                        <p class="population"><b>Population:</b> ${data[flagnumber].population}</p>
                        <p class="region"><b>Region:</b> ${data[flagnumber].continents[0]}</p>
                        <p class="capital"><b>Capital:</b> ${data[flagnumber].capital?.[0] || ""}</p>
                    </div>
                `;

                flagnumber++;
            }
        }

        addEventListeners(data);

    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

async function fetchCountriesAfrica() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let flagnumber = 0;

        for (; flagnumber < data.length;) {
            for (let j = 0; j < 4; j++) {
                if (flagnumber >= data.length) break; 
                if (typeof data[flagnumber].capital === "undefined") {
                    flagnumber++;
                    continue;
                }
                if(data[flagnumber].region == 'Africa'){
                    main.innerHTML += `
                    <div class="country">
                        <div class="flag">
                            <span class="flaglink" data-flag-id="${flagnumber}">
                                <img src="${data[flagnumber].flags.png}" alt="Flag">
                            </span>
                        </div>
                        <h4 class="name">${data[flagnumber].name.common}</h4>
                        <p class="population"><b>Population:</b> ${data[flagnumber].population}</p>
                        <p class="region"><b>Region:</b> ${data[flagnumber].continents[0]}</p>
                        <p class="capital"><b>Capital:</b> ${data[flagnumber].capital?.[0] || ""}</p>
                    </div>
                `;
                }


                flagnumber++;
            }
        }

        addEventListeners(data);

    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}


async function fetchCountriesAsia() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let flagnumber = 0;

        for (; flagnumber < data.length;) {
            for (let j = 0; j < 4; j++) {
                if (flagnumber >= data.length) break; 
                if (typeof data[flagnumber].capital === "undefined") {
                    flagnumber++;
                    continue;
                }
                if(data[flagnumber].region == 'Asia'){
                    main.innerHTML += `
                    <div class="country">
                        <div class="flag">
                            <span class="flaglink" data-flag-id="${flagnumber}">
                                <img src="${data[flagnumber].flags.png}" alt="Flag">
                            </span>
                        </div>
                        <h4 class="name">${data[flagnumber].name.common}</h4>
                        <p class="population"><b>Population:</b> ${data[flagnumber].population}</p>
                        <p class="region"><b>Region:</b> ${data[flagnumber].continents[0]}</p>
                        <p class="capital"><b>Capital:</b> ${data[flagnumber].capital?.[0] || ""}</p>
                    </div>
                `;
                }


                flagnumber++;
            }
        }

        addEventListeners(data);

    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}


async function fetchCountriesEurope() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let flagnumber = 0;

        for (; flagnumber < data.length;) {
            for (let j = 0; j < 4; j++) {
                if (flagnumber >= data.length) break; 
                if (typeof data[flagnumber].capital === "undefined") {
                    flagnumber++;
                    continue;
                }
                if(data[flagnumber].region == 'Europe'){
                    main.innerHTML += `
                    <div class="country">
                        <div class="flag">
                            <span class="flaglink" data-flag-id="${flagnumber}">
                                <img src="${data[flagnumber].flags.png}" alt="Flag">
                            </span>
                        </div>
                        <h4 class="name">${data[flagnumber].name.common}</h4>
                        <p class="population"><b>Population:</b> ${data[flagnumber].population}</p>
                        <p class="region"><b>Region:</b> ${data[flagnumber].continents[0]}</p>
                        <p class="capital"><b>Capital:</b> ${data[flagnumber].capital?.[0] || ""}</p>
                    </div>
                `;
                }


                flagnumber++;
            }
        }

        addEventListeners(data);

    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

async function fetchCountriesOceania() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let flagnumber = 0;

        for (; flagnumber < data.length;) {
            for (let j = 0; j < 4; j++) {
                if (flagnumber >= data.length) break; 
                if (typeof data[flagnumber].capital === "undefined") {
                    flagnumber++;
                    continue;
                }
                if(data[flagnumber].region == 'Oceania'){
                    main.innerHTML += `
                    <div class="country">
                        <div class="flag">
                            <span class="flaglink" data-flag-id="${flagnumber}">
                                <img src="${data[flagnumber].flags.png}" alt="Flag">
                            </span>
                        </div>
                        <h4 class="name">${data[flagnumber].name.common}</h4>
                        <p class="population"><b>Population:</b> ${data[flagnumber].population}</p>
                        <p class="region"><b>Region:</b> ${data[flagnumber].continents[0]}</p>
                        <p class="capital"><b>Capital:</b> ${data[flagnumber].capital?.[0] || ""}</p>
                    </div>
                `;
                }


                flagnumber++;
            }
        }

        addEventListeners(data);

    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

async function fetchCountriesAmerica() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let flagnumber = 0;

        for (; flagnumber < data.length;) {
            for (let j = 0; j < 4; j++) {
                if (flagnumber >= data.length) break; 
                if (typeof data[flagnumber].capital === "undefined") {
                    flagnumber++;
                    continue;
                }

                if (data[flagnumber].region === 'Americas' && (data[flagnumber].subregion === 'North America' || data[flagnumber].subregion === 'South America')) {
                    main.innerHTML += `
                    <div class="country">
                        <div class="flag">
                            <span class="flaglink" data-flag-id="${flagnumber}">
                                <img src="${data[flagnumber].flags.png}" alt="Flag">
                            </span>
                        </div>
                        <h4 class="name">${data[flagnumber].name.common}</h4>
                        <p class="population"><b>Population:</b> ${data[flagnumber].population}</p>
                        <p class="region"><b>Region:</b> ${data[flagnumber].continents[0]}</p>
                        <p class="capital"><b>Capital:</b> ${data[flagnumber].capital?.[0] || ""}</p>
                    </div>
                `;
                }
                flagnumber++;
            }
        }

        addEventListeners(data);

    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

async function fetchCountriesSearch(search) {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let flagnumber = 0;

        for (; flagnumber < data.length;) {
            for (let j = 0; j < 4; j++) {
                if (flagnumber >= data.length) break; 
                if (typeof data[flagnumber].capital === "undefined") {
                    flagnumber++;
                    continue;
                }
                if(data[flagnumber].name.common.includes(search) == true){
                    main.innerHTML += `
                    <div class="country">
                        <div class="flag">
                            <span class="flaglink" data-flag-id="${flagnumber}">
                                <img src="${data[flagnumber].flags.png}" alt="Flag">
                            </span>
                        </div>
                        <h4 class="name">${data[flagnumber].name.common}</h4>
                        <p class="population"><b>Population:</b> ${data[flagnumber].population}</p>
                        <p class="region"><b>Region:</b> ${data[flagnumber].continents[0]}</p>
                        <p class="capital"><b>Capital:</b> ${data[flagnumber].capital?.[0] || ""}</p>
                    </div>
                `;
                }
                flagnumber++;
                

            }
        }

        addEventListeners(data);

    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}


fetchCountries();
// fetchCountriesAfrica();
// fetchCountriesAmerica();
// fetchCountriesAsia();
// fetchCountriesEurope();
// fetchCountriesOceania();
// fetchCountriesSearch("Taiwan");

searchbar.addEventListener("keyup", (e) => {

        let searching = e.target.value;
        let result1 = searching.trim();
        let result = result1.charAt(0).toUpperCase() + result1.slice(1);

        if(result != ""){
            main.innerHTML = "";
            fetchCountriesSearch(result);
        }
        else{
            main.innerHTML = "";
            fetchCountries();
        }

});

// searchbtn.addEventListener("click", (e) => {
//     let searching = e.target.value;
//     let result1 = searching.trim();
//     let result = result1.charAt(0).toUpperCase() + result1.slice(1);
//     if(result != ""){
//         main.innerHTML = "";
//         fetchCountriesSearch(result);
//     }
//     else{
//         main.innerHTML = "";
//         fetchCountries();
//     }
// });

filterbtns.addEventListener('click', (e) => {

    if (e.target.classList.contains('filter')) {
        if (filterstate === 1) {

            filterbtns.innerHTML = '<div><button class="filter">Filter by Region</button></div>';
            filterstate = 0;
            fetchCountries();
        } else {

            filterstate = 1;
            filterbtns.innerHTML = `
                <div><button class="filter">Filter by Region</button></div>
                <div><button class="africa">Africa</button></div>
                <div><button class="america">America</button></div>
                <div><button class="asia">Asia</button></div>
                <div><button class="europe">Europe</button></div>
                <div><button class="oceania">Oceania</button></div>
            `;



            const buttons = filterbtns.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const region = event.target.textContent; 
                    main.innerHTML = ""; 
                    


                    if (region === 'Africa') {
                        fetchCountriesAfrica();
                    } else if (region === 'America') {
                        fetchCountriesAmerica();
                    } else if (region === 'Asia') {
                        fetchCountriesAsia();
                    } else if (region === 'Europe') {
                        fetchCountriesEurope();
                    } else if (region === 'Oceania') {
                        fetchCountriesOceania();
                    }
                });
            });
        }

    }
});
