const SCRIPT_ID = "umami-script";
const SCRIPT_URL =
  import.meta.env.VITE_UMAMI_SCRIPT_URL || "https://cloud.umami.is/script.js";
const WEBSITE_ID =
  import.meta.env.VITE_UMAMI_WEBSITE_ID ||
  "ef43f497-45b2-49b9-bfd0-76961d24f1eb";

export function loadUmami() {
  if (!SCRIPT_URL || !WEBSITE_ID) {
    return;
  }

  if (document.getElementById(SCRIPT_ID)) {
    return;
  }

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.defer = true;
  script.src = SCRIPT_URL;
  script.dataset.websiteId = WEBSITE_ID;
  script.dataset.domains = "phillymetal.net,www.phillymetal.net";
  script.dataset.doNotTrack = "true";
  document.head.appendChild(script);
}
