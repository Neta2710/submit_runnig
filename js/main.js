var button = document.getElementById("submit");
var login = "Netanael";
var mdp = "Neta";
var openEye = document.getElementById("open");
var closeEye = document.getElementById("close");
var inputLogin = "";
var inputPassword = "";
var leftnumber = "";
var topnumber = "";
var xPos = "";
var yPos = "";
var ghost = document.getElementById("ghost");
var passwordInput = document.getElementById("password");

function animationSubmit() {
  inputLogin = document.getElementById("username").value;
  inputPassword = document.getElementById("password").value;
  if (inputLogin == "Netanael" && inputPassword == "Neta") {
    console.log("test");
  } else {
    leftnumber = entierAleatoire(-35, 35);
    topnumber = entierAleatoire(0, 55);
    button.style.left = leftnumber + "%";
    button.style.top = topnumber + "%";
    console.log("hover");
  }
}

button.addEventListener("mouseover", animationSubmit);

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function show() {
  openEye.style.display = "none";
  closeEye.style.display = "initial";
  passwordInput.type = "password";
} 

function hide() {
  closeEye.style.display = "none";
  openEye.style.display = "initial";
  passwordInput.type = "text";
}

function verif() {
  if (inputLogin == "Netanael" && inputPassword == "Neta") {
    button.addEventListener("click", yes());
    function yes() { 
      setTimeout(() => {
        document.getElementById("submit").style.backgroundColor =
          "rgb(19, 12, 12)";
      }, 150);
      document.getElementById("submit").style.backgroundColor = "green";
      alert('Mot de passe correcte.','Bienvenue chez vous maitre !');
  
    }
  } else {
    setTimeout(() => {
      document.getElementById("submit").style.backgroundColor =
        "rgb(19, 12, 12)";
    }, 150);
    leftnumber = entierAleatoire(-35, 35);
    topnumber = entierAleatoire(0, 55);
    document.getElementById("submit").style.backgroundColor = "red";
    console.log("click");
    button.style.left = leftnumber + "%";
    button.style.top = topnumber + "%";
  }
}

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 260, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 300, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
count_particles = document.querySelector(".js-count-particles");
update = function () {
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
    requestAnimationFrame(update);
};
requestAnimationFrame(update);

document.onmousemove = mouseCoordinates;
var output = document.getElementById("output");

function mouseCoordinates(event) {
  var xPos = event.clientX;
  var yPos = event.clientY;
  ghost.style.left = xPos + "px";
  ghost.style.top = yPos + "px";
}


window.alert = function(titre, message) {
	document.getElementById("alertPanel").innerHTML = "<span class=\"close\" onclick=\"closealert();\"></span><h2 id=`titreAlert`>" + titre + "</h2><div class=\"texte\">" + message + "</div>";
	document.getElementById('alertPanel').style.display='block';
	document.getElementById('overlay').style.display='block';
}
function closealert()
{
	document.getElementById('alertPanel').style.display='none';
	document.getElementById('overlay').style.display='none';
}