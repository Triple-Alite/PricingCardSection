// Theme toggle -- remembers preference where storage is available,
// otherwise just applies for the current visit.
(function () {
  var toggle = document.getElementById("themeToggle");
  var root = document.documentElement;

  function apply(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      toggle.textContent = "Light mode";
      toggle.setAttribute("aria-pressed", "true");
    } else {
      root.removeAttribute("data-theme");
      toggle.textContent = "Dark mode";
      toggle.setAttribute("aria-pressed", "false");
    }
  }

  function getSaved() {
    try {
      return localStorage.getItem("pricing-cards-theme");
    } catch (e) {
      return null;
    }
  }

  function save(theme) {
    try {
      localStorage.setItem("pricing-cards-theme", theme);
    } catch (e) {
      /* storage unavailable -- theme just won't persist between visits */
    }
  }

  var saved = getSaved();
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(saved || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    save(next);
  });
})();

// Monthly / Annual billing toggle -- updates every plan's price and
// "billed annually" note at once.
(function () {
  var monthlyBtn = document.getElementById("monthlyBtn");
  var annualBtn = document.getElementById("annualBtn");
  var amounts = document.querySelectorAll(".amount");
  var notes = document.querySelectorAll(".billed-note");

  function setBilling(period) {
    var isAnnual = period === "annual";

    monthlyBtn.classList.toggle("active", !isAnnual);
    monthlyBtn.setAttribute("aria-pressed", String(!isAnnual));
    annualBtn.classList.toggle("active", isAnnual);
    annualBtn.setAttribute("aria-pressed", String(isAnnual));

    amounts.forEach(function (el) {
      var value = isAnnual ? el.getAttribute("data-annual") : el.getAttribute("data-monthly");
      el.textContent = "$" + value;
    });

    notes.forEach(function (el) {
      var text = isAnnual ? el.getAttribute("data-annual-note") : el.getAttribute("data-monthly-note");
      el.textContent = text || "";
    });
  }

  monthlyBtn.addEventListener("click", function () {
    setBilling("monthly");
  });
  annualBtn.addEventListener("click", function () {
    setBilling("annual");
  });
})();
