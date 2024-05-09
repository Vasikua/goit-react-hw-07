import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps'
import { getContacts, getError, getIsLoading } from './redux/selectors';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import SearchBox from './components/searchBox/SearchBox';
import { Layout } from './components/layout/Layout';

export default function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
    const items = useSelector(getContacts)  
  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])
  
  return (
    <Layout>
      <h1 className='title'>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      {!error && isLoading && <p>Contacts is loading...</p>}
    {items.lenght>0 && <ContactList/>}
  </Layout>
  )                                   


}


