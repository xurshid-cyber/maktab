const revealSettings = {
    threshold: 0.18,
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, revealSettings);

const revealTargets = [
    '.hero-content',
    '.page-title',
    '.section-intro',
    '.grade-card',
    '.subject-card',
    '.feature-card',
    '.course-card',
    '.card',
    '.info',
];

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(revealTargets.join(', ')).forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    const header = document.querySelector('header');
    const nav = document.querySelector('header nav');
    if (header && nav) {
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'nav-toggle';
        toggle.textContent = 'Menyu';
        toggle.setAttribute('aria-label', 'Mobil menyuni ochish');
        toggle.setAttribute('aria-expanded', 'false');
        header.insertBefore(toggle, nav);

        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            const open = nav.classList.contains('open');
            toggle.setAttribute('aria-expanded', String(open));
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => nav.classList.remove('open'));
        });
    }

    const backToTop = document.createElement('button');
    backToTop.type = 'button';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Yuqoriga qaytish');
    backToTop.textContent = '↑';
    document.body.append(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 420);
    });
});
