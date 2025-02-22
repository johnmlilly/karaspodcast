
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    autoplay: true
});
console.log(slider); // Should log the slider div or null if not found
