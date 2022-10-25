$(document).ready(function(){
//  slider

$('.fullBackground').fullClip({
  images: ['images/slide1-1.jpg', 'images/slide2-1.jpg', 'images/slide3-1.jpg'],
  transitionTime: 1000,
  wait: 3000,
})




// sidebar button
    $('.sidebarBtn').click(function(){
        $('.sidebar').toggleClass('active');
    })

  $('.acc-content:first').css('display', 'block');
  $('.acc-title').click(function(){
    $(this).next('.acc-content').slideToggle(500);
    $('.acc-content').not($(this).next()).slideUp(500);
  })
})

let partyEvent=new Date("Sat Dec 31 2022 22:30:00").getTime();

let eventCounter=setInterval(()=>{
  let now=new Date().getTime();

  let timeDiff=partyEvent-now;
  
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hrs=Math.floor(timeDiff % (1000 * 60 * 60 * 24)/(1000*60*60));
  var min=Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var sec=Math.floor((timeDiff % (1000 * 60 )) / (1000 ));


  let calender= document.querySelector('.box-wrap');
  calender.innerHTML=`
  <div class="box box-day">
  <h3 class="text-white text-center mt-4">Days</h3>
  <h2 class="text-white text-center mt-4 display-2">${days}</h2>
</div>
<div class="box box-hrs">
  <h3 class="text-white text-center mt-4">Hrs</h3>
  <h2 class="text-white text-center mt-4 display-2">${hrs}</h2>
</div>
<div class="box box-min">
  <h3 class="text-white text-center mt-4">Min</h3>
  <h2 class="text-white text-center mt-4 display-2">${min}</h2>
</div>
<div class="box box-sec">
  <h3 class="text-white text-center mt-4">Sec</h3>
  <h2 class="text-white text-center mt-4 display-2">${sec}</h2>
</div>
  `
}, 1000);

let msgTxt=$('#message').attr('maxlength');
console.log(msgTxt);

$('#message').keyup(function (e) { 

  let typed=($(this).val().trim().length);

  let remText=msgTxt-typed;
  console.log(remText);

  $('.remaining').html(`<span>${remText}</span> characters are remaining`);
  
  if(remText>0){
    $('.remaining').html(`<span>${remText}</span> characters are remaining`);
   
  }else{
    $('.remaining').html(`<span>Characters have finished</span>`);
  }

});











