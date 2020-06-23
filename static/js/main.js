const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const container = document.querySelector('.container');
const proj1 = document.querySelector('.proj1');
const proj2 = document.querySelector('.proj2');
const proj3 = document.querySelector('.proj3');

var bodyTag = document.getElementsByTagName("BODY")[0];
var htmlTag = document.getElementsByTagName("HTML")[0];
console.log(htmlTag);
var navbar = document.getElementById('mynavbar');

const slider = document.querySelector('.slider');
const initialHeight = screen.height;
const metaViewport = document.querySelector('meta[name=viewport]');
metaViewport.setAttribute('content', 'width=device-width ,height=' + initialHeight + 'px,initial-scale=1, minimum-scale=1, maximum-scale=1');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const selectedParent = document.querySelector('.controls ul');
var index = 0;

var curpage = window.location.href;
var projView1 = document.querySelector('.video1');
var projView2 = document.querySelector('.video2');
var projView3 = document.querySelector('.video3');
var projView4 = document.querySelector('.video4');
var sectionVideo = document.querySelectorAll("[id='video'] section");
var projGrid1 = document.getElementById('viewProj1');
var projGrid2 = document.getElementById('viewProj2');
var projGrid3 = document.getElementById('viewProj3');
var projGrid4 = document.getElementById('viewProj4');
var popUp = document.querySelectorAll('.pop-up');


