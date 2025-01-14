
const navItems = document.querySelectorAll('.nav-item');
const activePage = localStorage.getItem('activePage');

if (activePage) {
const activeItem = document.querySelector(`[data-page="${activePage}"]`);
if (activeItem) {
    activeItem.classList.add('active');
}
}

navItems.forEach(item => {
item.addEventListener('click', function() {
    localStorage.setItem('activePage', this.dataset.page);
    navItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
});
});

