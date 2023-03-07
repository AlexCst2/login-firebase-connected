import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");
const postList = document.querySelector(".posts");
const cancelBtn = document.getElementById("signUpCancelBtn");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    // Close the signup modal
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    // reset the form
    signUpForm.reset();

    // show welcome message
    showMessage("Welcome " + userCredential.user.email);

    postList.innerHTML = `<li class="list-group-item list-group-item-action">
      <h5>Post 1</h5>
      <p>Culpa ullamco aute nulla nisi tempor ad.</p>
      <h5>Post 2</h5>
      <p>Et non commodo in magna laborum do amet.</p>
    </li>`

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Email already in use", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Invalid email", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Weak password", "error")
    } else if (error.code) {
      showMessage("Something went wrong", "error")
    }
  }

});

cancelBtn.addEventListener('click', () => {
  const signupModal = document.querySelector('#signupModal');
  const modal = bootstrap.Modal.getInstance(signupModal);
  modal.hide();
});
