const OvMenu = gsap.timeline({
  paused: "true",
});
OvMenu.to(".menu", {
  duration: 1,
  y: "0%",
  ease: Expo.easeInOut,
});
OvMenu.fromTo(
  ".li",
  {
    y: "-100%",
    opacity: 0,
  },
  {
    duration: 0.5,
    opacity: 1,
    y: "0%",
    stagger: 0.3,
  }
);
const btnH = document.querySelector(".button");
const middleText = document.querySelector(".middleTextTitle");
openOv = () => {
  OvMenu.play();
  btnH.style.opacity = 0;
  middleText.style.opacity = 0;
  document.body.classList.add("menu-open");
};

closeOv = () => {
  OvMenu.reverse();
  setTimeout(() => {
    middleText.style.opacity = 1;
    btnH.style.opacity = 1;
  }, 2500);
  document.body.classList.remove("menu-open");
};
const custom = document.querySelector(".customX");
document.addEventListener("mousemove", (e) => {
  custom.style.left = e.clientX + "px";
  custom.style.top = e.clientY + "px";
});
const handleCursorHover = () => {
  const toggleHam = document.querySelector(".button");
  const toggleOveCL = document.querySelector(".buttonC");
  const toggleList = document.querySelectorAll(".li");

  toggleHam.addEventListener("mouseenter", () => {
    const cursorElement = document.querySelector(".customX");
    cursorElement.classList.add("scalable-customX");
  });
  toggleHam.addEventListener("mouseleave", () => {
    const cursorElement = document.querySelector(".customX");
    cursorElement.classList.remove("scalable-customX");
  });
  toggleOveCL.addEventListener("mouseenter", () => {
    const cursorElement = document.querySelector(".customX");
    cursorElement.classList.add("scalable-customX");
  });
  toggleOveCL.addEventListener("mouseleave", () => {
    const cursorElement = document.querySelector(".customX");
    cursorElement.classList.remove("scalable-customX");
  });
  toggleList.forEach((li) => {
    li.addEventListener("mouseenter", () => {
      const cursorElement = document.querySelector(".customX");
      cursorElement.classList.add("scalable-customX");
    });
    li.addEventListener("mouseleave", () => {
      const cursorElement = document.querySelector(".customX");
      cursorElement.classList.remove("scalable-customX");
    });
  });
};
handleCursorHover();

window.addEventListener("load", function () {
  setTimeout(function () {
    const button = document.querySelector(".button");
    button.style.opacity = 1;
  }, 2000);
  setTimeout(function () {
    const text = document.querySelector(".glowing-text");
    text.style.opacity = 1;
  }, 2300);
  setTimeout(function () {
    const backgroundImage = document.querySelector(".backgroundImage");
    backgroundImage.style.filter = "blur(0)";
  }, 1500);
});
