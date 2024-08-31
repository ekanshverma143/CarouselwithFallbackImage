// Function to toggle accordion content
function toggleAccordion(event) {
    const header = event.currentTarget;
    const content = header.nextElementSibling;

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
    } else {
        // Close any open accordion content
        document.querySelectorAll('.accordion-content').forEach(c => {
            if (c !== content) {
                c.classList.remove('expanded');
            }
        });
        content.classList.add('expanded');
    }
}

// Add event listeners to all headers
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', toggleAccordion);
});