window.addEventListener('scroll', ()=>{
  var introText = document.getElementById('intro');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight/2;

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
  var skillLanguageContainer = document.querySelector('.language');
  var skillLanguage = document.querySelector('.language div');
  var skillWebTech = document.querySelector('.web-technologies div');
  var skillDataSciContainer = document.querySelector('.data-science');
  var skillDataSci = document.querySelector('.data-science div');
  var skillOther = document.querySelector('.others div');
  var skillLanguagePosition = skillLanguageContainer.getBoundingClientRect().top;
  var skillDataSciPosition = skillDataSciContainer.getBoundingClientRect().top;

  var aboutmecontent = document.querySelector('.aboutme-text');
  var aboutmeTitle = document.querySelector('.aboutme-head');
  var aboutmePosition = aboutmecontent.getBoundingClientRect().top;


  var careercontent = document.querySelector('.career-info');
  var careerTitle = document.querySelector('.career-head');
  var careerPosition = careercontent.getBoundingClientRect().top;

  var contactcontent = document.querySelector('.contactme-container');
  var contactTitle = document.querySelector('.contact-head');
  var contactPosition = contactcontent.getBoundingClientRect().top;

  //navbar.style.transform = 'translateY(-10vh)';

  //TO HIDE INTRO
  if(introPosition < 0){
    introText.style.opacity = "0";
  }
  else{
    introText.style.opacity = "1";
  }

  if(window.innerHeight < window.innerWidth){
    //For Project Section
    var screenSlideProj = window.innerHeight/1.25;
    if(proj1Position < screenSlideProj){
      proj1.style.transform = "translateX(0)";
      proj2.style.transform = "translateX(0)";
      projTitle.style.transform = "translateX(1vw)";
    }
    if(proj1Position < (-proj1.offsetHeight/2)){
      proj1.style.transform = "translateX(100vw)";
      proj2.style.transform = "translateX(100vw)";
      projTitle.style.transform = "translateX(-100vw)";
    }

    if(proj3Position < (screenSlideProj + proj1.offsetHeight/6)){
      proj3.style.transform = "translateX(0)";
      proj4.style.transform = "translateX(0)";
    }
    if(proj3Position < -(proj1.offsetHeight/2+ proj1.offsetHeight/6)){
      proj3.style.transform = "translateX(100vw)";
      proj4.style.transform = "translateX(100vw)";
    }

    if(window.innerHeight < proj1Position){
      proj1.style.transform = "translateX(100vw)";
      proj2.style.transform = "translateX(100vw)";
      projTitle.style.transform = "translateX(-100vw)";
      proj3.style.transform = "translateX(100vw)";
      proj4.style.transform = "translateX(100vw)";
    }

    //For Skill Section
    var screenSlideSkill = window.innerHeight/1.25;
    if(skillLanguagePosition < screenSlideSkill){
      skillLanguage.style.transform = "translateY(0)";
      skillLanguage.style.opacity = "1";
      skillWebTech.style.transform = "translateY(0)";
      skillWebTech.style.opacity = "1";
      skillTitle.style.transform = "translateX(1vw)";
    }
    if(skillLanguagePosition < (-skillLanguageContainer.offsetHeight/2)){
      skillLanguage.style.transform = "translateY(-100vh)";
      skillLanguage.style.opacity = "0";
      skillWebTech.style.transform = "translateY(-100vh)";
      skillWebTech.style.opacity = "0";
      skillTitle.style.transform = "translateX(-100vw)";
     }

    if(skillDataSciPosition < (screenSlideSkill + skillLanguagePosition/3)){
      skillDataSci.style.transform = "translateY(0)";
      skillDataSci.style.opacity = "1";
      skillOther.style.transform = "translateY(0)";
      skillOther.style.opacity = "1";
    }
    if(skillDataSciPosition < -(skillLanguageContainer.offsetHeight/2 + skillLanguagePosition/3)){
      skillDataSci.style.transform = "translateY(-100vh)";
      skillDataSci.style.opacity = "0";
      skillOther.style.transform = "translateY(-100vh)";
      skillOther.style.opacity = "0";
    }

    if(skillLanguagePosition > window.innerHeight){
      skillLanguage.style.transform = "translateY(100vh)";
      skillLanguage.style.opacity = "0";
      skillWebTech.style.transform = "translateY(100vh)";
      skillWebTech.style.opacity = "0";
      skillTitle.style.transform = "translateX(-100vw)";
      skillDataSci.style.transform = "translateY(100vh)";
      skillDataSci.style.opacity = "0";
      skillOther.style.transform = "translateY(100vh)";
      skillOther.style.opacity = "0";
    }
    //For About Section
    var screenSlideaboutme = window.innerHeight/1.3;
    if(aboutmePosition < screenSlideaboutme){
      aboutmeTitle.style.transform = "translateX(1vw)";
    }
    if(aboutmePosition < -(aboutmecontent.offsetHeight)){
      aboutmeTitle.style.transform = "translateX(-100vw)";
    }

    if(aboutmePosition > window.innerHeight){
      aboutmeTitle.style.transform = "translateX(-100vw)";
    }

    //For Career Section
    var screenSlidecareer = window.innerHeight/1.5;
     if(careerPosition < screenSlidecareer){
       careerTitle.style.transform = "translateX(1vw)";
     }
     if(careerPosition < -(careercontent.offsetHeight)){
       careerTitle.style.transform = "translateX(-100vw)";
     }
      if(careerPosition > window.innerHeight){
        careerTitle.style.transform = "translateX(-100vw)";
    }

    //For Contact me Section
    var screenSlidecontact = window.innerHeight/1.42;
     if(contactPosition < screenSlidecontact){
      contactTitle.style.transform = "translateX(1vw)";

     }
     if(contactPosition < -(contactcontent.offsetHeight)){
      contactTitle.style.transform = "translateX(-100vw)";
     }
      if(contactPosition > window.innerHeight){
        contactTitle.style.transform = "translateX(-100vw)";
      }
  }
  else{
    //For Skill

    var screenSlideSkill = window.innerHeight/1.2;
    if(skillLanguagePosition < screenSlideSkill){
      skillLanguage.style.transform = "translateY(0)";
      skillLanguage.style.opacity = "1";
      skillWebTech.style.transform = "translateY(0)";
      skillWebTech.style.opacity = "1";
      skillTitle.style.transform = "translateX(0)";
    }

    if(skillLanguagePosition < (-skillLanguageContainer.offsetHeight/2)){
      skillLanguage.style.transform = "translateY(-100vh)";
      skillLanguage.style.opacity = "0";
      skillWebTech.style.transform = "translateY(-100vh)";
      skillWebTech.style.opacity = "0";
      skillTitle.style.transform = "translateX(-100vw)";
     }

    if(skillDataSciPosition < (screenSlideSkill + skillLanguagePosition/6)){
      skillDataSci.style.transform = "translateY(0)";
      skillDataSci.style.opacity = "1";
      skillOther.style.transform = "translateY(0)";
      skillOther.style.opacity = "1";
    }

    if(skillDataSciPosition < -(skillLanguageContainer.offsetHeight/2 + skillLanguagePosition/3)){
      skillDataSci.style.transform = "translateY(-100vh)";
      skillDataSci.style.opacity = "0";
      skillOther.style.transform = "translateY(-100vh)";
      skillOther.style.opacity = "0";
    }

        if(skillLanguagePosition > window.innerHeight){
      skillLanguage.style.transform = "translateY(100vh)";
      skillLanguage.style.opacity = "0";
      skillWebTech.style.transform = "translateY(100vh)";
      skillWebTech.style.opacity = "0";
      skillTitle.style.transform = "translateX(-100vw)";
      skillDataSci.style.transform = "translateY(100vh)";
      skillDataSci.style.opacity = "0";
      skillOther.style.transform = "translateY(100vh)";
      skillOther.style.opacity = "0";
    }

    //For Project
    var screenSlideProj = window.innerHeight/1.3;
    if(proj1Position < screenSlideProj){
      proj1.style.transform = "translateX(0)";
      projTitle.style.transform = "translateX(0)";
    }
    if(proj1Position < -proj1.offsetHeight/2){
       proj1.style.transform = "translateX(-100vw)";
       projTitle.style.transform = "translateX(100vw)";
     }

    if(proj2Position < (screenSlideProj + proj1.offsetHeight/6)){
      proj2.style.transform = "translateX(0)";
    }
    if(proj2Position < -(proj1.offsetHeight)*(1/4)){
      proj2.style.transform = "translateX(-100vw)";
    }

    if(proj3Position < (screenSlideProj + proj1.offsetHeight/8)){
      proj3.style.transform = "translateX(0)";
    }
    if(proj3Position < -(proj1.offsetHeight)*(3/7)){
      proj3.style.transform = "translateX(-100vw)";
    }

    if(proj4Position < (screenSlideProj + proj1.offsetHeight/10)){
      proj4.style.transform = "translateX(0)";
    }
    if(proj4Position < -(proj1.offsetHeight)*(5/9)){
      proj4.style.transform = "translateX(-100vw)";
    }

    if(proj1Position > window.innerHeight){
      proj1.style.transform = "translateX(100vw)";
      proj2.style.transform = "translateX(100vw)";
      projTitle.style.transform = "translateX(-100vw)";
      proj3.style.transform = "translateX(100vw)";
      proj4.style.transform = "translateX(100vw)";
    }

    //For About Section
    var screenSlideaboutme = window.innerHeight/1.05;
    if(aboutmePosition < screenSlideaboutme){
      aboutmeTitle.style.transform = "translateX(0)";
    }

    if(aboutmePosition < -(aboutmecontent.offsetHeight)){
      aboutmeTitle.style.transform = "translateX(-100vw)";
    }

    if(aboutmePosition > window.innerHeight){
      aboutmeTitle.style.transform = "translateX(-100vw)";
    }
    
    //For Career Section
    var screenSlidecareer = window.innerHeight/1.1;
     if(careerPosition < screenSlidecareer){
       careerTitle.style.transform = "translateX(0)";
     }
     if(careerPosition < -(careercontent.offsetHeight)){
       careerTitle.style.transform = "translateX(-100vw)";
     }
      if(careerPosition > window.innerHeight){
        careerTitle.style.transform = "translateX(-100vw)";
      }

    //For Contact me Section
    //console.log(contactPosition +"-->" + window.innerHeight);
    var screenSlidecontact = window.innerHeight/1.1;
     if(contactPosition < screenSlidecontact){
      contactTitle.style.transform = "translateX(0)";
     }
     if(contactPosition < -(contactcontent.offsetHeight)){
      contactTitle.style.transform = "translateX(-100vw)";
     }
      if(contactPosition > window.innerHeight){
        contactTitle.style.transform = "translateX(-100vw)";
      }
  }
},true);

