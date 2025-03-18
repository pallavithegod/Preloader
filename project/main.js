window.addEventListener('load', () => {
    const imageStage = document.querySelector('.image-stage img');
    const animationStage = document.querySelector('.animation-stage');
    const preloader = document.getElementById('preloader');

    // Step 1: Start fading and blurring the image
    setTimeout(() => {
        imageStage.classList.add('fade-blur');
    }, 900);

    // Step 2: Gradually bring in the book and text over the blurred image
    setTimeout(() => {
        animationStage.classList.add('fade-in-over-image');
    }, 1000);

    // Step 3: Fly the entire preloader upward and fade out
    setTimeout(() => {
        preloader.classList.add('fly-out');
        setTimeout(() => preloader.remove(), 1000);
    }, 5000);
});
