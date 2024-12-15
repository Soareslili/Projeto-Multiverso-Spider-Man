function hadleMouseEnter(){
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}--hovered`;
 }
 
function hadleMouseLeave(){
    this.classList.remove('s-card--hovered')
    document.body.id = '';
}

function addEventListenersToCard(){
    const cardElements = document.getElementsByClassName('s-card');
   
    for(let index = 0; index < cardElements.length; index++){
        const card = cardElements[index];
        card.addEventListener('mouseenter', hadleMouseEnter);
        card.addEventListener('mouseleave', hadleMouseLeave );
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCard, false)