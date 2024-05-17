import Contact from '../contact/Contact';
import { selectFilteredContacts } from "../../redux/selectors"
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
    console.log(contacts);
  return (
        <ul className={css.list}>
            {contacts.map(user =>( 
                <li className={css.item} key={user.id}>
                    < Contact data={user}/>
                </li>
            ))
            }
        </ul>
    )
    
}