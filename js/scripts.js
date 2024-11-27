document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.animated-text');
    let index = 0;

    function showNextText() {
        texts.forEach((text, i) => {
            text.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % texts.length;
    }

    setInterval(showNextText, 3000);
    showNextText();
});
