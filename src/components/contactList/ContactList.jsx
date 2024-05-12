import Contact from '../contact/Contact';
import {selectFilteredContacts}  from "../../redux/selectors"
import css from './ContactList.module.css';
export default function ContactList() {
  return (
        <ul className={css.list}>
            {selectFilteredContacts.map(user =>( 
                <li className={css.item} key={user.id}>
                    < Contact data={user}/>
                </li>
            ))
            }
        </ul>
    )
    
}