const flagimg = document.querySelector('.flagimg');
const infodata = document.querySelector('.data');
const infodata2 = document.querySelector('.data2');
const infodata3 = document.querySelector('.data3');

document.addEventListener("DOMContentLoaded", async () => {

    try {

        const countryData = localStorage.getItem("selectedCountry");

        if (!countryData) {
            console.error("Brak danych o kraju w localStorage.");
            return;
        }

        const country = JSON.parse(countryData);


        const currenciesKeys = country.currencies ? Object.keys(country.currencies) : [];
        const currenciesValues = country.currencies ? Object.values(country.currencies) : [];

        const languageKeys = country.languages ? Object.keys(country.languages) : [];
        const languageValues = country.languages ? Object.values(country.languages) : [];

        const borderKeys = country.borders ? Object.keys(country.borders) : [];
        const borderValues = country.borders ? Object.values(country.borders) : [];

        console.log("Pobrane dane:", country);

 
        flagimg.innerHTML = `<img src="${country.flags.png}" alt="Flag">`;


        infodata.innerHTML = `
            <b>Official Name: </b>${country.name.official}<br>
            <b>Population: </b>${country.population}<br>
            <b>Region: </b>${country.region}<br>
            <b>Sub Region: </b>${country.subregion}<br>
            <b>Capital: </b>${country.capital}
        `;


        infodata2.innerHTML = `<b>Top Level Domain: </b>${country.tld[0]}<br><b>Currencies: </b>`;


        for (let i = 0; i < currenciesKeys.length; i++) {
            if (i > 0) {
                infodata2.innerHTML += `, ${currenciesValues[i].name}`;
            } else {
                infodata2.innerHTML += `${currenciesValues[i].name}`;
            }
        }


        infodata2.innerHTML += `<br><b>Languages: </b>`;
        for (let i = 0; i < languageKeys.length; i++) {
            if (i > 0) {
                infodata2.innerHTML += `, ${languageValues[i]}`;
            } else {
                infodata2.innerHTML += `${languageValues[i]}`;
            }
        }


        if (country.borders && country.borders.length > 0) {
            infodata3.innerHTML = `<b>Bordering countries codes: </b>`;
            for (let i = 0; i < borderKeys.length; i++) {
                if (i > 0) {
                    infodata3.innerHTML += `, ${borderValues[i]}`;
                } else {
                    infodata3.innerHTML += `${borderValues[i]}`;
                }
            }
        } else {
            infodata3.innerHTML = "<b>There are no bordering countries.</b>";
        }

    } catch (error) {
        console.error("Wystąpił błąd:", error);
    }

});