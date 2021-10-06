import axios from "axios";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from "./phone-actions";
import { v4 as uuidv4 } from "uuid";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError());
  }
};

const addContact = (name, number) => (dispatch) => {
  const contact = {
    id: uuidv4(),
    name,
    number,
  };
  dispatch(addContactsRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSuccess(contactId)))
    .catch((error) => dispatch(deleteContactsError(error)));
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  deleteContact,
  addContact,
  fetchContacts,
};
