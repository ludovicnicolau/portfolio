const button = document.getElementsByClassName('sidebar__burger')[0];
const sidebar = document.getElementsByClassName('sidebar')[0];

button.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--open');
});