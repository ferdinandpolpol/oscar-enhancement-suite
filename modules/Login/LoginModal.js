import "./LoginModal.css";

export class LoginModal {
  modalContainer = null;

  constructor() {
    const modalContainer = document.querySelector(".cortico-login-container");

    if (modalContainer) {
      this.modalContainer = modalContainer;
      return;
    }

    this.modalContainer = document.createElement("div");
    this.modalContainer.classList.add("cortico-login-container");

    const loginTitle = document.createElement("h3");
    loginTitle.classList.add("cortico-color");
    loginTitle.innerText = "Cortico";

    const labelUsername = document.createElement("label");
    labelUsername.setAttribute("for", "cortico-username");
    labelUsername.innerText = "Username";

    const inputUsername = document.createElement("input");
    inputUsername.setAttribute("name", "cortico-username");
    inputUsername.setAttribute("type", "text");

    const labelPassword = document.createElement("label");
    labelPassword.setAttribute("for", "cortico-password");
    labelPassword.innerText = "Password";
    const inputPassword = document.createElement("input");
    inputPassword.setAttribute("name", "cortico-passowrd");
    inputPassword.setAttribute("type", "password");

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      
    });

    this.modalContainer.appendChild(loginTitle);
    this.modalContainer.appendChild(labelUsername);
    this.modalContainer.appendChild(inputUsername);
    this.modalContainer.appendChild(labelPassword);
    this.modalContainer.appendChild(inputPassword);
    this.modalContainer.appendChild(submitButton);
  }

  hide() {
    this.modalContainer && this.modalContainer.classList.remove("show");
  }

  show() {
    this.modalContainer && this.modalContainer.classList.add("show");
  }
}
