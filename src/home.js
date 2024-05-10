function home_content(){
    const content= document.createElement("div")
    const img_content=document.createElement("img")
    img_content.setAttribute("src","/home/deetsy4455/repos/restaurant_page/images.jpeg")
    img_content.setAttribute("alt","Some Image of our restaurant")
    content.appendChild(img_content)
    const heading=document.createElement("h1")
    heading.innerHTML ="Restuarant Gum-Gum!";
    content.appendChild(heading);
    const paragraph=document.createElement("p")
    paragraph.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    content.appendChild(paragraph);
    return content;
}
export {home_content}