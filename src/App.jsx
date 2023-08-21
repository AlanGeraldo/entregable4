import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Users from "./components/Users";
import ShowModal from "./components/showModal";
import ModalDelete from "./components/ModalDelete";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [userUpdate, setUserUpdate] = useState(null);

  const [modalDelete, setModalDelete] = useState(false);
  const [userModalDelete, setUserModalDelete] = useState(null);

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const getModalDelete = (user) => {
    setModalDelete(true);
    setUserModalDelete(user);
  };

  const handleClickCancelButtom = () => {
    setModalDelete(false);
    setUserModalDelete(null);
  };

  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          birthday: "",
        });
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (userModalDelete) => {
    axios
      .delete(BASE_URL + `users/${userModalDelete}/`)
      .then(() => {
        getAllUsers();
        setModalDelete(false);
        setUserModalDelete(null);
      })
      .catch((err) => console.log(err));
  };

  const userAccound = (newUserUpdated, reset) => {
    axios
      .patch(BASE_URL + `users/${userUpdate.id}/`, newUserUpdated)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          birthday: "",
        });
        setUserUpdate(null);
      })
      .catch((err) => console.log(err));
  };

  const handleClickOpenModal = () => {
    setIsShowModal(true);
  };

  const handleClickUpdate = (user) => {
    setIsShowModal(true);
    setUserUpdate(user);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="font-fira-code bg-black/20 min-h-screen pb-2">
      <header className="sm:flex grid justify-center gap-2 sm:justify-between p-4">
        <h1 className="text-2xl bg-white/70 rounded-[4px_10px_4px_10px] px-2 shadow-md mx-1 mt-2 font-bold flex gap-2 items-center">
          Users accounds<i className="bx bxs-user-account"></i>
        </h1>
        <button
          onClick={handleClickOpenModal}
          className="bg-blue-900 hover:bg-blue-800 text-lg px-3 py-1 mx-2 flex justify-center items-center mt-2 gap-1 text-white rounded-md"
        >
          <i className="bx bx-plus"></i> Create user
        </button>
      </header>
      <ShowModal
        isShowModal={isShowModal}
        createUser={createUser}
        userUpdate={userUpdate}
        userAccound={userAccound}
        setIsShowModal={setIsShowModal}
        setUserUpdate={setUserUpdate}
      />
      <Users
        handleClickUpdate={handleClickUpdate}
        users={users}
        getModalDelete={getModalDelete}
      />

      {modalDelete && (
        <ModalDelete
          userModalDelete={userModalDelete}
          handleClickCancelButtom={handleClickCancelButtom}
          deleteUser={deleteUser}
          Users={users}
        />
      )}
    </main>
  );
}

export default App;
