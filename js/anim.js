var animation = bodymovin.loadAnimation({
  container: document.getElementById("animContainer"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/DrawKit - Animation Pack - Grape/PRODUCT/Animation 08/drawkit-grape-animation-8-LOOP.json", // lottie file path
});

// https://assets9.lottiefiles.com/packages/lf20_5n8yfkac.json

gsap.set(".content:not(.initial)", { autoAlpha: 0 });

var headlines = gsap.utils.toArray(".text");

var totalDuration = 1000;
var singleDuration = totalDuration / headlines.length;

const lineTimeline = gsap.timeline();

ScrollTrigger.create({
  trigger: ".pin-up",
  start: "top top",
  end: "+=" + totalDuration,
  //markers: true,
  pin: true,
  scrub: true,
  animation: lineTimeline,
});

lineTimeline
  .to(".sideline", { duration: 1 }, 0)
  .to(".sideline", { duration: 0.9, scaleY: 1, ease: "none" }, 0);

headlines.forEach((elem, i) => {
  const smallTimeline = gsap.timeline();

  const content = document.querySelector(".content-wrap");
  const relevantContent = content.querySelector("span.content-" + i);

  ScrollTrigger.create({
    trigger: ".wrapper",

    start: "top -=" + singleDuration * i,
    end: "+=" + singleDuration,

    //markers: true,

    animation: smallTimeline,
    toggleActions: relevantContent.classList.contains("remaining")
      ? "play none play reverse"
      : "play reverse play reverse",
  });

  smallTimeline
    //.to(elem,{ duration: 0.25, fontSize: "40px", color: "orange"}, 0)
    .to(elem, { duration: 0.25, color: "orange" }, 0)
    .set(relevantContent, { autoAlpha: 1 }, 0);
});

var showYowza = gsap.timeline();
showYowza.to(".below span", { autoAlpha: 1, y: 0 });

ScrollTrigger.create({
  trigger: ".below",
  start: "top center",

  //endTrigger: ".footer",
  end: "bottom bottom",

  //scrub: 1,

  //markers: true,
  animation: showYowza,

  toggleActions: "none play none reverse",
  //toggleActions: "play reverse play reverse"
});
