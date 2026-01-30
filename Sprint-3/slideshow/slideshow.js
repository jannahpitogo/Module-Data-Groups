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

//FORWARD
let imgCounter = 0;
let imageIndex;
if (imgCounter < images.length) {
  imgCounter++;
  imageIndex = images[imgCounter];
} else {
  imgCounter = 0;
}

function changeImgForward() {
  const imageForward = document.getElementById("carousel-img");
  imageForward.innerHTML = `<img src="${imageIndex}" alt="cat-pic" />`;
}

function setup() {
  document.getElementById("forward-btn").addEventListener("click", () => {
    changeImgForward();
  });
}

window.onload = setup;
