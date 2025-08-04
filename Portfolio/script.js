document.getElementById("email").addEventListener("click", function () {
  window.open(
    "https://mail.google.com/mail/?view=cm&to=abhinavsinghas1122@gmail.com",
    "_blank"
  );
});

document
  .querySelectorAll(".certificate-card input[type='image']")
  .forEach((img) => {
    img.addEventListener("click", () => {
      alert("You clicked a certificate!");
    });
  });

const footer = document.querySelector("footer p");
if (footer) {
  footer.textContent = `© ${new Date().getFullYear()} Abhinav Singh. All rights reserved.`;
}
