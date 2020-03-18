 // Variables
 
 const listaTweets = document.getElementById('lista-tweets');


 // Event Listeners
 eventListeners(); //esto es para llamar a la funcion (dentro de la misma, no de forma global)

 function eventListeners(){
     // Cuando se envia el formulario
     document.querySelector('#formulario').addEventListener('submit', agregarTweet);


//Submit es el listener y agregar tweet la funcion a ejecutar

// Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

// Contenido cargado

    document.addEventListener('DOMContentLoaded', localStorageListo);
}

 // Funciones

 // Añadir tweet del formulario

 function agregarTweet(e) {
    e.preventDefault();
     //leer el valor del textarea

    const tweet = document.getElementById('tweet').value;
    //Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

     //crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');

    li.innerText = tweet;
    // añade el boton de borrar al twweet
    li.appendChild(botonBorrar);
    // añade el tweet a la lista
    listaTweets.appendChild(li);

    // Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
 }
 // Elimina el tweet del DOM
 
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText)
        
    }
}

// Mostrar datos de LocalStorage en la lista
function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet){
        //Crear boton de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        //crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');

        li.innerText = tweet;
        // añade el boton de borrar al twweet
        li.appendChild(botonBorrar);
        // añade el tweet a la lista
        listaTweets.appendChild(li);

    });
}

//Agrega tweet a local storage

function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //Añadir el nuevo tweet
    tweets.push(tweet); 
    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets) );

}

//Comprobar que haya elementos en local Storage
function obtenerTweetsLocalStorage(){
    let tweets;
    // Revisamos los valores de local storage
    if(localStorage.getItem('tweets') === null){
        tweets = []; 
    } else{
        tweets = JSON.parse(localStorage.getItem('tweets') );
    }
    return tweets;
}

// Eliminar tweet de Local Storage

function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet){
            tweets.splice(index, 1)
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}