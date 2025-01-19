const channelId = 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
      apiKey = 'AIzaSyB361OxFYjoOALzvY-IOVBPtpTsVKFEUz8', // use your own!
      api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

      container = document.querySelector(".container"),
      col = document.querySelector(".counter"),
      odometer = document.getElementById("odometer");

let subCount =287;

const urls = [api_response];

setInterval(() => {
  requestCall(api_response);
}, 2000);

const requestCall = apiCall =>
  fetch(apiCall)
    .then(blob => blob.json())
    .then(data => {
      subCount = 287;
      odometer.innerHTML = subCount;
    });
