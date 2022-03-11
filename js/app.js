window.addEventListener('DOMContentLoaded', function() { //Ставим событие в начале что-бы код ожидал загрузку html структуры а не всех картинок на сайте и т.д. и если не прописть то он может выполнять события с элементами которые не прогрузились будет каша.

    'use strict' //Строгий режим
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        btnStop = document.querySelector('.more');;

    // Добвалнеи и удаление классов при перечислении элементов
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    // В этой функции нету перечисления так как оно есть при определении кнопка которой нажали в меню
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) { //Проверяем действительно ли элемент b имеет класс hide с помощью метода contains.
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = '2022-03-12';
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

            let timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }


            if (hours.textContent == 18 || hours.textContent <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

            console.log(hours.textContent);


            // btnStop.addEventListener('click', function() {
            //     clearInterval(timeInterval);
            // });

            // btnStop.addEventListener('dblclick', function() {
            //     timeInterval = setInterval(updateClock, 1000);
            // });
    }

    setClock('timer', deadline);
});