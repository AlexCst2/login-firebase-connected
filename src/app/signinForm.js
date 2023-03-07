import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form");
const postList = document.querySelector(".posts");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)

    // Close the login modal
    const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
    modal.hide();

    // reset the form
    signInForm.reset();

    // show welcome message
    showMessage("Welcome" + userCredentials.user.email);

    postList.innerHTML = `<li class="list-group-item list-group-item-action">
      <h5>Post 1</h5>
      <p>Culpa ullamco aute nulla nisi tempor ad.</p>
      <h5>Post 2</h5>
      <p>Et non commodo in magna laborum do amet.</p>
    </li>`

  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Wrong password", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("User not found", "error")
    } else {
      showMessage("Something went wrong", "error")
    }
  }
});