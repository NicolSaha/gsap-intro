const splatter = gsap.to('.splatter', { duration: 20, rotation: 360 });

splatter.timeScale(0.5);

const nicol = gsap.from('.nicol', {
  duration: 3,
  x: 300,
  scale: 0.5,
});

const heroHeading = gsap.from('.hero-heading', {
  duration: 3,
  x: 300,
  delay: 1,
  opacity: 0,
  scale: 0.5,
});

const button = gsap.from('.button', {
  duration: 3,
  y: 300,
  opacity: 0,
  delay: 2,
  scale: 0.5,
});

const one = gsap.from('.one', {
  duration: 3,
  y: -200,
  scale: 0.5,
});

const two = gsap.from('.two', {
  duration: 3,
  y: -200,
  scale: 0.5,
});

const three = gsap.from('.three', {
  duration: 3,
  y: -200,
  scale: 0.5,
});

const valueHeading = gsap.from('.value-heading', {
  duration: 3,
  y: 300,
  scale: 0.5,
});

const valueDescription = gsap.from('.value-description', {
  duration: 3,
  y: 300,
  scale: 0.5,
  delay: 1,
});

const name = gsap.from('.name', {
  duration: 3,
  y: -150,
  opacity: 0,
  scale: 0.5,
});
