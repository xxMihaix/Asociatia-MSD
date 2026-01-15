
document.addEventListener('DOMContentLoaded', function(){

    const navbtn = document.querySelectorAll('.nav-btns');
    navbtn.forEach(btn => {
        const target = btn.dataset.target;

        btn.addEventListener('click', function(){
            if(target){
            window.location.href = `index.html#${target}`;
            console.log(target);
        }
        })
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const menu = document.getElementById('menu');
    const container = document.getElementById('mobile-menu');

    menu.addEventListener('click', function(){
        container.classList.toggle('active');
    })
})
