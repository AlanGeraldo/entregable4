import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ShowModal = ({
  isShowModal,
  createUser,
  userUpdate,
  userAccound,
  setIsShowModal,
  setUserUpdate
}) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    if (userUpdate) {
      userAccound(data, reset)
    }else {
      createUser(data, reset);
    }
  };

  const handleClickCloseModal = () => {
    setIsShowModal(false)
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    setUserUpdate(null)
  }

  useEffect(() => {
    if (userUpdate) {
      reset(userUpdate);
    }
  }, [userUpdate]);

  return (
    <section
      className={`fixed bg-black/25 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition[opacity_transform] duration-200 ${
        isShowModal
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="grid relative p-5 rounded-md gap-3 justify-center text-left bg-white"
      >
        <button
          type="button"
          onClick={handleClickCloseModal}
          className="absolute font-bold text-[20px]  right-1"
        >
          <i className="bx bx-x"></i>
        </button>
        <h2 className="text-2xl font-bold text-center">
          {" "}
          {userUpdate ? "Edit user" : "New user"}{" "}
        </h2>
        <div className="grid">
          <label htmlFor="first_name">First name</label>
          <input
            className="border-[2px] outline-none rounded-md p-1"
            id="first_name"
            type="text"
            {...register("first_name")}
          />
        </div>
        <div className="grid">
          <label htmlFor="last_name">Last name</label>
          <input
            className="border-[2px] outline-none rounded-md p-1"
            id="last_name"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="grid">
          <label htmlFor="birthday">Birthday</label>
          <input
            className="border-[2px] outline-none rounded-md p-1"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <div className="grid">
          <label htmlFor="email">Email</label>
          <input
            className="border-[2px] outline-none rounded-md p-1"
            id="email"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="grid">
          <label htmlFor="password">Password</label>
          <input
            className="border-[2px] outline-none rounded-md p-1"
            id="password"
            type="password"
            {...register("password")}
          />
        </div>
        <button className="bg-blue-900 hover:bg-blue-800 text-white p-2 cursor-pointer rounded-md">
          {userUpdate ? "Save changes" : "create new user"}
        </button>
      </form>
    </section>
  );
};
export default ShowModal;
