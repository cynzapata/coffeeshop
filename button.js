//the purpose of this js file is to filter through the images
//when the user clicks on a specific city 
const buttons = document.querySelectorAll('.btns button');
const imgs = document.querySelectorAll('.cafe img');

const imgFilter = e => {
    document.querySelectorAll(".active").classList.remove("active");
    e.target.classList.add("active");
    
    imgs.forEach(img => {
        img.classList.add("hide");
        if(img.data.name === e.target.data.name || e.target.data.name === "all"){
            img.classList.add("hide");
        }
    });
};

  buttons.forEach(button => button.addEventListener("click", imgFilter));





