function updateTime() {
  //New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Buenos Aires
  let buenosAiresElement = document.querySelector("#buenos-aires");
  let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
  let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
  let buenosAiresTime = moment().tz("America/Argentina/Buenos_Aires");

  buenosAiresDateElement.innerHTML = buenosAiresTime.format("MMMM Do YYYY");
  buenosAiresTimeElement.innerHTML = buenosAiresTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Copenhagen
  let copenhagenElement = document.querySelector("#copenhagen");
  let copenhagenDateElement = copenhagenElement.querySelector(".date");
  let copenhagenTimeElement = copenhagenElement.querySelector(".time");
  let copenhagenTime = moment().tz("Europe/Copenhagen");

  copenhagenDateElement.innerHTML = copenhagenTime.format("MMMM Do YYYY");
  copenhagenTimeElement.innerHTML = copenhagenTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value.split(" ")[0];
  let selectedCity = event.target.value.split(" ")[1];
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
    selectedCity = cityTimeZone;
  }

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h3>${selectedCity}</h3>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
