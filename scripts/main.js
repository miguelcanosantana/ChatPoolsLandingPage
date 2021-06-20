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

//Play random sound
function play() {
  let ran = Math.floor(Math.random() * (4 - 1)) + 1;
  var audio = document.getElementById("audio" + ran);
  audio.play();
}