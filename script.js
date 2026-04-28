(function () {
  const form = document.querySelector("#quick-text-form");
  const status = document.querySelector("#form-status");
  const businessPhone = "+15412300300";

  if (!form || !status) {
    return;
  }

  function clean(value, fallback) {
    const text = String(value || "").trim();
    return text || fallback;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const name = clean(data.get("name"), "Not provided");
    const location = clean(data.get("location"), "Not provided");
    const items = clean(data.get("items"), "Not provided");
    const loadSize = clean(data.get("loadSize"), "Not sure");
    const pickupTime = clean(data.get("pickupTime"), "Flexible");
    const notes = clean(data.get("notes"), "None");

    const message = [
      "Hi Simple Curbside Pickup, I would like a junk removal quote in Tucson.",
      "",
      "Name: " + name,
      "Pickup location: " + location,
      "Items to remove: " + items,
      "Approx load size: " + loadSize,
      "Preferred pickup time: " + pickupTime,
      "Notes: " + notes,
      "",
      "I can send photos for a faster quote."
    ].join("\n");

    status.textContent = "Opening a text message with your quote details.";
    window.location.href = "sms:" + businessPhone + "?body=" + encodeURIComponent(message);
  });
})();