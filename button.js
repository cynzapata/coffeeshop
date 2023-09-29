const buttons = document.querySelectorAll('.btns button');
const images = document.querySelectorAll('.images');

const imgFilter = (e) => {
  const cityName = e.target.dataset.name;

  images.forEach((imageContainer) => {
    const image = imageContainer.querySelector('.cafe');
    const title = imageContainer.querySelector('h3');

    if (cityName === 'all' || image.dataset.name === cityName) {
      imageContainer.classList.remove('hide');
    } else {
      imageContainer.classList.add('hide');
    }
  });
};

buttons.forEach((button) => button.addEventListener('click', imgFilter));






  
  
  
  
  
  
  




