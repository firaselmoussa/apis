
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

// PALINDROME
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// I TRIED :(
// please tell me whats the problem

let palindrome_div = document.getElementById('palindrome-div');

palindrome_div.addEventListener('click', ()=>{
    popup_h4.innerText = 'Enter the text you wanna test';

    popup_btn.setAttribute("id", "fetch-palindrome");

    document.getElementById('fetch-palindrome').addEventListener('click', ()=>{
        

        const express = require("express");
        const app = express();
        const cors = require("cors");
        app.use(cors());

        app.get('/', (req, res) =>{
            res.json({month: 10, day : 10});
        });
        app.listen(5500, ()=>console.log('here'))


        fetch('http://localhost/myprograms/christmas.php?month=8&day=29').then(res => res.json()).then(data => console.log(data));
        // app.get('http://localhost/myprograms/christmas.php?month=8&day=29', (req, res)=>{
        //     res.json()
        // })

        // console.log(app)
    //     fetch('http://localhost/myprograms/christmas.php?month=8&day=29').then(
    // res => 
    // res.json()).then(
    // data => 
    // console.log(data));
    
    // axios.get('http://localhost/myprograms/christmas.php?month=8&day=29').then((res)=>{
    //     console.log(res);
        
    // });



    })
    
})



