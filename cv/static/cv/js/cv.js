const skillbars = document.querySelectorAll('.skillbar');
const skills = document.querySelector('.skills');
const scholarship = document.querySelector('.scholarship');
const contact = document.querySelector('.contact');
const animated_text = document.querySelector('.cv-header__text__animated-text__function');
let current_text = 0;

const header_functions = [
    'développeur 3D',
    'développeur C++',
    'développeur Unreal Engine',
    'développeur Python',
    'développeur Javascript'
];

function makeSkillsAppear() {
    skills.addEventListener('transitionend', () => {
        skillbars.forEach((skillbar) => {
            const skillbar_progress = skillbar.querySelector('.skillbar__progress__foreground');
            skillbar_progress.style.setProperty('--transition-time', (Math.random() * 0.5 + 0.5) + 's');
            skillbar_progress.classList.add('skillbar__progress__foreground--load')}
        );
    }, {once: true});
    skills.classList.add('skills--appear');
}

function makeScholarshipAppear() {
    scholarship.classList.add('scholarship--appear');
}

function makeContactAppear() {
    contact.classList.add('contact--appear');
}

window.addEventListener('scroll', () => {
    // isInView defined in 'js/utils'
    if (isInView(skills, 125)) { 
        makeSkillsAppear();
    }
    if (isInView(scholarship, 125)) {
        makeScholarshipAppear();
    }
    if (isInView(contact, 50)) {
        makeContactAppear();
    }
})

function write_text(text, current_letter_index) {
    const c = text[current_letter_index];
    animated_text.innerHTML += c;

    if (current_letter_index == text.length - 1) {
        setTimeout(() => {
            delete_text();
        }, 1000);
        return;
    }

    const handle = setTimeout(() => {
        write_text(text, current_letter_index + 1);
    }, Math.random()*300+200);
}

function delete_text() {
    //console.log(animated_text.innerHTML.slice(0, -1));
    animated_text.innerHTML = animated_text.innerHTML.slice(0, -1);
   
    if (animated_text.innerHTML.length == 0) {
        current_text = (current_text + 1) % header_functions.length;
        animate_text();
        return;
    }
    setTimeout(() => {
        delete_text();
    }, Math.random()*200+100);
}

function animate_text() {
    write_text(header_functions[current_text], 0);
}

animate_text();