// Array de direcciones de imagen
const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg']

var currentIndex = 0
const imageElement = document.getElementById('image')
const prevButton = document.getElementById('prevBtn')
const nextButton = document.getElementById('nextBtn')
const thumbnailContainer = document.getElementById('thumbnailContainer')
var timer

/**
 * The function changes the source of an image element based on the index passed as a parameter and
 * updates the thumbnails.
 * @param index - The index parameter is an integer value that represents the index of the image to be
 * displayed. It is used to access the corresponding image URL from the images array and update the
 * imageElement's src attribute with it.
 */
const changeImage = (index) => {
  currentIndex = index
  imageElement.src = images[currentIndex]
  resetTimer()
  updateThumbnails()
}

const previousImage = () => {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
  changeImage(currentIndex)
}

const nextImage = () => {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
  changeImage(currentIndex)
}

// reset timer
const resetTimer = () => {
  clearInterval(timer)
  timer = setInterval(nextImage, 2000)
}

/**
 * The function updates the thumbnails displayed on a webpage by creating and appending image elements
 * to a container.
 */
const updateThumbnails = () => {
  thumbnailContainer.innerHTML = ''
  for (let i = 0; i < images.length; i++) {
    const thumbnail = document.createElement('img')
    thumbnail.src = images[i]
    thumbnail.classList.add('thumbnail')

    if (i === currentIndex) {
		thumbnail.classList.add('current')
    }
    thumbnail.addEventListener('click', thumbnailClickHandler(i))
    thumbnailContainer.appendChild(thumbnail)
  }
}

const thumbnailClickHandler = (index) => {
  return function () {
    changeImage(index)
  }
}

prevButton.addEventListener('click', function () {
  previousImage()
})

nextButton.addEventListener('click', function () {
  nextImage()
})

resetTimer()
