import { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import s from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import contactOperations from "../../redux/phone-operations";
import { useHistory } from "react-router-dom";
import { changeFilter } from "../../redux/phone-actions";
import { getContacts } from "../../redux/contacts-selectors";

function ContactForm() {
  const contacts = useSelector((state) => getContacts(state));
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const history = useHistory();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  function inputGetValue(e) {
    const item = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (item) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  }

  function formHandleSubmit(e) {
    e.preventDefault();

    if (contacts.some((item) => item.name === name)) {
      alert(`${name} is already in contacts!`);
      return;
    }
    dispatch(contactOperations.addContact(name, number));
    dispatch(changeFilter(""));
    history.push("/contacts");
    clearState();
  }
  const clearState = () => {
    setNumber("");
    setName("");
  };
  return (
    <form onSubmit={formHandleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.inputName}
          onChange={inputGetValue}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Ivan Ivanov"
        />
      </label>
      <label>
        Number
        <input
          className={s.inputFrom}
          onChange={inputGetValue}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="098 111 22 33"
        />
        <Button title="Add contact" />
      </label>
    </form>
  );
}

export default ContactForm;
