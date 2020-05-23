const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const container = document.querySelector('.container');
const proj1 = document.querySelector('.proj1');
const proj2 = document.querySelector('.proj2');
const proj3 = document.querySelector('.proj3');

const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const selectedParent = document.querySelector('.controls ul');
var index = 0;

//FOR PROJECT CARESOL
// document.querySelectorAll('.controls ul li').forEach(function(indicator,ind){

// 	indicator.addEventListener('click',function() {
// 		index = ind;
// 		document.querySelector('.controls .selected').classList.remove('selected');
// 		indicator.classList.add('selected');
// 		slider.style.transform = 'translate(' +index*(-25)+ '%)';	
// 	});
// });



// rightArrow.addEventListener('click',function(){
// 	index = (index < 3)? index + 1:3;
// 	document.querySelector('.controls .selected').classList.remove('selected');
// 	selectedParent.children[index].classList.add('selected');
// 	slider.style.transform = 'translate(' +index*(-25)+ '%)';

// });

// leftArrow.addEventListener('click',function(){
// 	index = (index > 0)? index - 1:0;
// 	document.querySelector('.controls .selected').classList.remove('selected');
// 	selectedParent.children[index].classList.add('selected');
// 	slider.style.transform = 'translate(' +index*(-25)+ '%)';

// });


//window.addEventListener('scroll',scrollAppear);
//TO HIDE INTRO
window.addEventListener('scroll', ()=>{
  var introText = document.getElementById('intro');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight/2;
  if(introPosition < 0){
    introText.style.opacity = "0";
  }
  else{
    introText.style.opacity = "1";
  }
},true);

window.addEventListener('click', function(e){   
	if (document.querySelector('.burger').contains(e.target)){
		nav.classList.toggle('nav-active');
	} 
	else if(document.querySelector('.nav-links').contains(e.target)){
	}
	else{
		nav.classList.remove('nav-active');
	}
  });


// proj1.addEventListener('mouseover',() =>{
//   proj1.style.width = "60vw";
//   proj1.style.width = "20vw";
//   proj1.style.width = "20vw";
// });
// proj1.addEventListener('mouseleave',() =>{
//   document.querySelector('.grid-container').style.width = "100vw";
// });



//  const navslide = () =>{
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');

//     burger.addEventListener('click',()=>{
//       nav.classList.toggle('nav-active');
//     });
//  }


//navslide();
