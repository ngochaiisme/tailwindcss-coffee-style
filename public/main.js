const topMenu = document.getElementById('dnh-top-menu')
const toggleMenuIcon = document.getElementById('dnh-toggle-top-menu-icon')

document.addEventListener('click', (event) => {
    if (toggleMenuIcon.contains(event.target)) {
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('dnh-top-menu-expended')
    } else {
        topMenu.classList.remove('dnh-top-menu-expended')
        topMenu.classList.add('hidden')
    }
})
