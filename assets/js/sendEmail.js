function sendMail(contactForm) {
    emailjs.send("service_6wyu69h", "template_q2fpeth", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response),
            window.location.href = "confirmation.html";
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}