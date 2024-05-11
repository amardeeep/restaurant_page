import dish1_img from './butter_chicken.jpeg';
import dish2_img from './paneer.jpeg';
import dish3_img from './biryani.jpeg';
import dish4_img from './gajar_halwa.jpeg';
import dish5_img from './rasmalai.jpeg';


function menu_content(){
    const content=document.createElement("div");
    for(let i=0;i<5;i++){
        const dishes=document.createElement("div");
        dishes.setAttribute('id',i);
        const div_dish=document.createElement("div");
        dishes.appendChild(div_dish);
        const order_btn=document.createElement('button');
        div_dish.appendChild(order_btn);
        
        switch (i){
            case 1 : 
                const dish1_name=document.createElement("div")
                dish1_name.innerHTML="Butter Chicken";
                div_dish.appendChild(dish1_name);
                const dish1_img= new Image();
                dishes.appendChild(dish1_img);
            case 2:
                const dish2_name=document.createElement("div")
                dish2_name.innerHTML="Paneer Tikka Masala";
                div_dish.appendChild(dish2_name);
                const dish2_img= new Image();
                dishes.appendChild(dish2_img);
            case 3:
                const dish3_name=document.createElement("div")
                dish3_name.innerHTML="Biryani";
                div_dish.appendChild(dish3_name);
                const dish3_img= new Image();
                dishes.appendChild(dish3_img);
            case 4:
                const dish4_name=document.createElement("div")
                dish4_name.innerHTML="Gajar Halwa";
                div_dish.appendChild(dish4_name);
                const dish4_img= new Image();
                dishes.appendChild(dish4_img);
            case 5:
                const dish5_name=document.createElement("div")
                dish5_name.innerHTML="Rasmalai";
                div_dish.appendChild(dish5_name);
                const dish5_img= new Image();
                dishes.appendChild(dish5_img);
        }
        content.appendChild(dishes);  
        
    }
    return content

}
export {menu_content}