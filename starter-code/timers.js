// your code here:

function init() {
// define what the buttons does
var resetButton = document.querySelector('#reset')
var pauseButton = document.querySelector('#pause')
var startButton = document.querySelector('#start')

//
var i = 0; var timer;
// var runSpeed = 1000;

var time = document.querySelector('#timer');

resetButton.addEventListener('click', resetSW )
pauseButton.addEventListener('click', pauseSW )
startButton.addEventListener('click', startSW )


function startSW () {
  timer = setInterval (runner, 1000);
}

function pauseSW () {
clearInterval(timer);
}

function resetSW () {
clearInterval(timer);
time.textContent = 0;
i = 0;
}

function runner () {
  i+=1;
  time.textContent = 'Time passed: ' + i;
}

}







// function startSW() {
//   button.addEventListener('click', function() {
//   h2.textContent = 'Lets go' + count ++;
//   body.appendChild(h2)
//   window.setInterval(startSW, 1000)
// })
// };
//
//
// function startSW() {
//    h2.textContent = "Whoop "+ count++;
//  body.appendChild(h2)
//  window.setInterval(doAgain, 500);
// }
//
// button.addEventListener('click', startSW())
//
//
// startSW();

//   var i = 0; timer;
//   var divide = 100;
//
//   function startSW() {
//   timer.self.setInterval('increment()', (1000 / divide) )
// }
//
// function increment() {
//   i++;
//   document.getElementbyID('timer_out').innerHTML = (i / divide);
// }
//
// function stopSW() {
//   clearInterval(timer);
//   timer = null;
// }
//
// function resetSW() {
//   stopSW();
//   i = 0
//   document.getElementByID('timer_out').innerHTML = (i / divide);
// }
//
// }
