
function openModal(one){
    var imgNum=one;
   
    var modal = document.getElementById('modal');
    modal.classList.remove ='modal-open';
    modal.style.display='block';
    var img =modal.getElementsByTagName('img');
    console.log(img)
    if(imgNum===0){
        img[0].style.display='block'
        modal.classList.add='modal-close';
        console.log(modal)
        // modal.img[imgNum].classList.add += " modal-open";

    }
    
}
function onClosedImagModal(){
    var modal = document.getElementById('modal');
    modal.style.display='none';
    
   
}