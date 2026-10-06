// BSSD — navigation and email preparation. No network requests or local storage.
(function () {
  "use strict";
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  function closeMenu(returnFocus) {
    if (!burger || !nav) return;
    nav.classList.remove("ist-offen");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Menü öffnen");
    burger.textContent = "☰";
    if (returnFocus) burger.focus();
  }
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("ist-offen");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
      burger.textContent = open ? "×" : "☰";
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("ist-offen")) closeMenu(true);
    });
    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !burger.contains(event.target)) closeMenu(false);
    });
    if (window.matchMedia) {
      var desktop = window.matchMedia("(min-width: 901px)");
      if (desktop.addEventListener) desktop.addEventListener("change", function (event) {
        if (event.matches) closeMenu(false);
      });
    }
  }

  var targets = document.querySelectorAll("[data-zeigen]");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("ist-sichtbar");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -5% 0px" });
    targets.forEach(function (target) { observer.observe(target); });
  }

  var form = document.getElementById("anfrage");
  if (form) {
    var field = form.elements.namedItem("bereich");
    var requested = new URLSearchParams(location.search).get("bereich");
    // Compare option values directly; query parameters never become CSS selectors.
    if (field && requested) {
      Array.from(field.options).forEach(function (option) {
        if (option.value === requested) option.selected = true;
      });
    }
    var recipient = (form.dataset.empfaenger || "").trim();
    var status = document.getElementById("kontakt-status");
    var submit = form.querySelector('button[type="submit"]');
    if (submit) submit.disabled = !recipient;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!recipient) {
        if (status) status.textContent = "Die Kontaktmöglichkeit wird gerade eingerichtet. E-Mail-Anfragen sind noch nicht verfügbar.";
        return;
      }
      if (!form.reportValidity()) return;
      var fields = form.elements;
      var area = fields.namedItem("bereich");
      var areaText = area.options[area.selectedIndex].text;
      var body = "Name: " + fields.namedItem("name").value + "\n" +
        "E-Mail: " + fields.namedItem("email").value + "\n" +
        (fields.namedItem("telefon").value ? "Telefon: " + fields.namedItem("telefon").value + "\n" : "") +
        "Bereich: " + areaText + "\n\n" + fields.namedItem("nachricht").value;
      location.href = "mailto:" + encodeURIComponent(recipient) +
        "?subject=" + encodeURIComponent("Anfrage: " + areaText) + "&body=" + encodeURIComponent(body);
      if (status) status.textContent = "Die Nachricht ist für Ihr E-Mail-Programm vorbereitet. Bitte senden Sie sie dort ab. Falls sich kein Programm öffnet, nutzen Sie die angegebene E-Mail-Adresse.";
    });
  }
  var year = document.getElementById("jahr");
  if (year) year.textContent = new Date().getFullYear();
})();
