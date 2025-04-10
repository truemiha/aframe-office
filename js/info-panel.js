AFRAME.registerComponent('info-panel', {
    init: function () {
      var buttonEls = document.querySelectorAll('.menu-button');
  
      this.movieTitleEl = document.querySelector('#movieTitle');
      this.movieDescriptionEl = document.querySelector('#movieDescription');
      this.infoPanelEl = document.querySelector('#infoPanel');
  
      this.movieInfo = {
        karigurashiButton: {
          title: 'The Secret World of Arrietty (2010)',
          imgEl: document.querySelector('#karigurashiMovieImage'),
          description: 'Based on the 1952 novel The Borrowers by Mary Norton, an English author of children\'s books, about a family of tiny people who live secretly in the walls and floors of a typical household, borrowing items from humans to survive.'
        },
        kazetachinuButton: {
          title: 'The Wind Rises (2013)',
          imgEl: document.querySelector('#kazetachinuMovieImage'),
          description: 'The Wind Rises is a fictionalised biographical film of Jiro Horikoshi (1903, 1982), designer of the Mitsubishi A5M fighter aircraft and its successor, the Mitsubishi A6M Zero, used by the Empire of Japan during World War II. The film is adapted from Miyazaki\'s manga of the same name, which was in turn loosely based on both the 1937 novel The Wind Has Risen by Tatsuo Hori and the life of Jiro Horikoshi.'
        },
        ponyoButton: {
          title: 'Ponyo (2003)',
          imgEl: document.querySelector('#ponyoMovieImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        }
      };
  
      buttonEls.forEach(button => {
        button.addEventListener('click', (event) => {
          let targetId = button.id;
          let movieInfo = this.movieInfo[targetId];
  
          if (!movieInfo) return;
  
          this.infoPanelEl.setAttribute('visible', true);
          this.infoPanelEl.setAttribute('animation', {
            property: 'scale',
            to: '1 1 1',
            dur: 400,
            easing: 'easeOutBack'
          });
  
          if (this.movieImageEl) {
            this.movieImageEl.object3D.visible = false;
          }
  
          this.movieImageEl = movieInfo.imgEl;
          this.movieImageEl.object3D.visible = true;
  
          this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
          this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
        });
      });
    }
  });  