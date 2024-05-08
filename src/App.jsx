import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import{fetchContacts} from './redux/contactsOps'
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import SearchBox from './components/searchBox/SearchBox';
export default function App() {

  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
      
  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])
  
  return (
    <div>
      <h1 className='title'>Phonebook</h1>
      {isLoading && <p> Loading contacts...</p>}
      {error && <p>{ error}</p>}
      <ContactForm/>
      <SearchBox />
    {items.lenght>0 && <ContactList data = "JSON.stringify(items, null, 2)"/>}
                                            
    </div>
  );
}


