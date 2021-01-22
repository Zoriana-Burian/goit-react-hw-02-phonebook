import s from './ContactList.module.css';
const ContactList = ({ contacts, OnDeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
        <li className={s.contacts} key={id}>
            <p className={s.name}>{name}:</p>
                <p className={s.number}>{number}</p>
                <button type='button' onClick={() => OnDeleteContact(id)} className={s.button}>Delete</button>
        </li>
     ))}
    </ul>
)

export default ContactList;