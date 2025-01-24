/*********  Sign In / Sign Up pages *********/
// Select the buttons and forms
const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

// Add event listeners to the buttons
signinBtn.addEventListener('click', () => {
  signinForm.classList.add('active');
  signupForm.classList.remove('active');
  signinBtn.classList.add('active');
  signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
  signupForm.classList.add('active');
  signinForm.classList.remove('active');
  signupBtn.classList.add('active');
  signinBtn.classList.remove('active');
});
/*********  Sign In / Sign Up pages *********/

history.scrollRestoration = "manual";

const removeAnchorFormURL = () => {
  setTimeout(() => {
    window.history.replaceState({}, "", window.location.href.split("#")[0]);
  }, 100);
};


// Start auto-scrolling when the page loads
