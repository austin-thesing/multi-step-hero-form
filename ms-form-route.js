document.querySelector("[data-form='submit-btn']").addEventListener("click", function (event) {
  var selectedOption = document.getElementById("i-want-to").value;
  var successMessageElement = document.getElementById("success-replace");

  if (selectedOption === "is-apply") {
    event.preventDefault(); // Prevent the form from submitting normally

    // Update the success message immediately
    successMessageElement.innerHTML =
      'Each and every business matters to us, and we\'re eager to hear more about yours. <br>In 5 seconds, you will be redirected to <a class="desktop-p2" href="https://app.onrampfunds.com/signup">https://app.onrampfunds.com/signup</a></br>Where you can get your no commitment, pre-approval offer.';

    // Then set the timeout for redirection
    setTimeout(function () {
      window.location.href = "https://app.onrampfunds.com/signup"; // Redirect to the URL
    }, 0); // Delay the redirection for 5 seconds
  } else if (selectedOption === "is-talk") {
    event.preventDefault(); // Prevent the form from submitting normally

    // Update the success message for 'is-call'
    successMessageElement.innerHTML = "Thank you for your interest! We're redirecting you to a page where you can schedule a call at your desired time.";

    // Redirect to a different page after a delay
    setTimeout(function () {
      window.location.href = "https://www.onrampfunds.com/schedule-a-call"; // Redirect to the contact page
    }, 0); // Delay the redirection for 5 seconds
  } else {
    // Failsafe message goes here.
    successMessageElement.textContent = "Each and every business matters to us, and we're eager to hear more about yours. A funding expert from our team will reach out shortly!";
  }
});

// Function to format input as dollar amount
function formatDollarAmount(input) {
  console.log("Initial input value:", input.value);

  // Remove any non-digit characters
  let value = input.value.replace(/\D/g, "");
  console.log("After removing non-digits:", value);

  // Format the number with commas and no cents
  value = Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  console.log("After formatting:", value);

  // Remove the currency symbol (we'll add it manually to preserve cursor position)
  value = value.replace(/^\$/, "");
  console.log("After removing $ symbol:", value);

  // Update the input value
  input.value = "$" + value;
  console.log("Final formatted value:", input.value);
}

// Find all inputs with data-type="dollar"
const dollarInputs = document.querySelectorAll('input[data-type="dollar"]');
console.log("Found dollar inputs:", dollarInputs.length);

// Add event listeners to each dollar input
dollarInputs.forEach((input) => {
  console.log("Adding listener to input:", input);
  input.addEventListener("input", function () {
    console.log("Input event triggered, current value:", this.value);
    // Only format if the input is not empty
    if (this.value.trim() !== "") {
      formatDollarAmount(this);
    }
  });
});
