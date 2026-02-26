function updateHeaderPosition() {function updateHeaderPosition() {
  const header = document.getElementById('header');
  
  /* this is a javascipt code to make sure that the website look fine on mobile, basically the headers position is fixed.
   But if the headers height is too big then a large portion of the screen is basically invisible.
   so this code makes sure that when the header height is over 30%, the position becomes static. */
  if (!header) return;

  const viewportHeight = window.innerHeight;
  const headerHeight = header.offsetHeight;


  if (headerHeight > viewportHeight * 0.3) {
    header.classList.remove('fixed-header');
    header.classList.add('normal-header');
  } else {
    header.classList.remove('normal-header');
    header.classList.add('fixed-header');
  }
}


window.addEventListener('DOMContentLoaded', updateHeaderPosition);
window.addEventListener('resize', updateHeaderPosition);
window.addEventListener()

updateHeaderPosition();


function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}


