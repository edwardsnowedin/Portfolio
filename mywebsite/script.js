// 'use strict';
console.log('linked');
 function randomizedHello() {
   const hello = [
     'Hello.',
     'Hola.',
     'Hallo.',
     'Namaste.',
     'Ni Hao.',
     'مرحبا.',
     'Konichiwa.'
   ]
   return hello[Math.floor(Math.random() * hello.length)];
 }

 // $(() => {
 //    // jQuery document ready
 //    $(window).load(() => {
 //      $('h1').text(randomizedHello());
 //    })
 // });

 $(document).ready(()=>{
    $('h1').html(randomizedHello());
 })
