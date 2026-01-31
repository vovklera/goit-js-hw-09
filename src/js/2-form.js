const formData = {
    email: "",
    message: ""
};

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener("submit", handleSubmit);

form.addEventListener("input", onFormInput);
populateInput();

function onFormInput(event) {    
    const { name, value } = event.target;
    formData[name] = value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateInput() {
    const newInput = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (newInput) {
        emailInput.value = newInput.email;
        messageInput.value = newInput.message;
    
        formData.email = newInput.email;
        formData.message = newInput.message;
    }
};
console.log(formData);

function handleSubmit(event) {
    event.preventDefault();

    if (!emailInput.value || !messageInput.value) {
        console.log("Fill please all fields");
        return;
    } else {
        console.log(formData);
    };

    event.currentTarget.reset();
    formData.email = "";
    formData.message = "";
    localStorage.removeItem(STORAGE_KEY);
};