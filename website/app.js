// API key
const apiKey1 = "97473a83697270218877e9540ff8d04f&units=imperial";
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';

// the data that would be sent to server via post request
const data = {}

// form elements
const zipInput = document.getElementById('zip');
const feelingsInput = document.getElementById('feelings');
const submitBtn = document.getElementById('generate');

submitBtn.addEventListener('click', (e) => { e.preventDefault(); SubmitDataAndUpdateUI(); });

function SubmitDataAndUpdateUI() {
  getWeatherData(baseURL, zipInput.value, apiKey1)
  .then(temperature => {data.temp = temperature})
  .then(() => { sendDataToServer(); })
  .then(() => { getRecentData(); })
  .catch((err) => {
    alert(err);
  })
}

async function getWeatherData(url, zipCode, key) {
  try {
    const response = await fetch(`${url}zip=${zipCode}&appid=${key}`);
    if (response.ok) {
      const dataObj = await response.json();
      return dataObj.main.temp;
    } if (response.satus == 401) {
      throw new Error('We are experiencing issues retrieving data due to a configuration error. Please try again later, and feel free to contact support if the issue persists.');
    } else {
      throw new Error('Request failed (404). Please check your input and try again in this format: zipcode,countrycode (e.g., 12345,US).');
    }
  } catch (err) {
    throw new Error(err);
  }
}

async function sendDataToServer() {
  const date = new Date().toLocaleDateString();
  const body = {
    date: date, 
    temp: data.temp, 
    content: feelingsInput.value,
  }
  try {
    const response = await fetch('/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
  } catch (err) {
    throw new Error('Faild to send your inputs.')
  }
}

async function getRecentData() {
  try {
    const response = await fetch('/all');
    const returnedObj = await response.json();
    console.log(returnedObj)
    console.log(document.getElementById('temp'))
    document.getElementById('temp').innerText = `${Math.round(returnedObj.temp)} degrees`;
    document.getElementById('date').innerText = `${returnedObj.date}`;
    document.getElementById('content').innerText = returnedObj.content;
  } catch (err) {
    throw new Error('Failed to get your recent data from the server.')
  }
}


