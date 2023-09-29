const buttons = document.querySelectorAll('.btns button');
const images = document.querySelectorAll('.images');

const imgFilter = (e) => {
  const cityName = e.target.dataset.name;
  
  images.forEach((imageContainer) => {
    const image = imageContainer.querySelector('.cafe');
    const title = imageContainer.querySelector('h3');
    
    if (cityName === 'All') {
      imageContainer.classList.remove('hide'); // Show all images for the "All" button
    } else if (image.dataset.name === cityName) {
      imageContainer.classList.remove('hide'); // Show images with matching data-name
    } else {
      imageContainer.classList.add('hide'); // Hide other images
    }
  });
};

buttons.forEach((button) => button.addEventListener('click', imgFilter));






  
  
  
  
  
  
  




