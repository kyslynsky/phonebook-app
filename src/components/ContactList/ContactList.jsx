import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const MotionContactItem = motion(ContactItem);

export const ContactList = ({ contacts }) => {
  let hasRenderedContactsRef = useRef(true);

  useEffect(() => {
    if (contacts) {
      hasRenderedContactsRef.current = false;
    }
  }, [contacts]);

  return (
    <List>
      <AnimatePresence>
        {contacts?.map((contact, i) => (
          <MotionContactItem
            key={contact.id}
            {...contact}
            variants={{
              hidden: i => ({
                opacity: 0,
                y: -50 * i,
              }),
              visible: i => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.05,
                },
              }),
              changed: {
                opacity: 0,
              },
            }}
            initial={hasRenderedContactsRef.current ? 'visible' : 'hidden'}
            animate="visible"
            exit="changed"
            custom={i}
          />
        ))}
      </AnimatePresence>
    </List>
  );
};
