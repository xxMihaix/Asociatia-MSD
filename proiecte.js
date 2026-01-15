
import { proiecte } from './jsonpr.js';

console.log(proiecte);

const section = document.getElementById('all-center');
section.innerHTML= '';

proiecte.forEach((proiecte, index) => {
    const pr = `
    <div id="${index}" class="proiect-container">
        <p class="proiect-title">${proiecte.nume}</p>
        <p class="proiect-des">${proiecte.descriere}</p>
        <div class="proiect-imgs">
            <!--div-->
            <div class="proiect-img">
                <img src="${proiecte.imagini[0].img1}">
            </div>
            <!--div-->
            <div class="proiect-img">
                <img src="${proiecte.imagini[1].img2}">
            </div>
            <!--div-->
            <div class="proiect-img">
                <img src="${proiecte.imagini[2].img3}">
            </div>
            <!--div-->
            <div class="proiect-img">
                <img src="${proiecte.imagini[3].img4}">
            </div>
            <!--div-->
            <div class="proiect-img">
                <img src="${proiecte.imagini[4].img5}">
            </div>
            <!--div-->
            <div class="proiect-img">
                <img src="${proiecte.imagini[5].img6}">
            </div>
        </div>
        <button class='show-more'>Arata mai multe</button>
    </div>`
    section.innerHTML += pr;
})


const screenWidth = window.innerWidth;

window.addEventListener('resize', function(){

    if(screenWidth <= 800 && window.innerWidth > 800 || 
       screenWidth > 800 && window.innerWidth <= 800 ||
       screenWidth <= 500 && window.innerWidth > 500 ||
       screenWidth > 500 && window.innerWidth >= 500){
            location.reload();
       }
})

const navimg = document.getElementById('box-img-all');
const closenav = document.getElementById('close');
const imguse = document.getElementById('img-use');

closenav.addEventListener('click', function(){
    navimg.style.display = 'none';
})

document.querySelectorAll('.proiect-container').forEach((proiect) => {
    const imgs = proiect.querySelectorAll('.proiect-img');

    imgs.forEach(imgEl => {
        imgEl.addEventListener('click', function(e) {
            navimg.style.display = 'flex';

            const img = imgEl.querySelector('img'); // preia <img> din div
            imguse.src = `${img.src}`;
            
            console.log("Container id:", proiect.id);
            console.log("Src imagine:", img.src);
        });
    });
});



document.querySelectorAll('.proiect-container').forEach((proiect) => {

    const items = proiect.querySelectorAll('.proiect-img');
    const showMore = proiect.querySelector('.show-more');

    let expended = 0;

    // reset display
    items.forEach(item => item.style.display = 'block');

    if(screenWidth < 500){
        showMore.style.display = 'block';
        showMore.textContent = 'Arata mai multe';

        for (let i = items.length - 4; i < items.length; i++){
            items[i].style.display = 'none';
        }

        showMore.addEventListener('click', function(){
            expended++;

            if(expended === 1){
                for(let i = items.length - 4; i < items.length - 2; i++){
                    items[i].style.display = 'block';
                    showMore.textContent = 'Arata mai multe';
                }
            }
            else if(expended === 2){
                for(let i = items.length - 4; i < items.length; i++){
                    items[i].style.display = 'block';
                    showMore.textContent = 'Arata mai putine';
                }
            }
            else{
                for (let i = items.length - 4; i < items.length; i++){
                    items[i].style.display = 'none';
                }
                showMore.textContent = 'Arata mai putine';
                expended = 0;
            }
        })
    }
    else if (screenWidth < 800){
        showMore.style.display = 'block';
        showMore.textContent = 'Arata mai multe'

        for (let i = items.length - 2; i < items.length; i++){
            items[i].style.display = 'none';
        }

        showMore.addEventListener('click', function(){ 
            expended++;

            if (expended === 1){
                for (let i = items.length - 2; i < items.length; i++){
                items[i].style.display = 'block';
                showMore.textContent = 'Arata mai putine';
            }
            }
            else{
                for (let i = items.length - 2; i < items.length; i++){
                items[i].style.display = 'none';
                showMore.textContent = 'Arata mai multe';
                expended = 0;
            }
            }
        })
    }

});