
// const observer = new IntersectionObserver((e) => {
//     e.forEach((entry) => {
//       console.log(entry);
//       if (entry.isIntersecting) entry.target.classList.add('show')
//       else entry.target.classList.remove('show');
//     })
//   })
//   const hidden = document.querySelectorAll('.card');
//   hidden.forEach((el) => observer.observe(el));



window.addEventListener('scroll', ()=>{
    

    let  content =document.querySelector('.card');
    let  content1 =document.querySelector('.card1 ');
     let  content2 =document.querySelector('.card2 ');
    let imgskills =document.querySelector('.imgskills ');
    let textskills =document.querySelector('.textskills');
    let whychoose = document.querySelector('.whyuchoose ');


    let  imgpos =imgskills.getBoundingClientRect().top; 
    let contentPosition =content.getBoundingClientRect().top ; 
    let windowPosition =window.innerHeight;
    let whychoosepos = whychoose.getBoundingClientRect().top ; 
      
   if (whychoosepos<windowPosition) {whychoose.classList.add ('newwhyuchoose'); }

   else{ whychoose.classList.remove('newwhyuchoose');}


    if(imgpos<windowPosition)  {
        imgskills.classList.add ('posimg'); 
        textskills.classList.add('newts')
    }else {
        imgskills.classList.remove('posimg');
        textskills.classList.remove('newts')
    }
    
    
    
    if (contentPosition<windowPosition) {
        // alert('well');
        content.classList.add ('show');
        content1.classList.add ('show');
            content2.classList.add ('show');

        }
        else {    
            
            content.classList.remove ('show');
        content1.classList.remove ('show');
        content2.classList.remove ('show');


        }
})