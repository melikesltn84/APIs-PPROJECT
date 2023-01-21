document.querySelector("#btnSearch").addEventListener("click", function () {
  let text = document.querySelector("#search").value;
  console.log(text);
  getCountry(text);
});

function getCountry(country) {
  const request = new XMLHttpRequest();

  request.open("GET", "https://restcountries.com/v3.1/name/" + country);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    // console.log(data[0]);
    retrieveCountryInformation(data[0]);

    const requestCell = new XMLHttpRequest();
    const countries = data[0].borders.toString();
    requestCell.open(
      "GET",
      "https://restcountries.com/v3.1/alpha?codes=" + countries
    );
    requestCell.send();

    requestCell.addEventListener("load", function () {
      let data = JSON.parse(this.responseText);
      // console.log(data);
      neighborsCountry(data);
    });
  });
}

function retrieveCountryInformation(data) {
  let html = `
        <div class="card-header">Search Result</div>
        <div class="card-body">
          <div class="row">
            <div class="col-4">
                    <img src="${data.flags.png}" class="img-fluid" />
                  </div>
                  <div class="col-8">
                    <h3 class="card-title">${data.name.common}</h3>
                    <hr />
                    <div class="row">
                      <div class="col-4">Population:</div>
                      <div class="col-8">${(data.population / 1000000).toFixed(
                        1
                      )} million</div>
                    </div>
                    <div class="row">
                      <div class="col-4">Capital:</div>
                      <div class="col-8">${data.capital[0]}</div>
                    </div>
                    <div class="row">
                      <div class="col-4">Languages:</div>
                      <div class="col-8">${Object.values(data.languages)}</div>
                    </div>
                    <div class="row">
                      <div class="col-4">Region:</div>
                      <div class="col-8">${data.region}</div>
                    </div>
                  </div>
            </div>
        </div>
                  
      `;
  document
    .querySelector("#country-details")
    .insertAdjacentHTML("beforeend", html);
}

function neighborsCountry(data) {
  let html = "";
  for (let country of data) {
    html += `
          
          <div class="col-2 mt-2">
                    <div class="card">
                        <img src="${country.flags.png}" class="card-img-top">
                        <div class="card-body">
                            <h6 class="card-title">${country.name.common}</h6>
                        </div>
                    </div>
                </div>
          `;
  }
  document.querySelector("#neighbors-country").innerHTML = html;
}
