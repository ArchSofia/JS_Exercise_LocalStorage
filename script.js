const button = document.getElementById("button");
const scoreEl = document.getElementById("scoreElement");

/* How does Local storage work: Local storage has 3 methods:
+ setItem('key', 'value')  recieves a key and a value as parameters 
we associate the KEY with the VALUE. 

In the case of getItem, by using the KEY we can get its assigned value. 
+ getItem('key'): 'value' 
+ removeItem('key') => deletes the stored VALUE

GOOD PRACTICE: check if the navigator supports our local storage api. we do this with the
following line of code: 
if its not defined in window nor document it'll return the following message:  
*/

if (typeof localStorage === 'undefined') {
console.log("your browser doesn't support localstorage 😿");   
}

// lo siguiente sería verificar que no haya ningun elemento con la clave que vamos a utlizar
// score sería la clave que vamos a utilizar como key. si ya había un valor guardado nos lo
// va a mostrar en la consola de devtools del navegador:
if (localStorage.getItem('score')) {
    scoreEl.innerText = localStorage.getItem('score')
} else {
    localStorage.setItem('score','0')
}

// si está definido en el if lo mostramos. si no esta definido en el else
// lo seteamos. 
// LOCAL STORAGE SOLO ALMACENA STRINGS POR LO QUE LOS NUMEROS VAN CON '' TMB!
// SINO PODEMOS USAR LA API DE JSON JSON.stringify() que convierte objetos
// y arrays en strings!!  

// We gave localStorage the value of '0' in line 26  

//------------------- Adding an event to the "increment score" button ---------------//

button.onclick = () => {
let currentScore = localStorage.getItem('score')
localStorage.setItem('score', parseInt(++currentScore))
scoreEl.innerText = localStorage.getItem('score')
}


// To remove an Item and start the score over, write on the nav devTools console:
//
// localStorage.removeItem('Score') 


