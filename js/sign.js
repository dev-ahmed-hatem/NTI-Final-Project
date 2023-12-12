let iTags = document.querySelectorAll("i");

iTags.forEach((el) => {
    el.addEventListener("click", function () {
        this.classList.toggle("active");
        parentFormItem = this.parentElement;
        passwordInput = parentFormItem.querySelector("input");
        passwordInput.type =
            passwordInput.type == "password" ? "text" : "password";
        siblingITag = this.parentElement.querySelector(
            this.classList.contains("eye") ? ".eye-slash" : ".eye"
        );
        siblingITag.classList.toggle("active");
    });
});
