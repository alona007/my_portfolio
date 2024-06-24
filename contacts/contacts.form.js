import axios from "axios";

function showModal() {
  const overlay = document.getElementById("modal-overlay");
  const noScroll = document.querySelector("html");

  noScroll.classList.add("no-scroll");
  overlay.classList.add("is-open");
}

function hideModal() {
  const overlay = document.getElementById("modal-overlay");
  const noScroll = document.querySelector("html");

  noScroll.classList.remove("no-scroll");
  overlay.classList.remove("is-open");
}

const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailWrapper = emailInput.parentElement;
const messageInput = document.getElementById("message");

function validateEmail() {
  const userEmail = emailInput.value;

  if (
    !userEmail ||
    !userEmail.includes("@") ||
    userEmail.indexOf("@") === userEmail.length - 1
  ) {
    emailWrapper.classList.add("invalid");
    return false;
  } else {
    emailWrapper.classList.remove("invalid");
    return true;
  }
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (!validateEmail()) {
    return;
  }

  const userEmail = emailInput.value.replace(/\s+/g, "");
  const userMessage = messageInput.value;

  const requestData = { email: userEmail };
  if (userMessage) {
    requestData.message = userMessage;
  }

  try {
    const response = await axios.post(
      "https://formspree.io/f/alona.olyksashenko@gmail.com",
      requestData
    );

    if (response.status === 200 || response.status === 201) {
      showModal();
      form.reset();
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert(
      "There was an error processing your request. Please try again later."
    );
  }
});

emailInput.addEventListener("input", function () {
  emailWrapper.classList.remove("invalid");
});

emailInput.addEventListener("focus", function () {
  emailWrapper.classList.remove("invalid");
});

emailInput.addEventListener("blur", function () {
  validateEmail();
});

const closeModalButton = document.querySelector(".modal-close-icon");
closeModalButton.addEventListener("click", hideModal);

export { showModal, hideModal };
