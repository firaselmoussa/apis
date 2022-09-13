
let api_div = Object.values(document.getElementsByClassName('api-div'));
let app_container = document.getElementById('app-container');
let popup = document.createElement('div');
popup.classList.add('popup');
let popup_h4 = document.createElement('h4');
popup.append(popup_h4);
let popup_input = document.createElement('input');
popup_input.classList.add('popup-input')
popup.append(popup_input);
let popup_btn = document.createElement('button');
popup_btn.classList.add('popup-btn');
popup_btn.innerText = 'FETCH';
popup.append(popup_btn);
let result = document.createElement('p');
popup.append(result);

api_div.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.children[1].style.animation = 'show-info 1s ease-out forwards';
    });

    element.addEventListener('mouseleave', () => {
        element.children[1].style.animation = 'hide-info 1s ease-out forwards';
    });

    element.addEventListener('click', ()=> {
        app_container.style.display = 'none';
        document.body.append(popup);
    })
});





