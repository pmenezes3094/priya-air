// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Timeline for loading animations
let tl = gsap.timeline();
tl.from("body", { duration: 0.5, opacity: 0.5, ease: "slow"});
tl.from(".header", { duration: 0.5, y: "-200%", ease: "back" });

// Scale hero image on scroll
gsap.to(".hero-img", {
    scale: 2,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
});

// Fade hero image and content on scroll
gsap.to(".hero-content, .hero-img", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
});

// Move hero image and content down as it scrolls up
gsap.to(".hero .hero-content", {
    y: 300,
    zIndex: 0,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
});

// Scale up contact details on trigger
gsap.from(".contact-details-content", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact",
      start: "top bottom",
    },
});

// Bounce appear footer details on trigger
gsap.from("footer", {
    y: 200,
    duration: 1,
    ease: "power",
    delay: 1,
    scrollTrigger: {
      trigger: ".contact",
      start: "bottom bottom"
    },
});

// Scale up bio quote content on trigger
gsap.from(".bio-quote-content", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".bio-quote",
      start: "top bottom",
      end: "center center",
      scrub: 4
    },
});

// Reveal text content on scroll
const textContent = document.querySelectorAll(".text");
textContent.forEach((element) => {
    gsap.from(element, {
        opacity: -1,
        scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "center center",
            scrub: 4
        },
    });
});

// Reveal card content on scroll
const cards = document.querySelectorAll(".card-content");
cards.forEach((element) => {
    gsap.from(element, {
        y: 200,
        scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "top 400%",
            scrub: 1
        },
    });
});

// Reveal case study images on scroll
const caseStudyImages = document.querySelectorAll(".image");
caseStudyImages.forEach((element) => {
    gsap.from(element, {
        opacity: -1,
        scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "center center",
            scrub: 4
        },
    });
});

// Smooth Scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
