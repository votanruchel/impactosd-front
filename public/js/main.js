//Start modal on click
const modal = document.querySelector('.body-container');
const modalContainerSecondary = document.querySelector('.container-modal-form');
const form = document.querySelector('.container-form');

function toggleModal(){
    form.classList.add('fadeIn-modal');
    form.classList.remove('fadeOut-modal');
    const el = document.querySelector('.body-container')
    
    if(el.style.display === 'none' || el.style.display === ''){
        el.style.display = 'block';
    }else{
        el.style.display = 'none';
    }
}

function closeModal(el){
    form.classList.add('fadeOut-modal');
    form.classList.remove('fadeIn-modal');
    setTimeout(()=>{
        el.style.display = 'none';
    },600)
    
    
}


window.onclick = function(event) {
    if (event.target == modal ||event.target == modalContainerSecondary) {
      closeModal(modal);
    }
  }
