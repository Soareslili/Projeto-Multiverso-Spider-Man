

document.querySelectorAll('.s-card_img img').forEach((img) => {
    img.addEventListener('click', (event) => {
      const targetImg = event.target;
      const mainContent = document.querySelector('.s-main-content');
  
      // Verifica se a imagem já está em tela cheia
      if (targetImg.classList.contains('fullscreen')) {
        // Remove a classe da imagem e do fundo
        targetImg.classList.remove('fullscreen');
        mainContent.classList.remove('dimmed');
        return;
      }
  
      // Adiciona a classe para ampliar a imagem
      targetImg.classList.add('fullscreen');
      mainContent.classList.add('dimmed');
  
      // Adiciona um evento ao documento para clicar fora da imagem
      const clickOutsideHandler = (e) => {
        if (e.target !== targetImg) {
          // Remove as classes ao clicar fora
          targetImg.classList.remove('fullscreen');
          mainContent.classList.remove('dimmed');
          // Remove o evento após o uso
          document.removeEventListener('click', clickOutsideHandler);
        }
      };
  
      document.addEventListener('click', clickOutsideHandler);
    });
  });
  