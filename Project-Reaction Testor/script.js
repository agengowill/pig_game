function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 var start = new Date().getTime();
function makeShapeAppear(){

document.getElementById('shape').style.backgroundColor =  getRandomColor();
    
var width = (Math.random()*300) + 100;
document.getElementById('shape').style.width = width + 'px';

document.getElementById('shape').style.height = width + 'px';

var top = Math.random()*400;
document.getElementById('shape').style.top = top + 'px';

var left = Math.random()*400;
document.getElementById('shape').style.left = left + 'px';


 document.getElementById('shape').style.display = 'block';
     start = new Date().getTime();
  
    if (Math.random() > 0.5){
        document.getElementById('shape').style.borderRadius = '50%';
    } else {
        document.getElementById('shape').style.borderRadius = '0';
    }
}
function appearAfterDelay(){
setTimeout(makeShapeAppear,Math.random()*1000);

}
appearAfterDelay();

document.getElementById('shape').onclick = function() {
document.getElementById('shape').style.display = 'none';

 
var end = new Date().getTime();
var timeTaken = (end - start)/ 1000;
document.getElementById('timeTaken').innerHTML = timeTaken +'s';
appearAfterDelay();

}

