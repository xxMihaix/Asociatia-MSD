
function questionsOpen() {
    const questions = document.querySelectorAll('.quest-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answerCont = question.closest('.quest-container');
            const answer = answerCont.querySelector('.quest-answer');

            const isOpen = answer.classList.contains('active');

            document.querySelectorAll('.quest-answer').forEach(a => {
                a.classList.remove('active');
            });

            document.querySelectorAll('.quest-question').forEach(q => {
                q.classList.remove('active');
            });

            if(!isOpen){
                answer.classList.add('active');
                question.classList.add('active');
            }
        });
    });
}

questionsOpen();

function redirectFizic(){

    const btn = document.querySelector('.fizic');
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        target = document.getElementById('fizic-container');
        offset = 150;

        const position = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    })
}

redirectFizic();


const images = ['images/slideshow/2.jpg', 'images/slideshow/3.jpg'];
let currentIndex = 0;

const slider = document.getElementById('slider');

function switchImg(){

    slider.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slider.src = images[currentIndex];

        slider.style.opacity = 1;
    }, 200)
}

setInterval(switchImg, 4000);