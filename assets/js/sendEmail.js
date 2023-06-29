/* jshint esversion: 11 */
// I followed the LMS video's on email js for most of this other than disabling the submit button where i did have some help from my mentor tim
function sendMail(contactForm) {
    let submitBtn = document.getElementById("contact-submit");
    submitBtn.disabled = true;
    emailjs.send("service_6wyu69h", "template_q2fpeth", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            window.location.href = "confirmation.html";
        },
        function(error) {
            console.log("FAILED", error);
            submitBtn.disabled = false;
        });
        return false;
}
