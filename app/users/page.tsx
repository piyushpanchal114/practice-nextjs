import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const Users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h2>Users</h2>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default Users;
