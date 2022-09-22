export const overlayAnimation = {
  initial: { opacity: 0.2 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'circOut' } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'circIn' } },
};

export const modalAnimation = {
  initial: { y: '50%' },
  animate: { y: 0, transition: { duration: 0.2, ease: 'circOut' } },
  exit: { y: '50%', transition: { duration: 0.2, ease: 'circIn' } },
};
