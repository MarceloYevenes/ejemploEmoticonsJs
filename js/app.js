//Variables
const selectEmoticon = document.querySelector('.emoticon');
initEvent();

//Eventos
function initEvent(){
  document.addEventListener('keydown', (event) => {
    const valorTecla = event.key;
    const elemento = document.createElement('p');
    elemento.style = 'font-size:100px';
   
    switch (valorTecla) {
      case '1':
        elemento.innerHTML= '&#128540;';
        break;
  
      case '2':
        elemento.innerHTML= '&#128518;';
        break;
  
      case '3':
        elemento.innerHTML= '&#128519;';
        break;
  
      case '4':
        elemento.innerHTML= '&#128524;';
        break;
  
      default:
        break;
    }
    
    limpiarHtML();
    selectEmoticon.appendChild(elemento);

  });
}


//Funciones
function limpiarHtML(){
  //Limpiar el html
  while(selectEmoticon.firstChild){
    selectEmoticon.removeChild(selectEmoticon.firstChild)
  }
}