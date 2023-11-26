const aioKey = "aio_IDIi07yUHWpvmNrdWfRGGlZUSrYo";
const username = "LaraGenovese";
const feedName = "led-de-prueba";

const url = 'https://io.adafruit.com/api/v2/${username}/feeds/${feedName}/data';

const formData = new FormData();
formData.append('value', value);

fetch(url, {
  method: 'POST',
  headers: {
    "X-AIO-Key": aioKey
  },
  body: formData
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });