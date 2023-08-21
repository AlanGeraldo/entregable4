const ModalDelete = ({
  userModalDelete,
  handleClickCancelButtom,
  deleteUser,
}) => {
  return (
    <section className="fixed bg-white/0 top-0 bottom-0 mx-2 left-0 right-0 flex justify-center items-center">
      <article className="bg-white relative rounded-md grid gap-4 border-[1px] border-gray-700/40 p-5 ">
        <h2 className="text-lg mx-1 font-bold">
          You want to delete this user?
        </h2>
        <h1 className="text-center text-xl font-bold">
          {userModalDelete?.first_name} {userModalDelete.last_name}
        </h1>
        <div className="flex justify-center gap-3 m-2">
          <button
            className="px-6 py-1 rounded-sm cursor-pointer border-[1px] border-blue-900/90 text-white bg-blue-900 hover:bg-blue-800"
            onClick={() => deleteUser(userModalDelete.id)}
          >
            Accept
          </button>
          <button
            className="absolute top-0 right-1 text-xl cursor-pointer"
            onClick={() => handleClickCancelButtom()}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
      </article>
    </section>
  );
};
export default ModalDelete;
