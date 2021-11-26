const form = document.getElementById("form"),
  username = document.getElementById("username"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  password2 = document.getElementById("password2");

//   Form Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 5, 16);
  checkLength(password, 8, 16);
  checkEmail(email);
  matchPassword(password, password2);
});

//   Check Required Fields
function checkRequired(inputAll) {
  inputAll.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `پرکردن این فیلد الزامی است`);
    } else {
      showSuccess(input);
    }
  });
}

// Check Input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} باید حداقل ${min} کاراکتر باشد.`);
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} نباید بیشتر از  ${max} کاراکتر باشد.`
    );
  } else {
    showSuccess(input);
  }
}

// Validate Email
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "ایمیل معتبر نیست");
  }
}

// Check Password
function matchPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "این فیلد را به شکل صحیح پر کنید");
  }
}

// Show Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Success Message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Get Field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
