import './style.css';

const addProjectModal = document.querySelector(".add-project-modal");
const addProjectContainer = document.querySelector(".add-project-popup");
const closeProjectModal = document.querySelector(".close-btn");


addProjectModal.addEventListener("click", ()=>{
    addProjectContainer.classList.add('show');
})

closeProjectModal.addEventListener('click', () => {
    addProjectContainer.classList.remove('show');
})