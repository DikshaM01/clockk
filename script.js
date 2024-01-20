const sec=document.querySelector('#sec');
const min=document.querySelector('#min');
const hr=document.querySelector('#hr');
const degree=6;
setInterval(()=>{
    let day=new Date();
    let ms=day.getMilliseconds()*degree;
    let mm=day.getMinutes()*degree;
    let mh=day.getHours()*degree;
    let ss=day.getSeconds()*degree+ms/1000;
    hr.style.transform=`rotateZ(${mh}deg)`;
    min.style.transform=`rotateZ(${mm}deg)`;
    sec.style.transform=`rotateZ(${ss}deg)`;
})