
import {proiecte} from '/jsonpr.js';

document.addEventListener('DOMContentLoaded', function(){
    
    let proiectee = [
        {id: 1, title: `${proiecte[0].nume}`, des: `${proiecte[0].descriere}`, image: 'images/proiecte/Pachetul cu alimente.png'},
        {id: 2, title: `${proiecte[1].nume}`, des: `${proiecte[1].descriere}`, image: 'images/proiecte/Cadouri.png'},
        {id: 3, title: `${proiecte[2].nume}`, des: `${proiecte[2].descriere}`, image: 'images/proiecte/O masă caldă.png'},
        {id: 4, title: `${proiecte[3].nume}`, des: `${proiecte[3].descriere}`, image: 'images/proiecte/Tabăra de zi.png'},
        {id: 5, title: `${proiecte[4].nume}`, des: `${proiecte[4].descriere}`, image: 'images/proiecte/Haine.png'},
        {id: 6, title: `${proiecte[5].nume}`, des: `${proiecte[5].descriere}`, image: 'images/proiecte/Borcanul cu gem.png'},
        {id: 7, title: `${proiecte[6].nume}`, des: `${proiecte[6].descriere}`, image: 'images/proiecte/Ghiozdane.png'},
        {id: 8, title: `${proiecte[7].nume}`, des: `${proiecte[7].descriere}`, image: 'images/proiecte/Biblii.png'},
        {id: 9, title: `${proiecte[8].nume}`, des: `${proiecte[8].descriere}`, image: 'images/proiecte/Biciclete.png'},
        {id: 10, title: `${proiecte[9].nume}`, des: `${proiecte[9].descriere}`, image: 'images/proiecte/Casa.png'},
        {id: 11,  title: `${proiecte[10].nume}`, des: `${proiecte[10].descriere}`, image: 'images/proiecte/Cartofi.png'},
        {id: 12,  title: `${proiecte[11].nume}`, des: `${proiecte[11].descriere}`, image: 'images/proiecte/Hala.png'},
        {id: 13,  title: `${proiecte[12].nume}`, des: `${proiecte[12].descriere}`, image: 'images/proiecte/fii.png'},
    ]

    const proiecteContainer = document.getElementById('project-container-all');
    proiecteContainer.innerHTML = '';
    proiectee.forEach(proiect => {
        const pr = `<div id='pr${proiect.id}' class="project-container">
                        <div class="img-back">
                            <img src='${proiect.image}'>
                        </div>
                        <div class="proj-info">
                            <div class="part1-info">
                                <p>${proiect.title}</p>
                            </div>
                            <div class="part2-info">
                                <div class='inf2-1'><p>${proiect.des}</p></div>
                                <div class='inf2-2'><button class="vezi-pr" data-target='${proiect.id - 1}'>Vezi <span> ↗</span></button></div>
                            </div>
                        </div>
                    </div>`;

        proiecteContainer.innerHTML += pr;
    })

    const vezi = document.querySelectorAll('.vezi-pr');

    vezi.forEach(btn => {
        const section = btn.dataset.target;
        btn.addEventListener('click', function(){
            console.log(section);
            window.location.href = `proiecte.html#${section}`;23
        })
    })



    const showMore = document.getElementById('show-btn');
    const showContent1 = document.querySelectorAll('#pr1, #pr2, #pr3');
    const showContent2 = document.querySelectorAll('#pr4, #pr5, #pr6');
    const showContent3 = document.querySelectorAll('#pr7, #pr8, #pr9');
    const showContent4 = document.querySelectorAll('#pr10, #pr11, #pr12, #pr13');
    const screenWidth = window.innerWidth;
    let step = 0;

    const allContent = document.querySelectorAll('#pr1, #pr2, #pr3, #pr4, #pr5, #pr6, #pr10, #pr11, #pr12, #pr13');
    allContent.forEach(el => el.style.display = 'none');

    if (screenWidth > 925){
        width925();
    }
    else if (621 < screenWidth && screenWidth <= 925){
        width621();
    }
    else if (screenWidth < 620){
        width620();
    }

    let lastWidth = screenWidth;
    window.addEventListener('resize', function () {
        if (
            (lastWidth <= 620 && window.innerWidth > 620) ||
            (lastWidth <= 925 && window.innerWidth > 925) ||
            (lastWidth > 925 && window.innerWidth <= 925) ||
            (lastWidth > 620 && window.innerWidth <= 620)
        ) {
            location.reload();
        }
    });

    function width925() {
        if (screenWidth > 925){
        showContent1.forEach(el => el.style.display = 'block');
        showContent2.forEach(el => el.style.display = 'block');

        showMore.addEventListener('click', function () {
            step++;

            if (step === 1) {
                showContent3.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai multe';
                console.log(step);
            }
            else if (step === 2) {
                showContent4.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai puține';
                console.log(step);
            }
            else {
                showContent3.forEach(el => el.style.display = 'none');
                showContent4.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Arată mai multe';
                step = 0;
                console.log(step);
            }
        })
    }
    }
    
    function width621() {
        if (621 < screenWidth && screenWidth < 925){
        showContent1.forEach(el => el.style.display = 'block');
        showContent2[0].style.display = 'block';

        showMore.addEventListener('click', function (){
            step++;

            if(step === 1){
                showContent2.forEach(el => el.style.display = 'block');
                showContent3[0].style.display = 'block';
                showContent3[1].style.display = 'block';
                showMore.textContent = 'Arată mai multe';
                console.log(step);
            }

            else if (step === 2){
                showContent3.forEach(el => el.style.display = 'block');
                showContent4.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai puține';
                console.log(step);
            }

            else{
                showContent2[1].style.display = 'none';
                showContent2[2].style.display = 'none';
                showContent3.forEach(el => el.style.display = 'none');
                showContent4.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Arată mai multe';
                step = 0;
                console.log(step);
            }
        })
    }
    }
    
    function width620() {
        if (screenWidth < 620){
        showContent1.forEach(el => el.style.display = 'block');

        showMore.addEventListener('click', function(){
            step++;
            console.log(step);

            if (step === 1){
                showContent2.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai multe';
                console.log(step);
            }

            else if (step === 2){
                showContent3.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai multe';
                console.log(step);
            }

            else if (step === 3){
                showContent4.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Arată mai puține';
                console.log(step);
            }
            else{
                showContent2.forEach(el => el.style.display = 'none');
                showContent3.forEach(el => el.style.display = 'none');
                showContent4.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Arată mai multe';
                step = 0;
                console.log(step);
            }
        })
    }
    }
})


function donoTop() {
    const btn = document.querySelectorAll('.svg-button');

    btn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const target = document.getElementById('center-all');
            const offset = 135;

            const position = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: position,
                behavior: 'smooth'
            })
        })
    })
}

donoTop();