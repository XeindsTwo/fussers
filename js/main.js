document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('menuBtn');
    const headerInner = document.querySelector('.header__inner');
    const body = document.body;
    const anchors = document.querySelectorAll('a[href*="#"]');

    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (headerInner.classList.contains('header__inner--active')) {
            headerInner.style.height = '90px';
            body.classList.remove('body--active');
        } else {
            headerInner.style.height = 'auto';
            const headerHeight = headerInner.clientHeight;
            headerInner.style.height = '90px';
            setTimeout(() => {
                headerInner.style.height = headerHeight + 'px';
                body.classList.add('body--active');
            }, 0);
        }
        headerInner.classList.toggle('header__inner--active');
        menuBtn.classList.toggle('active');
    }

    function scrollToTarget(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            menuBtn.classList.remove("active");
            headerInner.classList.remove("header__inner--active");
            headerInner.style.height = '90px';
            body.classList.remove("body--active");
            setTimeout(function () {
                const targetOffset = targetSection.offsetTop;
                window.scrollTo({top: targetOffset, behavior: "smooth"});
            }, 300);
        }
    }

    function handleAnchorClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        scrollToTarget(targetId);
    }

    for (let anchor of anchors) {
        anchor.addEventListener("click", handleAnchorClick);
        anchor.addEventListener("touchstart", handleAnchorClick);
    }

    const menuLinks = document.querySelectorAll(".header__link");
    menuLinks.forEach(function (menuLink) {
        menuLink.addEventListener("click", handleAnchorClick);
        menuLink.addEventListener("touchstart", handleAnchorClick);
    });
});

gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline({defaults: {duration: 0.7}});
timeline.from(".header", {opacity: 0, y: 0})
timeline.from(".header__inner", {opacity: 0, y: -100, scale: 1})
timeline.from(".header__img", {opacity: 0, scale: 0})
timeline.from(".header__title", {opacity: 0, scale: 0})
timeline.from(".header__btn", {opacity: 0, scale: 0})

const planetOne = document.querySelector('.dream__planets-one');
const planetTwo = document.querySelector('.dream__planets-two');
const circle = document.querySelector('.about__svg');
const breakpoint600 = window.matchMedia("(max-width: 600px)");

const timelineDream = gsap.timeline({defaults: {duration: 0.6}});
timelineDream.pause();
timelineDream.from('.dream__images', {opacity: 0, y: 530});
timelineDream.from('.dream__planets', {opacity: 0, y: 300});
timelineDream.from('.dream__bird', {opacity: 0, y: -300});
timelineDream.from('.dream__gifs-wall', {opacity: 0});
timelineDream.from('.dream__gifs-smoking', {opacity: 0});

ScrollTrigger.create({
    trigger: '.dream',
    start: 'top bottom',
    once: true,
    onEnter: () => {
        timelineDream.play();
    },
});

const planetOneAnimation = gsap.to(planetOne, {
    rotation: 360,
    repeat: -1,
    ease: 'linear',
    duration: 10,
});
const planetTwoAnimation = gsap.to(planetTwo, {
    rotation: 360,
    repeat: -1,
    ease: 'linear',
    duration: 20,
});

const timelineHolder = gsap.timeline({defaults: {duration: 0.6}});
timelineHolder.pause();
timelineHolder.from('.holder__img-main', {delay: 0.3, scale: 0, opacity: 0});
timelineHolder.from('.holder__decor', {delay: 0.3, opacity: 0, scale: 0});

ScrollTrigger.create({
    trigger: '.holder',
    start: 'top bottom',
    once: true,
    onEnter: () => {
        timelineHolder.play();
    },
});

const timelineAdvantages = gsap.timeline({defaults: {duration: 0.5}});
timelineAdvantages.pause();
timelineAdvantages.from('.advantages__top', {delay: 0.3, scale: 0});
timelineAdvantages.from('.advantages__item--one', {delay: 0.3, scale: 0});
timelineAdvantages.from('.advantages__item--two', {delay: 0.3, scale: 0});
timelineAdvantages.from('.advantages__item--three', {delay: 0.3, scale: 0});
timelineAdvantages.from('.advantages__item--four', {delay: 0.3, scale: 0});
timelineAdvantages.from('.advantages__decor', {delay: 0.3, opacity: 0});
ScrollTrigger.create({
    trigger: '.advantages',
    start: 'top bottom',
    once: true,
    onEnter: () => {
        timelineAdvantages.play();
    },
});

const timelineAbout = gsap.timeline({defaults: {duration: 0.5}});
timelineAbout.pause();
timelineAbout.from('.about__content-decor', {delay: 0.6, opacity: 0});
timelineAbout.from('.about__people img', {delay: 0.5, y: 600});
timelineAbout.from('.about__svg', {delay: 0.2, y: 700});
ScrollTrigger.create({
    trigger: '.about',
    start: 'top bottom',
    once: true,
    onEnter: () => {
        timelineAbout.play();
    },
});

const circleAnimation = gsap.to(circle, {
    rotation: 360,
    repeat: -1,
    ease: 'linear',
    duration: 20,
});

const timelineAgainNft = gsap.timeline({defaults: {duration: 0.4}});
timelineAgainNft.pause();

timelineAgainNft.fromTo(
    ['.again-left__img-decor--one',
        '.again-left__img-decor--two',
        '.again-left__img-decor--seven',
        '.again-left__img-decor--five',
        '.again-left__img-decor--six',
        '.again-left__img-decor--four',
        '.again-left__img-decor--three'],
    {opacity: 0, scale: 0},
    {opacity: 1, scale: 1, stagger: 0.3}
);

ScrollTrigger.create({
    trigger: '.again',
    start: 'top bottom',
    once: true,
    onEnter: () => {
        timelineAgainNft.play();
    },
});

const timelineInfo = gsap.timeline({defaults: {duration: 0.6}});
timelineInfo.pause();
timelineInfo.from('.info__item--one', {delay: 0.5, scale: 0});
timelineInfo.from('.info__item--two', {delay: 1, scale: 0});
ScrollTrigger.create({
    trigger: '.info',
    start: 'top bottom',
    once: true,
    onEnter: () => {
        timelineInfo.play();
    },
});

const timelineFooter = gsap.timeline({defaults: {duration: 0.3}});
timelineFooter.pause();
timelineFooter.from('.footer', {delay: 1, opacity: 0});
timelineFooter.from('.footer__item--twitter', {delay: 0.1, scale: 0});
timelineFooter.from('.footer__item--discord', {delay: 0.1, scale: 0});
timelineFooter.from('.footer__item--sea', {delay: 0.1, scale: 0});
if (!breakpoint600.matches) {
    ScrollTrigger.create({
        trigger: '.footer',
        start: 'top bottom',
        once: true,
        onEnter: () => {
            timelineFooter.play();
        },
    })
} else {
    ScrollTrigger.create({
        trigger: '.footer',
        start: 'top 170%',
        once: true,
        onEnter: () => {
            timelineFooter.play();
        },
    });
}