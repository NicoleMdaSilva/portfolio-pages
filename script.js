function handleMove(image){
    image.style.marginBottom =  '2px';
    image.style.transition = '0.1s'
    image.style.boxShadow = ('2px 2px 2px black');
    image.style.marginLeft =  '2px';
}

function handleOut(image){
    image.style.boxShadow = ('none');
    image.style.transition = '0.1s'
    image.style.marginBottom =  0
    image.style.marginLeft =  0
}
