/*
function updateHeaderPosition() {
  const header = document.getElementById('header');
  
  formerly, this was a javascipt code to make sure that the website looked fine on mobile, the headers position fixed.
  But if the headers height was too big then a large portion of the screen was basically invisible.
  so this code made sure that when the header height is over 30%, the position became relative.
  But now i learned that i can just do this with css media queries T_T
  
  
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
*/

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}



/*This is a js code to send me a email everytime someone fills out the form on join.html*/ 
    const clubForm = document.getElementById('ict-club-form');
    const statusMsg = document.getElementById('status-msg');
    const btn = document.getElementById('submitBtn');

    clubForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        btn.disabled = true;
        btn.innerText = "Sending...";

        // Connection to formspree
        const endpoint1 = "https://formspree.io/f/xdadobra";
        const endpoint2 = "https://formspree.io/f/mqedodey";

        try {
            const request1 = fetch(endpoint1, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            const request2 = fetch(endpoint2, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            const [response1, response2] = await Promise.all([request1, request2]);

            if (response1.ok || response2.ok) {
                statusMsg.style.display = "block";
                statusMsg.style.backgroundColor = "#d4edda";
                statusMsg.style.color = "#155724";
                statusMsg.innerText = "Your form was successfully received";
                clubForm.reset();
            } else {
                throw new Error("Submission Failed");
            }
        } catch (error) {
            statusMsg.style.display = "block";
            statusMsg.style.backgroundColor = "#f8d7da";
            statusMsg.style.color = "#721c24";
            statusMsg.innerText = "Your form failed to send";
        } finally {
            btn.disabled = false;
            btn.innerText = "Fill out the form";
        }
    });
