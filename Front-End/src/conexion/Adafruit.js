 
const aioKey = "aio_yOFb11Te84dGXzxL5SqcNchbE2yn";
const username = "LaraGenovese";
const feedName = "led-de-prueba";
let value;
//GET ultimo valor:
const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feedName}/data?limit=1`;

const headers = {
  "X-AIO-Key": aioKey
};

fetch(url, { headers })
  .then(response => {
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Handle the response data here
  })
  .catch(error => {
    console.error("Error:", error);
    // Handle any errors that occur during the request
  });

//POST
const boton_prendido= 
{
  textContent: "Prender",
  addEventListener: function(event, callback){
    if(event === 'click'){
      callback();
    }
  }

}

const boton_apagado= 
{
  textContent: "Apagar",
  addEventListener: function(event, callback){
    if(event === 'click'){
      callback();
    }
  }

}


boton_prendido.addEventListener('click', function() {
  value = 'ON';
  console.log('Prendido!');
});



boton_apagado.addEventListener('click', function() {
  value = 'OFF';
  console.log('Apagado!');
});


const url2 = `https://io.adafruit.com/api/v2/${username}/feeds/${feedName}/data`;

const formData = new FormData();
formData.append('value', value);

fetch(url2, {
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
    // Handle the response data here
  })
  .catch(error => {
    console.error("Error:", error);
    // Handle any errors that occur during the request
  });