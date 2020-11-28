//JS FILE TO AVOID THE CHECKBOX HACK....

//VARIABLES
let nav = document.querySelector('.nav')
let nav_back = document.querySelector('.nav-cont-back')
let nav_icon = document.querySelector('.nav-cont-icon')
let nav_text = document.querySelector('.nav-text')
let nav_link = document.querySelectorAll('.nav-link')//ITS AN ARRAY

//AN ARRAY TO CHECK
let checkArr = 0;

nav.addEventListener('click',function(){
    checkArr += 1;
    //IF CLICKED AGAIN
    if(checkArr%2 === 0){
        //TO HIDE IT
        nav_text.style.display = 'none';
        nav_back.style.transform = 'scale(0)';
        nav_icon.src = "../assets/icons/icon-menu.svg"

        nav_link.forEach(function(cur){
            cur.style.opacity = '0';
            cur.style.visibility = 'hidden';
        })
    }
    //IF CLICKED ONCE
    else if(checkArr%2 !== 0){
        //TO SHOW IT
        nav_text.style.display = 'inherit';
        nav_back.style.transform = 'scale(90)';
        nav_icon.src = "../assets/icons/icon-close.svg";

        nav_text.style.zindex = '200';

        nav_link.forEach(function(cur){
            
            //cur.style.display = 'none';
            cur.style.opacity = '1';
            cur.style.visibility = 'visible';
            

        })
    }
    
})