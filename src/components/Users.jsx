import UsersCard from "./UsersCard";
const Users = ({ users, handleClickUpdate, getModalDelete }) => {
  return (
    <section className="grid sm:grid-cols-[repeat(auto-fill,_350px)] grid-cols-[repeat(1,_350px)] xl:grid-cols-[repeat(3,_350px)] gap-4 my-2 justify-center">
      {users.map((user) => (
        <UsersCard
          key={user.id}
          user={user}
          handleClickUpdate={handleClickUpdate}
          getModalDelete={getModalDelete}
        />
      ))}
    </section>
  );
};
export default Users;
