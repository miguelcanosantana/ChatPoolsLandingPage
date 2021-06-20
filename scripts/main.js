//Init the particles
window.onload = function() {

  Particles.init({
    selector: '.particles',
    connectParticles: true,
    color: '#d0d1d4',
    speed: 0.3,

    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 40
        }
      }
    ]
    
  });

};