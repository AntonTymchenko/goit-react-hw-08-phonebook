import React from "react";
import s from "./ContactsLitItem.module.css";
import {
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineArchive,
} from "react-icons/hi";
import { useDispatch } from "react-redux";
import contactOperations from "../../redux/phone-operations";

function ContactsListItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li key={id} className={s.itemOflistOfContacts}>
      <p className={s.info}>
        <span className={s.icon}>
          <HiOutlineUser />
        </span>
        {name}
      </p>
      <p className={s.info}>
        <span className={s.icon}>
          <HiOutlinePhone />
        </span>
        {number}
      </p>
      <button
        type="button"
        onClick={() => dispatch(contactOperations.deleteContact(id))}
        className={s.button}
      >
        <span className={s.icon}>
          <HiOutlineArchive />
        </span>
        Delete
      </button>
    </li>
  );
}

export { ContactsListItem };
