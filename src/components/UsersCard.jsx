const UsersCard = ({ user, handleClickUpdate, getModalDelete  }) => {
  return (
    <section className="bg-white/90 border-[1px] border-gray-700/50 rounded-md mx-6 p-4">
      <ul>
        <li className="font-bold line-clamp-1 text-xl border-b-[1px]">
          {user.first_name} {user.last_name}{" "}
        </li>
        <p className="text-black/40 mt-2 text-lg">EMAIL</p>
        <li className="mb-1 line-clamp-1 text-xl">{user.email}</li>
        <p className="text-black/40 mt-2 text-lg">BIRTHDAY</p>
        <li className="mb-2 border-b-[1px] text-xl">
          <i className="bx bx-gift"></i> {user.birthday}
        </li>
      </ul>
      <div className="flex justify-end">
        <button
          onClick={() => getModalDelete(user)}
          className="bg-red-700/80 border-[1px] py-1 text-white border-red-800 flex items-center px-2 text-[22px] ml-2 rounded-md"
        >
          <i className="bx bx-trash"></i>
        </button>
        <button
          onClick={() => handleClickUpdate(user)}
          className="bg-black/20 px-2 py-1 text-white border-[1px] border-black/40 text-[22px] flex items-center ml-2 rounded-md"
        >
          <i className="bx bxs-edit"></i>{" "}
        </button>
      </div>
    </section>
  );
};
export default UsersCard;

/*  */
