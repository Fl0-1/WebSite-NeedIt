export default function StickyMenu(selector = '.needit-sticky') {
    document.addEventListener('scroll', () => {
        const element = document.querySelector(selector);
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.classList.add('sticky');
            } else {
                element.classList.remove('sticky');
            }
        }
    });
}
