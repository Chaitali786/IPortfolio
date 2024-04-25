function showContent(id) {
    // Hide all content divs
    document.querySelectorAll('.content').forEach((div) => {
        div.style.display = 'none';
    });

    // Show the selected content div
    document.getElementById(id).style.display = 'block';
}
