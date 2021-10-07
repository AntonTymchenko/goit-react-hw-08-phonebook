import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth-operation";
import s from "./LoginView.module.css";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    if (!email || !password) {
      alert("Enter email or password");
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.main}>
      <div className={s.ribbon}></div>
      <div className={s.login}>
        <h1 className={s.title}>Login page</h1>

        <form onSubmit={handleSubmit} action="login" autoComplete="off">
          <div className={s.input}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
