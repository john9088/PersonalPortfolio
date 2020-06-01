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

window.addEventListener('scroll', ()=>{
  var projTitle = document.querySelector('.project-head');
  var proj1 = document.querySelector('.proj1');
  var proj2 = document.querySelector('.proj2');
  var proj3 = document.querySelector('.proj3');
  var proj4 = document.querySelector('.proj4');
  var proj1Position = proj1.getBoundingClientRect().top;
  var proj2Position = proj2.getBoundingClientRect().top;
  var proj3Position = proj3.getBoundingClientRect().top;
  var proj4Position = proj4.getBoundingClientRect().top;

  var skillTitle = document.querySelector('.skill-head');
  var skillLanguage = document.querySelector('.language');
  var skillWebTech = document.querySelector('.web-technologies');
  var skillDataSci = document.querySelector('.data-science');
  var skillOther = document.querySelector('.others');
  var skillLanguagePosition = skillLanguage.getBoundingClientRect().top;
  var skillWebTechPosition = skillWebTech.getBoundingClientRect().top;
  var skillDataSciPosition = skillDataSci.getBoundingClientRect().top;
  var skillOtherPosition = skillOther.getBoundingClientRect().top;



  if(window.innerHeight < window.innerWidth){
    //For Project Section
    var screenSlideProj = window.innerHeight/1.25;
    if(proj1Position < screenSlideProj){
      proj1.style.transform = "translateX(0)";
      proj2.style.transform = "translateX(0)";
      projTitle.style.transform = "translateX(0)";
    }
    
    if(proj3Position < (screenSlideProj + proj1.offsetHeight/6)){
      proj3.style.transform = "translateX(0)";
      proj4.style.transform = "translateX(0)";
      
    }

    //For Skill Section
    var screenSlideSkill = window.innerHeight*1.60;
    if(skillWebTechPosition < screenSlideSkill){
      skillLanguage.style.transform = "translateY(0)";
      skillLanguage.style.opacity = "1";
      skillWebTech.style.transform = "translateY(0)";
      skillWebTech.style.opacity = "1";
      skillTitle.style.transform = "translateX(0)";
    }

    if(skillDataSciPosition < (screenSlideSkill + skillLanguagePosition/3)){
      skillDataSci.style.transform = "translateY(0)";
      skillDataSci.style.opacity = "1";
      skillOther.style.transform = "translateY(0)";
      skillOther.style.opacity = "1";
    }

  }
  else{
    //For Skill
    console.log(skillWebTechPosition + "-->" + window.innerHeight);
    var screenSlideSkill = window.innerHeight*1.8;
    if(skillWebTechPosition < screenSlideSkill){
      skillLanguage.style.transform = "translateY(0)";
      skillLanguage.style.opacity = "1";
      skillWebTech.style.transform = "translateY(0)";
      skillWebTech.style.opacity = "1";
      skillTitle.style.transform = "translateX(0)";
    }

    if(skillDataSciPosition < (screenSlideSkill + skillLanguagePosition/6)){
      skillDataSci.style.transform = "translateY(0)";
      skillDataSci.style.opacity = "1";
      skillOther.style.transform = "translateY(0)";
      skillOther.style.opacity = "1";
    }

     //var skillOtherbottom = skillOther.getBoundingClientRect().bottom;
     if(skillWebTechPosition < 0){
    //   skillLanguage.style.transform = "translateY(-100vh)";
    //   skillLanguage.style.opacity = "0";
    //   skillWebTech.style.transform = "translateY(-100vh)";
    //   skillWebTech.style.opacity = "0";
      skillTitle.style.transform = "translateX(100vw)";
    //   skillDataSci.style.transform = "translateY(-100vh)";
    //   skillDataSci.style.opacity = "0";
    //   skillOther.style.transform = "translateY(-100vh)";
    //   skillOther.style.opacity = "0";
     }
    //For Project
    var screenSlideProj = window.innerHeight/1.3;
    if(proj1Position < screenSlideProj){
      proj1.style.transform = "translateX(0)";
      projTitle.style.transform = "translateX(0)";
    }
    if(proj1Position < 0){
       //proj1.style.transform = "translateX(-100vw)";
       projTitle.style.transform = "translateX(100vw)";
     }

    if(proj2Position < (screenSlideProj + proj1.offsetHeight/6)){
      proj2.style.transform = "translateX(0)";
    }
    // if(proj2Position < 0){
    //   proj2.style.transform = "translateX(-100vw)";
    // }

    if(proj3Position < (screenSlideProj + proj1.offsetHeight/8)){
      proj3.style.transform = "translateX(0)";
    }
    // if(proj3Position < 0){
    //   proj3.style.transform = "translateX(-100vw)";
    // }

    if(proj4Position < (screenSlideProj + proj1.offsetHeight/10)){
      proj4.style.transform = "translateX(0)";
    }
    // if(proj4Position < 0){
    //   proj4.style.transform = "translateX(-100vw)";
    // }
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
