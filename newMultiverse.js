let accordion = document.getElementsByClassName('accord');
for(i = 0;i < accordion.length;i++) {
  accordion[i].addEventListener('click', function() {
    this.classList.toggle("active");
    let accordInfo = this.nextElementSibling;
    if(accordInfo.style.display === "block") {
      accordInfo.style.display = "none"
    }
    else{
      accordInfo.style.display = "block";
    }
  });
}