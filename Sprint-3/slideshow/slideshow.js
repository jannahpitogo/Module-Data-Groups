const images = [
  {
    url: "./assets/nature1.jpg",
    alt: "A-lake-pic",
  },
  {
    url: "./assets/nature2.jpg",
    alt: "a-lake-with-boats-and-mountain",
  },
  {
    url: "./assets/nature3.jpg",
    alt: "a-river-valley-with-fog",
  },
  {
    url: "./assets/nature4.jpg",
    alt: "a-terrain-with-mountains-and trees",
  },
  {
    url: "./assets/nature5.jpg",
    alt: "an-all-green-terrain",
  },
  {
    url: "./assets/nature6.jpg",
    alt: "a-lake-with-a-tree-in-the-center-and-mountains",
  },
  {
    url: "./assets/nature7.jpg",
    alt: "a-cabin-on-a-lake-foggy",
  },
  {
    url: "./assets/nature8.jpg",
    alt: "a-lake-with-terrain-and-alps-view",
  },
];

let imgCounter = 0;
let imageIndexLink = "";
let imageIndexAlt = "";
const imageOutput = document.getElementById("carousel-img");
let autoSwitch = 0;
let intervalforward;
let intervalbackward;

//Forward
function changeImgForward() {
  imgCounter++;
  autoSwitch = 1;

  if (imgCounter >= images.length) {
    imgCounter = 0;
  }

  imageIndexLink = images[imgCounter].url;
  imageIndexAlt = images[imgCounter].alt;

  imageOutput.src = imageIndexLink;
  imageOutput.alt = imageIndexAlt;
}

//Backward
function changeImgBackward() {
  imgCounter--;
  autoSwitch = -1;

  if (imgCounter < 0) {
    imgCounter = 0;
  }

  imageIndexLink = images[imgCounter].url;
  imageIndexAlt = images[imgCounter].alt;

  imageOutput.src = imageIndexLink;
  imageOutput.alt = imageIndexAlt;
}

function autoForward() {
  intervalforward = setInterval(changeImgForward, 5000);
  intervalforward;
}

function autoBackward() {
  intervalbackward = setInterval(changeImgBackward, 5000);
  intervalbackward;
}

function stopCarousel() {
  if ((autoSwitch = 1)) {
    clearInterval(intervalforward);
  }
  if ((autoSwitch = -1)) clearInterval(intervalbackward);
}

function setup() {
  document.getElementById("forward-btn").addEventListener("click", () => {
    changeImgForward();
  });

  document.getElementById("backward-btn").addEventListener("click", () => {
    changeImgBackward();
  });

  document.getElementById("autoforward-btn").addEventListener("click", () => {
    autoForward();
  });

  document.getElementById("autobackward-btn").addEventListener("click", () => {
    autoBackward();
  });

  document.getElementById("stop-btn").addEventListener("click", () => {
    stopCarousel();
  });
}

window.onload = setup;
