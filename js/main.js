'use strict' ;

{
  const images = [
    'img/kip00.png',
    'img/kip01.png',
    'img/kip02.png',
    'img/kip03.png',
    'img/kip04.png',
    'img/kip05.png',
    'img/kip06.png',
    'img/kip07.png',
    'img/kip08.png',
    'img/kip09.png',
  ];

  let currentIndex = 0

  
  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  const tfProgress =document.getElementById('tf');


  let AA =0

  mainImage.addEventListener('click',()=> {
    if(AA !== 100){AA++,
      tfProgress.textContent = `TF進行度　${AA}%` ;
      if(AA == 1){currentIndex++}
      if(AA == 10){currentIndex++}
      if(AA == 20){currentIndex++}
      if(AA == 30){currentIndex++}
      if(AA == 40){currentIndex++}
      if(AA == 55){currentIndex++}
      if(AA == 70){currentIndex++}
      if(AA == 85){currentIndex++}
      if(AA == 100){currentIndex++}
      mainImage.src = images[currentIndex];    
    };
 
  })

}