window.addEventListener("DOMContentLoaded" ,() =>{
  const clock = new BouncyEmbosseedClock(".clock"); 
});
class BouncyEmbosseedClock {
    constructor(el){
    this.el =document.querySelector(el)
this.els= this.el ? this.el.querySelectorAll(".clock_digit") : [];
this.digits=[];
this.to=null;
this.dto =[
    [null,null,null],
    [null,null,null],
    [null,null],
    [null,null,null],
    [null,null,null],
    [null,null],
    [null,null,null],,
    [null,null,null],
];
this.staticUpdated();
this.updated();
}}
getTime(){ 
    const time =new Date();
    const hours,minutes,seconds = [
time.getHours();
time.getMinutes();
time.getSeconds();

    ]

}