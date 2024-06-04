document.querySelector("[data-form='submit-btn']").addEventListener("click", function (event) {
  var selectedOption = document.getElementById("i-want-to").value;
  var successMessageElement = document.getElementById("success-replace");

  if (selectedOption === "is-apply") {
    event.preventDefault(); // Prevent the form from submitting normally

    // Update the success message immediately
    successMessageElement.innerHTML =
      'Each and every business matters to us, and we\'re eager to hear more about yours. In 5 seconds, you will be redirected to <a href="https://app.onrampfunds.com/pre-approval">https://app.onrampfunds.com/pre-approval</a>Where you can get your no commitment, pre-approval offer.';

    // Then set the timeout for redirection
    setTimeout(function () {
      window.location.href = "https://app.onrampfunds.com/pre-approval"; // Redirect to the URL
    }, 5000); // Delay the redirection for 5 seconds
  } else {
    successMessageElement.textContent = "Each and every business matters to us, and we're eager to hear more about yours. A funding expert from our team will reach out shortly!";
  }
});
