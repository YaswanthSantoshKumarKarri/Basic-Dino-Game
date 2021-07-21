var character = document.getElementById("dino");
var block = document.getElementById('block');
var score = document.getElementById('score');
function jump(){
    if(character.classList != "animation"){
        character.classList.add('animation');
    }
    setTimeout(function(){
        character.classList.remove('animation');
    },500);
}
var i=0;
var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var points=i++;
    document.getElementById("score").innerHTML = `Score:${points}`; 
    if(blockleft<20 && blockleft>0 && characterTop>=130){
        block.style.display = "none";
        score.style.display = "none";
        alert(`Your Score ${points}`);
    }
    
    
}, -100);

document.getElementById('restart').onclick = function () {
    i = 0;
    block.style.display = "block";
    score.style.display = "block";
}

/*________________plse__________________*/
var pulse = function(){
    var e = document.createElement("div");
    e.setAttribute('class','circle'),
    document.body.appendChild(e),
    e.style.top = event.pageY + 'px',
    e.style.left = event.pageX + 'px',
    setTimeout(function(){
        document.body.removeChild(e);
    },1000)
};
document.addEventListener('click',pulse);