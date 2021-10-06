import React from "react";
import s from "./Filter.module.css";
import { changeFilter } from "../../redux/phone-actions";
import { useDispatch } from "react-redux";
import Container from "../Container/Container";
import { Button } from "../Button/Button";
import ContactsList from "../ContactsList/ContactsList";
import { Link } from "react-router-dom";

const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = (e) => dispatch(changeFilter(e.currentTarget.value));
  return (
    <Container>
      <h2 className={s.contactTitle}>Contacts</h2>

      <label className={s.filterLabel}>
        Find contact by the name
        <input
          type="text"
          onChange={onFilterChange}
          className={s.inputFilter}
          placeholder="Who are you looking for ?"
        />
      </label>
      <Link to="/form">
        <Button title="Add contact" />
      </Link>
      <ContactsList />
    </Container>
  );
};

export default Filter;
