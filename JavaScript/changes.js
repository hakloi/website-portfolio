//STYLE FROM JS ------------------------------
var allUL = document.getElementsByTagName("ul");

for(var i=0; i<allUL.length; i++){
    allUL[i].style.textAlign="center";
    allUL[i].style.listStyleType="none"; //"circle"
}


// ACCESSABILITY - poor vision ----------------
document.getElementById("bigA").onclick = function(){changeSize("medium");}
document.getElementById("smallA").onclick = function(){changeSize("default");}

function changeSize(c){
    const n = document.getElementsByClassName("info-text");

    console.log('here')
    for (var i = 0; i < n.length; i++) {
        const paragraphs = n[i].querySelectorAll('p'); 
        
        for (var j = 0; j < paragraphs.length; j++) {
            paragraphs[j].className = c;
            console.log('there')
        }
    }
}

// BUBBLES ON MOUSE MOVE -----------------------

//document.addEventListener('mousemove', (event) => {
//    const bubble = document.createElement('div');
//    bubble.classList.add('bubble');
//
//    // Position the bubble relative to the cursor
//    bubble.style.left = event.clientX + 'px';
//    bubble.style.top = event.clientY + 'px';
//
//    document.body.appendChild(bubble);
//
//    setTimeout(() => {
//        bubble.remove();
//    }, 200); // 500ms delay
//});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
