


function contact_content(){
    const content=document.createElement('div');
    const heading=document.createElement('h1');
    heading.innerHTML="Contact Us";
    content.appendChild(heading);
    const phone=document.createElement('p');
    phone.innerHTML="Phone: 6969696969";
    content.appendChild(phone);
    const mail=document.createElement('p');
    mail.innerHTML="Email: johnnySins@69.com";
    content.appendChild(mail);
    return content;
    
}
export {contact_content}