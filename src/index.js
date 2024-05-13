import { contact_content } from "./contact";
import { home_content } from "./home"
import {menu_content} from "./menu"


    const div=document.getElementById("content")
    const home_btn=document.querySelector(".Home");
    const menu_btn=document.querySelector(".Menu");
    const contact_btn=document.querySelector(".Contact");
    

    home_btn.addEventListener("click",function (){
        while(div.hasChildNodes()){
        div.removeChild(div.firstChild);
       }
        div.appendChild(home_content());

    })
    const body = document.querySelector("body");
    body.addEventListener("load",function (){
        while(div.hasChildNodes()){
        div.removeChild(div.firstChild);
       }
        div.appendChild(home_content());

    })
    

    menu_btn.addEventListener("click",function(){
        while(div.hasChildNodes()){
            div.removeChild(div.firstChild);
        }
        div.appendChild(menu_content());
    })

    contact_btn.addEventListener("click",function(){
        while(div.hasChildNodes()){
            div.removeChild(div.firstChild);
        }
        div.appendChild(contact_content());
    })


    
    
    
    


