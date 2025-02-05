import { Ellipsis } from "../Icons/Ellipsis";
import { getAppointments } from "./Appointments";
import "./AppointmentMenu.css";
import { Modal } from "../Modal/Modal";

const modal = new Modal();

export function addAppointmentMenu() {
  const appointments = getAppointments();
  appointments.map((appt) => {
    appt.appendChild(appointmentMenu());
  });
}

export function appointmentMenu() {
  const container = document.createElement("div");
  container.classList.add("appointment-menu-container");

  const menuIcon = Ellipsis();
  container.appendChild(menuIcon);

  const menu = document.createElement("div");
  container.appendChild(menu);
  menu.classList.add("appointment-menu");

  menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("show");
  });

  const menuItems = appointmentMenuItems();
  menu.appendChild(menuItems);

  return container;
}

export function appointmentMenuItems() {
  const items = [
    {
      title: "Portal Page",
      href: "#",
    },
    {
      title: "Go To Appointment (Cortico)",
      href: "#",
    },
    {
      title: "Contact Patient",
      onClick: getPatientContactInfo,
    },
  ];

  const list = document.createElement("ul");
  items.map((item) => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    listItem.appendChild(anchor);
    anchor.textContent = item.title;

    if (item.href) {
      anchor.setAttribute("href", item.href);
    }

    if (item.onClick) {
      anchor.addEventListener("click", (e) => {
        item.onClick(e);
      });
    }

    list.appendChild(listItem);
  });
  return list;
}

export function getPatientContactInfo(e) {
  console.log("Hello World", e.target.closest("td.appt"));
}
