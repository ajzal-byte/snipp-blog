import Image from "next/image";
import { getUsers } from "../../lib/data";
import styles from "./adminUsers.module.css";
import { deleteUser } from "../../lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.profilePic || "/noavatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.userTitle}>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="userId" value={user.id} />
            <button className={styles.deleteButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
