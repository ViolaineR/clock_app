const worldTimeAPI = "https://worldtimeapi.org/api/ip";
const ipAPI = "http://ip-api.com/json/"
let ip;
const timezone = document.querySelector(".timezone");
const abbreviation = document.querySelector(".abbreviation");
const datetime = document.querySelector(".time");
const greeting = document.querySelector(".greeting");
const dayOfWeek = document.querySelector(".day-of-week");
const dayOfYear = document.querySelector(".day-of-year");
const weekNumber = document.querySelector(".week-number");
const city = document.querySelector(".city");
const countryId = document.querySelector(".country-id");


async function handleTimeAPI() {
    await fetch(worldTimeAPI).then(response => {
        return response.json();
    }).then(time => {
        ip = time.client_ip;
        timezone.textContent = time.timezone;
        datetime.textContent = time.datetime.slice(11, 16);
        abbreviation.textContent = time.abbreviation;
        dayOfWeek.textContent = time.day_of_week;
        dayOfYear.textContent = time.day_of_year;
        weekNumber.textContent = time.week_number;

        const hour = parseInt(datetime.textContent.slice(0, 2));
        if (hour >= 5 && hour < 12) {
            greeting.textContent = "Good morning";
        } else if (hour >= 12 && hour < 18) {
            greeting.textContent = "Good afternoon";
            console.log(datetime.textContent.slice(0, 2));
        } else {
            greeting.textContent = "Good evening";
        }
    });
}

handleTimeAPI();

async function handleCityAPI() {
    await fetch(ipAPI + ip).then(response => {
        return response.json();
    }).then(res => {
        city.textContent = res.city;
        countryId.textContent = res.country_id;
    })
}

handleCityAPI();
