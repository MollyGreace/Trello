window.addEventListener('load',function(){
/*Varaibles */
  var contForm = document.querySelector('form');
  var inputTxt = document.querySelector('input');
  var contList = document.querySelector('div')

/*Cambia el input por un tablero grande*/
  inputTxt.addEventListener('click',function(){
    contForm.removeChild(inputTxt);
    newForm(event);
  }) 

  function newForm(event) {
    
  }
});  