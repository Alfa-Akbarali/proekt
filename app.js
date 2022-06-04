const box_loading = document.querySelector('.box_loading');

document.addEventListener('DOMContentLoaded', (e) =>{
    setTimeout(()=>{

    box_loading.classList.add('display-none');
    }, 1500 );
})
