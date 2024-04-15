document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById('navbar-container');
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                navbarContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Failed to load navbar');
            }
        }
    };
    xhr.open('GET', 'navbar.html', true);
    xhr.send();
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
