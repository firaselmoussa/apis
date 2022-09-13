
    var api_div = Object.values(document.getElementsByClassName('api-div'));



api_div.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.children[1].style.animation = 'show-info 1s ease-out forwards';
    });

    element.addEventListener('mouseleave', () => {
        element.children[1].style.animation = 'hide-info 1s ease-out forwards';
    });
});