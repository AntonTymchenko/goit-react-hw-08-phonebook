import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth-operation";
import s from "./RegisterView.module.css";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("Please enter name, email or password");
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.main}>
      <h1 className={s.title}>Register page</h1>

      <form onSubmit={handleSubmit} className={s.login} autoComplete="off">
        <div className={s.input}>
          <div className={s.blockinput}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              placeholder="Name"
            />
          </div>

          <div className={s.blockinput}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          <div className={s.blockinput}>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
