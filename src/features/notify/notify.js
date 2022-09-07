import { Notify } from 'notiflix';

export const warningNotice = message => {
  Notify.warning(message, {
    clickToClose: true,
    distance: '7vw',
    fontFamily: 'Advent Pro',
    fontSize: '1rem',
  });
};

export const successNotice = message => {
  Notify.success(message, {
    clickToClose: true,
    distance: '7vw',
    fontFamily: 'Advent Pro',
    fontSize: '1rem',
  });
};

export const failureNotice = message => {
  Notify.failure(message, {
    clickToClose: true,
    distance: '7vw',
    fontFamily: 'Advent Pro',
    fontSize: '1rem',
  });
};