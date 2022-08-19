import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from 'redux/phonebook/contactsSlice';
import { EditContactForm } from 'components/EditContactForm';

const EditContactModal = () => {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const { data: contact } = useGetContactByIdQuery(contactId);
  const [updateContact, { isLoading }] = useUpdateContactMutation();

  const closeModal = () => navigate('/phonebook');

  const hanldeUpdateContact = async inputs => {
    try {
      await updateContact({ id: contactId, ...inputs });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <button type="button" onClick={closeModal}>
          X
        </button>
        {contact && (
          <EditContactForm
            initValues={{ name: contact.name, phone: contact.phone }}
            text={'Save'}
            onSubmit={hanldeUpdateContact}
            disable={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default EditContactModal;
