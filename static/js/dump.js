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



// alert(window.history.length);
// if( window.history.length == 1 && window.location.href.indexOf("#") == -1){
//       window.location.href = curpage + "#home";
//       alert(window.location.href);
//       window.location.reload();
//       window.location.href = curpage.split('#')[0];
//       alert(window.location.href);
//       window.location.reload();
// }

// window.onhashchange = function() {
//   if( projView1.style.display == "block" || projView2.style.display == "block"||
//       projView3.style.display == "block" || projView4.style.display == "block"){
          
//           //(curpage);

//           if(window.location.href.indexOf("#") > -1){
//             window.location.href = curpage.split('#')[0]+"#projects";
//           }
//           else{
//             window.location.href = curpage + "#projects";
//           }
//           window.location.reload();
//           //window.history.go();
//           projView1.style.display = 'none';
//           projView2.style.display = 'none';
//           projView3.style.display = 'none';
//           projView4.style.display = 'none';
//           document.body.style.overflow = '';
          
//           //window.location.href = curpage.split('#')[0]+"#projects";
//           //console.log(curpage.split('#')[0]+"#projects");
//       } 
// }
