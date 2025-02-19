import { components } from './views/components.js';
import { logout } from './scripts/fs-login.js';

const changeView = (route) => {
  const main = document.querySelector('.views'); // este main es para las vistas
  components.community();
  switch (route) {
    case '#/community': main.innerHTML = '';
      components.community();
      break;
    case '#/profile': main.innerHTML = '';
      components.profile();
      break;
    case '#/logout': logout();
      break;
    default:
      break;
  }
  return main;
};
export { changeView };
