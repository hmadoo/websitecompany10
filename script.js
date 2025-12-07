




$(document).ready(function() {
        let dots = document.querySelectorAll(".dots-item");

    let previous = document.querySelector(".previous-img");
    let next = document.querySelector(".next-img");
    let imgArray = ["images/about1.jpg","images/about2.jpg"];


    let silderImage = document.querySelector(".slider-image");
     let i=0;
  setInterval(() => {
   
    if(i > 1){
        i = 0;
    }
    
    silderImage.setAttribute("src", imgArray[i])
    dots.item(i).setAttribute("class", "active dots-item")
    if(i < 1){
    dots.item(i+1).setAttribute("class", "dots-item")
    }
    else{
            dots.item(0).setAttribute("class", "dots-item")

    }


    
    i++

}, 3000);


    //next button
    next.addEventListener('click', function() {
    let dots = document.querySelectorAll(".dots-item");
      // Update the div's content with new HTML
      let actualImg = silderImage.getAttribute("src");
      let index = imgArray.indexOf(actualImg);
        if(index !== 1){
    silderImage.setAttribute("src", imgArray[index + 1])
    dots.item(index+1).setAttribute("class", "active dots-item")
    dots.item(index).setAttribute("class", "dots-item")
    }
    else {
        silderImage.setAttribute("src", imgArray[0])
        dots.item(0).setAttribute("class", "active dots-item")
        dots.item(1).setAttribute("class", "dots-item")
        
    }
   
    });

    //previous button
    previous.addEventListener('click', function() {    
      let dots = document.querySelectorAll(".dots-item");
      // Update the div's content with new HTML
      let actualImg = silderImage.getAttribute("src");
      let index = imgArray.indexOf(actualImg);
        if(index !== 1){
    silderImage.setAttribute("src", imgArray[1])
    dots.item(index+1).setAttribute("class", "active dots-item")
    dots.item(index).setAttribute("class", "dots-item")
    }
    else {
        silderImage.setAttribute("src", imgArray[0])
        dots.item(0).setAttribute("class", "active dots-item")
        dots.item(1).setAttribute("class", "dots-item")
        
    }
    });


    let firstdot = document.querySelector(".dots-first");

    let seconddot = document.querySelector(".dots-second");


    firstdot.addEventListener("click" , () =>{
        silderImage.setAttribute("src", imgArray[0])
        dots.item(0).setAttribute("class", "active dots-item")
        dots.item(1).setAttribute("class", "dots-item")


    })

    seconddot.addEventListener("click" , () =>{
        silderImage.setAttribute("src", imgArray[1])
        dots.item(1).setAttribute("class", "active dots-item")
        dots.item(0).setAttribute("class", "dots-item")
    })
    




  


    });




