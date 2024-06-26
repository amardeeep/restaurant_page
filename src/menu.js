import dish1_img from './butter_chicken.jpeg';
import dish2_img from './paneer.jpeg';
import dish3_img from './biryani.jpeg';
import dish4_img from './gajar_halwa.jpeg';
import dish5_img from './rasmalai.jpeg';


function menu_content(){
    const content=document.createElement("div");
    /*for(let i=0;i<5;i++){
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
        
    }*/
    function dish_div_gen(number,image,name){
        const div_dish=document.createElement("div");
        
        div_dish.appendChild(document.createElement("img")).src=image;
        const div_info=document.createElement("div");
        const div_number=document.createElement("div");
        div_number.innerHTML=number;
        div_info.appendChild(div_number);
        const div_name=document.createElement("div");
        div_name.innerHTML=name;
        div_info.appendChild(div_name);
        const order_btn=document.createElement("button");
        order_btn.innerHTML="Order Now!";
        div_info.appendChild(order_btn);
        div_dish.appendChild(div_info);
        return div_dish;
    }
    content.appendChild(dish_div_gen(1,dish1_img,"Butter Chicken"));
    content.appendChild(dish_div_gen(2,dish2_img,"Paneer Tikka Masala"));
    content.appendChild(dish_div_gen(3,dish3_img,"Biryani"));
    content.appendChild(dish_div_gen(4,dish4_img,"Gajar Halwa"));
    content.appendChild(dish_div_gen(5,dish5_img,"Rasmalai"));
    
    return content

}
export {menu_content}