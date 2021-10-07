import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth-operation";
import authSelectors from "../../redux/auth-selectors";
import defaultAvatar from "./user.png";
import { useHistory } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  const history = useHistory();

  return (
    <>
      {name && (
        <div style={styles.container}>
          <img src={avatar} alt="" width="32" style={styles.avatar} />
          <span style={styles.name}>Welcome {name}</span>
          <button
            type="button"
            onClick={() => {
              history.push("/");
              dispatch(authOperations.logOut());
            }}
          >
            Exit
          </button>
        </div>
      )}
    </>
  );
}
