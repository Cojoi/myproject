var popUp = document.getElementById("pop");
    var closeButton = document.getElementById("closePop");
    var bookButton = document.querySelector(".book-button button[type='submit']");
    var bookForm = document.querySelector(".book-button form"); // Add this line

    function popUpFunction() {
        popUp.style.display = "flex";
    }

    function closePopUpFunction() {
        popUp.style.display = "none";
    }

    function onSubmit(event) {
        event.preventDefault(); // Prevent form submission
        var formIsValid = bookForm.checkValidity(); // Check form validity
        if (formIsValid) {
            popUpFunction(); // If form is valid, show popup
        }
    }

    bookForm.addEventListener("submit", onSubmit);
    closeButton.addEventListener("click", closePopUpFunction);

