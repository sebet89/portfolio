document.addEventListener('DOMContentLoaded', () => {
  

  // Carousel
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselArrowLeft = document.querySelector('.carousel-prev');
  const carouselArrowRight = document.querySelector('.carousel-next');

  let activeCarouselItem = 0;

  const updateCarousel = () => {
    carouselItems.forEach((item, index) => {
      if (index === activeCarouselItem) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  carouselArrowLeft.addEventListener('click', () => {
    activeCarouselItem -= 1;
    if (activeCarouselItem < 0) {
      activeCarouselItem = carouselItems.length - 1;
    }
    updateCarousel();
  });

  carouselArrowRight.addEventListener('click', () => {
    activeCarouselItem += 1;
    if (activeCarouselItem >= carouselItems.length) {
      activeCarouselItem = 0;
    }
    updateCarousel();
  });

  updateCarousel();
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      activeCarouselItem -= 1;
      if (activeCarouselItem < 0) {
        activeCarouselItem = carouselItems.length - 1;
      }
      updateCarousel();
    } else if (event.key === 'ArrowRight') {
      activeCarouselItem += 1;
      if (activeCarouselItem >= carouselItems.length) {
        activeCarouselItem = 0;
      }
      updateCarousel();
    }
  });
});

const modal = document.querySelector(".modal");
const modalImage = modal.querySelector("img");
const closeModal = modal.querySelector(".modal-close");
const carouselItems = document.querySelectorAll('.carousel-item');

// Função para abrir o modal e exibir a imagem
function openModal(imageSrc) {
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

// Função para fechar o modal
function closeModalFunc() {
  modal.style.display = "none";
}

// Adicionar evento de clique às imagens do carrossel para abrir o modal
carouselItems.forEach((item) => {
  const image = item.querySelector("img");
  image.addEventListener("click", () => {
    openModal(image.src);
  });
});

// Adicionar evento de clique ao botão fechar do modal
closeModal.addEventListener("click", closeModalFunc);

// Adicionar evento de clique fora do conteúdo do modal para fechá-lo
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalFunc();
  }
});
