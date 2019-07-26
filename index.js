var submit = $('.submit');
var number = $('.number');
var submitcontainer = $('.submitcontainer')

submit.on('click', checkNumber);

function checkNumber(){
  if (number.val()%2 === 0){
  submitcontainer.append(`Even`)
  }
  else {
    submitcontainer.append(`odd`)
  }
}

var submit = $('.submit');
var number = $('.number');
var submittwocontainer = $('.submittwocontainer')

submit.on('click', checkNumber);

function checkNumber(){
  if (number.val()%3 === 0 ){
    submittwocontainer.append(`<p>fizz</p>`)
  }
  if (number.val()%5 === 0 ){
    submittwocontainer.append(`<p>buzz</p>`)
  }
  if (number.val()== 15){
    submittwocontainer.append(`<p>fizzbuzz</p>`)
  }
  else {
    submittwocontainer.append(`<p>nope</p>`)
  }
}
