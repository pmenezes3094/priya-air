gsap.registerPlugin(ScrollTrigger);

//Loading animations
let tl = gsap.timeline();
tl.from(".header", { duration: 1, y: "-200%", ease: "back" });
tl.from(".hero, main", { duration: 1, opacity: 0, ease: "slow" });


//scale hero image on scroll
gsap.to(".hero-img", {
    scale: 2,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
      marker: true,
    },
  });

//fade hero image and content on scroll
  gsap.to(".hero-content, .hero-img", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
      marker: true,
    },
  });

//slide main over hero (Parallax effect)
gsap.to("main", {
  y: "-700px",
  zIndex: 2,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    marker: true,
  },
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
