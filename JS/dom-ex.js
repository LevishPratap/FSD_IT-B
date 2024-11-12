const btn1=document.getElementById('addpara');
btn1.addEventListener("click",()=>{
    const para=document.createElement("p");
    para.innerHTML="<h1>this is new paragraph</h1>";
    para.style.color='black';
    document.body.append(para);
    para.style.backgroundColor='#765857'
})