const bodyEl =document.querySelector('body');

bodyEl.addEventListener('mousemove', (event) => {
    // console.log(event.offsetX);
    // console.log(event.offsetY)
    const posX = event.offsetX;
    const posY = event.offsetY;

    const spanE1 =document.createElement('span');
    spanE1.style.left = posX + 'px';
    spanE1.style.top = posY + 'px';
    const size =Math.random()*100;
    spanE1.style.width = size + 'px';
    spanE1.style.height = size + 'px';
    bodyEl.appendChild(spanE1);
    setTimeout(() => {
        spanE1.remove();
    }, 3000);
});