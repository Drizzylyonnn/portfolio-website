const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/maqveylb", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully!";
      form.reset();
    } else {
      status.innerHTML = "❌ Something went wrong. Try again.";
    }
  } catch (error) {
    status.innerHTML = "⚠️ Network error. Check connection.";
  }
});
