function toggleAccordion(event) {
    const header = event.currentTarget;
    const content = header.nextElementSibling;

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
    } else {
        document.querySelectorAll('.accordion-content').forEach(c => {
            if (c !== content) {
                c.classList.remove('expanded');
            }
        });
        content.classList.add('expanded');
    }
}

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', toggleAccordion);
});
