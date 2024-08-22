var tl = gsap.timeline();
var tlHero = gsap.timeline();

// Navbar

tl.from("#nav-logo", {
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
});

tl.from("#nav-links ul li ", {
  y: -20,
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});

// Hero Section

tlHero.from("#heroText h1", {
  y: -10,
  opacity: 0,
  duration: 0.5,
  delay: 1.5,
  stagger: 0.5,
  color: "red",
  fontWeight: "bold",
  scale: 1.5,
});

tlHero.from("#heroImage", {
  opacity: 0,
  duration: 0.8,
  scale: 1.1,
});

// About Section

function breakTheText() {
  var textElement = document.getElementById("aboutText");
  var text = textElement.textContent;
  var splittedText = text.split("");
  var clutter = "";

  splittedText.forEach((e) => {
    clutter += `<span>${e}</span>`;
  });

  textElement.innerHTML = clutter;
}

breakTheText();

gsap.from("#aboutText span", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
  color: "rgb(255, 92, 17)",
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top -20%",
    scrub: 2,
  },
});

// Projects Section

gsap.to("#projects #projectContainer", {
  transform: "translateX(-320%)",
  scrollTrigger: {
    trigger: "#projects",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
gsap.from("#experience1", {
  x: 1000,
  duration: 0.5,
  delay: 0,
  scrollTrigger: {
    trigger: "#experience-container",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from("#experience2", {
  x: -1000,
  duration: 0.5,
  delay: 0,
  scrollTrigger: {
    trigger: "#experience-container",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});
gsap.from("#experience3", {
  x: 1000,
  duration: 0.5,
  delay: 0,
  scrollTrigger: {
    trigger: "#experience-container",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -50%",
    scrub: 2,
  },
});
gsap.from("#experience4", {
  x: -1000,
  duration: 0.5,
  delay: 0,
  scrollTrigger: {
    trigger: "#experience-container",
    scroller: "body",
    // markers: true,
    start: "top -50%",
    end: "top -90%",
    scrub: 2,
  },
});
