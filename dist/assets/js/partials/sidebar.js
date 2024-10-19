// document.addEventListener("DOMContentLoaded", function () {
//   // Función para manejar el estado de los menús
//   function manageMenuState() {
//     // Selecciona todos los elementos que tienen submenús
//     const menuItems = document.querySelectorAll(".has-arrow");

//     menuItems.forEach((item) => {
//       const subMenu = item.nextElementSibling;

//       // Lee el estado del submenú en localStorage
//       const menuState = localStorage.getItem(item.innerText.trim());

//       // Aplica el estado guardado (abierto o cerrado)
//       if (menuState === "open") {
//         subMenu.style.display = "block";
//         item.classList.add("open");
//       } else {
//         subMenu.style.display = "none";
//         item.classList.remove("open");
//       }

//       // Agrega un evento de click para alternar el estado y guardarlo
//       item.addEventListener("click", function () {
//         const isOpen = subMenu.style.display === "block";

//         if (isOpen) {
//           subMenu.style.display = "none";
//           localStorage.setItem(item.innerText.trim(), "closed");
//         } else {
//           subMenu.style.display = "block";
//           localStorage.setItem(item.innerText.trim(), "open");
//         }
//       });
//     });
//   }

//   // Llama a la función cuando la página cargue
//   manageMenuState();
// });
