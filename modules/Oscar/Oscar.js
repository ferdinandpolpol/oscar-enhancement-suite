import { debounce } from "../Utils/Utils";

export class Oscar {
  hostname = null;
  constructor(hostname = window.location.hostname) {
    this.hostname = hostname;
  }

  isJuno() {
    const isJunoHost = this.hostname.indexOf(".junoemr.com") !== -1;
    const containsJunoLink =
      document.querySelectorAll("a#helpLink").length > 0 &&
      document
        .querySelectorAll("a#helpLink")[0]
        .outerHTML.indexOf("help.junoemr.com") !== -1;

    return isJunoHost || containsJunoLink;
  }

  // disable sticky headers on WELL Oscar (KAI or Oscar Go), because they have
  // implemented their own sticky headers
  isOscarGoHost() {
    return this.hostname.indexOf(".oscargo.com") !== -1;
  }

  isKaiOscarHost() {
    return this.hostname.indexOf(".kai-oscar.com") !== -1;
  }

  // some clinics use a local network IP address to access oscar inside the clinic
  // in these cases, we can't rely on the hostname but have to look for specific elements instead
  // this may be less reliable, so we still prefer the hostname check
  containsKaiBar() {
    return document.querySelectorAll("div.KaiBar").length !== 0;
  }

  containsOscarGoOceanScript() {
    return (
      document.querySelectorAll(
        'script[src="/oscar/js/custom/ocean/global.js"]'
      ).length !== 0
    );
  }

  // sticky headers for doctor schedule page
  updateDoctorHeadings = debounce(function (e) {
    const ifv = document.querySelectorAll(
      "tbody>tr:first-child>td.infirmaryView"
    );
    if (window.scrollY > 50) {
      ifv.forEach(function (view) {
        view.style.position = "sticky";
        view.style.marginLeft = "unset";

        if (isJuno()) {
          // for juno, position the sticky doctor headers under the sticky top menu
          view.style.top = "18px";
        }
      });
    } else {
      ifv.forEach(function (view) {
        view.style.position = "static";
      });
    }
  }, 50);
}
