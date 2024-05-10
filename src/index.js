import { home_content } from "./home"
import {menu_content} from "./menu"

const body=document.getElementById("content")
const home_btn=document.getElementsByClassName("Home");
const menu_btn=document.getElementsByClassName("Menu");
const contact_btn=document.getElementsByClassName("Contact")

home_btn.addEventListener("click",function (){
    while(body.hasChildNodes()){
        body.removeChild(body.firstChild);
    }
    body.appendChild(home_content());

})

menu_btn.addEventListener("click",function(){
    while(body.hasChildNodes()){
        body.removeChild(body.firstChild);
    }
    body.appendChild(menu_content());
})