//navbar.style.transform = 'translateY(0)';

window.addEventListener('click', function(e){
  this.console.log(e.target);
  if(this.document.getElementById('send-email').contains(e.target)){
    var firstName = document.getElementById('first-name').value,
        lastName  = this.document.getElementById('last-name').value,
        subject = this.document.getElementById('subject').value;
        mobileNumber  = this.document.getElementById('mobile-number').value,
        message  = this.document.getElementById('message').value;

  if(/\r|\n/.exec(message)) 
    message = message.replace(/\r|\n/g, "%0D%0A");

    var bodyData = message+'%0D%0A%0D%0A'+firstName+' '+lastName+'%0D%0APh No:'+mobileNumber;
    
    window.open('mailto:kevdev9088@gmail.com?subject='+subject +'&body='+ bodyData);

  }
  var x = document.querySelectorAll('.nav-links li a');
  if (document.querySelector('.burger').contains(e.target)){
    nav.classList.toggle('nav-active');
    container.classList.toggle('container-slide');
    document.body.style.overflow = 'hidden';
	}
	else if(container.contains(e.target) && !( projView1.style.visibility == 'inherit' || projView2.style.visibility == 'inherit' ||
                                            projView3.style.visibility == 'inherit' || projView4.style.visibility == 'inherit')){ 
    nav.classList.remove('nav-active');
    container.classList.remove('container-slide');
    document.body.style.overflow = '';
  }
	else{
		for(var i =0 ;i < x.length ; i++){
      if(x[i].contains(e.target)){
        nav.classList.remove('nav-active');
        container.classList.remove('container-slide');
        document.body.style.overflow = '';
      }
    }
	}
});



