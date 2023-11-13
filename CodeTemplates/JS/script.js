function toggleTextContent(index) {
    const textContent = document.querySelector('.text-content');
    const labels = document.querySelectorAll('.hover-label');

    // Hide all labels
    labels.forEach(label => {
        label.style.opacity = 0;
    });

    // Show the label corresponding to the clicked circle
    labels[index - 1].style.opacity = 1;

    // You can customize this part based on your requirements, e.g., toggle visibility of text content
    textContent.style.display = (textContent.style.display === 'none' || textContent.style.display === '') ? 'block' : 'none';
}