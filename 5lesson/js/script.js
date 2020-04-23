let menu = document.querySelector('.menu'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelectorAll('.adv');
  

    let menuItm = document.createElement('li');
        menuItm.classList.add('menu-item');
        menuItm.innerHTML = 'Пятий елемент';
        
        menu.appendChild(menuItm);

        document.body.style.backgroundImage = "url('../../5lesson/img/apple_true.jpg')";

        document.getElementById('title').innerHTML = 'Ми продаємо тільки справжню техніку епл';
             
        column[1].removeChild(adv[0]);
       
       document.querySelector('#prompt').innerHTML = prompt('Що думаєш про техніку ЕЛП,', 'круто!');

        
    //   document.body.removeChild(adv[0]);
      


