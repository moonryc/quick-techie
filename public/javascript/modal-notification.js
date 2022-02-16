let timer = 5*60
let isModalOpen = false

const timerInterval = setInterval(()=>{
    if(timer<= 0){
        clearInterval(timerInterval)
    }else if(timer === 2*60){
        updateTimeRemaining(timer)
        modalOpen()
        timer--
    } else{
        if(isModalOpen){
            updateTimeRemaining(timer)
        }
        timer--;
    }
},1000)

const updateTimeRemaining = (time) => {
    document.getElementById('time-left').textContent = `${time}s`
}

const modalOpen = () => {
    document.getElementById('modal-js-example').classList.add('is-active');
    isModalOpen = true
}

document.addEventListener('DOMContentLoaded', () => {

    function closeModal($el) {
        $el.classList.remove('is-active');
        isModalOpen = false
        clearInterval(timerInterval)
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);
        console.log($target);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});











