  
  function send(){
   var a = setTimeout(goTo, 8000);
}
//global variable

function goTo() {

    var input = document.querySelector('input').value;
      //all variables
  const cut = input.substring(input.indexOf('.c'));
  let footer = document.querySelector('.footer');
  let header = document.querySelector('.word');
  let head_image = document.querySelector('#word');
  let cont = document.querySelector('.head');
  let link = document.querySelector('#linked');
  let bar = document.getElementById('Pbar');
  let menu = document.getElementById('menu');

  //if statements

  if (input == null) {
    alert('input empty, please enter url');
  }
  if (cut == '.com') {
    location.href = input;
    
  }

  if (cut !== '.com') {
   localStorage.setItem('input_value', input);

   location.href = 'frame.html';
    
  }
}


//dropdown functions
//home tab
 function timee1(){
   setTimeout(index, 8000);
 }
 
 function index() {
   // Tab to edit
   location.href = 'index.html'
 }
 
 //search engine tab
 function timee2(){
   setTimeout(search, 8000);
 }
 
 function search() {
   // Tab to edit
   location.href = 'search_engine.html'
 }
 
 //about us tab
 function timee3(){
   setTimeout(info, 8000);
 }
 
 function info() {
   // Tab to edit
   location.href = 'info.html'
 }