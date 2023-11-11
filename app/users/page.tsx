import React from "react";

interface User {
  id: number;
  name: string;
}

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // for not using the cache
  });
  const users: User[] = await res.json();
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
