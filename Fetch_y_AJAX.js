// A continuación, se muestra un ejemplo de cómo realizar solicitudes GET usando ambas técnicas:

// Usando la Fetch API:
// La Fetch API es una interfaz moderna para realizar solicitudes HTTP en JavaScript. Aquí tienes un ejemplo de cómo hacer una solicitud GET y manejar la respuesta:

// URL de la API que deseas consultar
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Hacer una solicitud GET utilizando la Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener la respuesta');
    }
    return response.json(); // Convierte la respuesta en un objeto JSON
  })
  .then(data => {
    // Hacer algo con los datos obtenidos, por ejemplo, mostrarlos en la consola
    console.log(data);
  })
  .catch(error => {
    // Manejar errores, por ejemplo, mostrar un mensaje de error
    console.error('Error:', error);
  });

// Usando AJAX (XMLHttpRequest):
// Ajax es una técnica más antigua para realizar solicitudes asincrónicas. Aquí tienes un ejemplo de cómo hacer una solicitud GET utilizando XMLHttpRequest:

// URL de la API que deseas consultar
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Crear una instancia de XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurar la solicitud
xhr.open('GET', apiUrl, true);

// Manejar la respuesta cuando la solicitud se complete
xhr.onload = function () {
  if (xhr.status === 200) {
    // La solicitud fue exitosa, procesa la respuesta
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    // La solicitud no fue exitosa, muestra un mensaje de error
    console.error('Error:', xhr.statusText);
  }
};

// Manejar errores de red
xhr.onerror = function () {
  console.error('Error de red');
};

// Enviar la solicitud
xhr.send();

// Ambos ejemplos son solicitudes GET básicas.
// Puedes adaptarlos para realizar solicitudes POST u otras operaciones según tus necesidades. La Fetch API es más moderna y recomendada, pero XMLHttpRequest aún se utiliza en ciertos casos.

// EJEMPLO DE POST CON FETCH Y AJAX

// Usando la Fetch API para una solicitud POST:

// URL de la API donde deseas enviar datos
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Datos que deseas enviar en la solicitud POST (en este caso, un objeto JSON)
const postData = {
  title: 'Título del post',
  body: 'Contenido del post',
  userId: 1,
};

// Configurar la solicitud POST
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData), // Convierte los datos a JSON
})
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo enviar la solicitud');
    }
    return response.json(); // Si esperas una respuesta en JSON
  })
  .then(data => {
    // Hacer algo con la respuesta, por ejemplo, mostrarla en la consola
    console.log(data);
  })
  .catch(error => {
    // Manejar errores
    console.error('Error:', error);
  });


// Usando XMLHttpRequest para una solicitud POST:

// URL de la API donde deseas enviar datos
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Datos que deseas enviar en la solicitud POST (en este caso, un objeto JSON)
const postData = {
  title: 'Título del post',
  body: 'Contenido del post',
  userId: 1,
};

// Crear una instancia de XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurar la solicitud POST
xhr.open('POST', apiUrl, true);
xhr.setRequestHeader('Content-Type', 'application/json');

// Manejar la respuesta cuando la solicitud se complete
xhr.onload = function () {
  if (xhr.status === 201) {
    // La solicitud fue exitosa, procesa la respuesta
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    // La solicitud no fue exitosa, muestra un mensaje de error
    console.error('Error:', xhr.statusText);
  }
};

// Manejar errores de red
xhr.onerror = function () {
  console.error('Error de red');
};

// Enviar la solicitud POST con los datos convertidos a JSON
xhr.send(JSON.stringify(postData));

// Estos ejemplos te permiten realizar solicitudes POST a una API con datos específicos y manejar la respuesta o los errores que puedan ocurrir.