projGrid1.addEventListener('click', ()=>{
  projView1.style.visibility = 'inherit';
	// projView1.style.display = 'block';
	projView1.style.opacity = '1';
  document.body.style.overflow = 'hidden';
  //disableScroll();
	projView2.style.visibility = 'hidden';
	projView3.style.visibility = 'hidden';
  projView4.style.visibility = 'hidden';

  if( window.history.length == 1 || !window.location.href.includes('#')){
    setTimeout(function() {
      showPop(popUp[0]);
    }, 100);

    setTimeout(function() {
      hidePop(popUp[0]);
    }, 5000);
  }
  else{   
    popUp[0].style.opacity = '0';
  }
});

projGrid2.addEventListener('click', ()=>{
	projView1.style.display = 'none';
  // projView2.style.display = 'block';
  projView2.style.visibility = 'inherit';
	projView2.style.opacity= '1';
  document.body.style.overflow = 'hidden';
	projView3.style.visibility = 'hidden';
  projView4.style.visibility = 'hidden';

  if( window.history.length == 1 || !window.location.href.includes('#')){
    setTimeout(function() {
      showPop(popUp[1]);
    }, 100);

    setTimeout(function() {
      hidePop(popUp[1]);
    }, 5000);
  }
  else{   
    popUp[1].style.opacity = '0';
  }
});

projGrid3.addEventListener('click', ()=>{
	projView1.style.visibility = 'hidden';
	projView2.style.visibility = 'hidden';
  //projView3.style.display = 'block';
  projView3.style.visibility = 'inherit';
	projView3.style.opacity= '1';
  document.body.style.overflow = 'hidden';
  projView4.style.visibility = 'hidden';
  if( window.history.length == 1 || !window.location.href.includes('#')){
    setTimeout(function() {
      showPop(popUp[2]);
    }, 100);

    setTimeout(function() {
      hidePop(popUp[2]);
    }, 5000);
  }
  else{   
    popUp[2].style.opacity = '0';
  }
});

projGrid4.addEventListener('click', ()=>{
	projView1.style.visibility = 'hidden';
	projView2.style.visibility = 'hidden';
	projView3.style.visibility = 'hidden';
  // projView4.style.display = 'block';
  projView4.style.visibility = 'inherit';
	projView4.style.opacity= '1';
  document.body.style.overflow = 'hidden';

  if( window.history.length == 1 || !window.location.href.includes('#')){
    setTimeout(function() {
      showPop(popUp[3]);
    }, 100);

    setTimeout(function() {
      hidePop(popUp[3]);
    }, 5000);
  }
  else{   
    popUp[3].style.opacity = '0';
  }
  //disableScroll();
});


window.addEventListener('click', function(e){
	//console.log(e.target.className);
	if( projView1.style.visibility == 'inherit' || projView2.style.visibility == 'inherit' ||
		projView3.style.visibility == 'inherit' || projView4.style.visibility == 'inherit'){

		for (i = 0; i < sectionVideo.length; i++) {
			if( sectionVideo[i] == e.target  || e.target.className == 'cross'||
			   e.target.className == 'go-back-p'|| e.target.className == 'go-back-img'){
        //enableScroll();
        document.body.style.overflow = '';
				projView1.style.visibility = 'hidden';
			 	projView2.style.visibility = 'hidden';
			 	projView3.style.visibility = 'hidden';
			 	projView4.style.visibility = 'hidden';
			 	projView1.style.opacity= '0';
			 	projView2.style.opacity= '0';
			 	projView3.style.opacity= '0';
			 	projView4.style.opacity= '0';
			}
		}
	}

});

function showPop(popUp){
  popUp.style.opacity = "1";
}

function hidePop(popUp){
  popUp.style.opacity = "0";
}
//Smooth Scroll for IOS
$(document).ready(function(){
  // Add smooth scrolling to all links
  $('a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
// TO dynamically increase the height of text area
textarea = document.querySelector("#message");
textarea.addEventListener('input', autoResize, false); 
      
function autoResize() { 
    this.style.height = 'auto'; 
    this.style.height = this.scrollHeight + 'px'; 
} 
window.onhashchange = function() {
  if( projView1.style.display == "block" || projView2.style.display == "block"||
      projView3.style.display == "block" || projView4.style.display == "block"){

          if(window.location.href.indexOf("#") > -1){
            window.location.href = curpage.split('#')[0]+"#projects";
          }
          else{
            window.location.href = curpage + "#projects";
          }
          window.location.reload();
          projView1.style.display = 'none';
          projView2.style.display = 'none';
          projView3.style.display = 'none';
          projView4.style.display = 'none';
          document.body.style.overflow = '';
        
  } 
}