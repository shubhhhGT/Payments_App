import React, { useEffect, useState } from "react";
import Button from "./Button";
import { getCurrentUser, getUsers } from "../services/operations/userApi";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tokenAtom, userAtom } from "../store/atoms";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const setCurrentUser = useSetRecoilState(userAtom);
  const token = useRecoilValue(tokenAtom);

  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await getUsers(token, filter);
      setUsers(userList);
    };
    fetchUsers();

    const fetchCurrentUser = async () => {
      const userDetails = await getCurrentUser(token);
      setCurrentUser({
        firstname: userDetails.firstname,
        lastname: userDetails.lastname,
      });
    };
    fetchCurrentUser();
  }, [filter, token]);

  return (
    <div className="px-4 sm:px-14">
      <div className="font-bold text-lg ">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="Search users..."
          className="border rounded border-slate-200 px-2 py-1 w-full"
        />
      </div>
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between">
      <div className="flex justify-center items-center">
        <div className="rounded-full h-10 w-10 flex justify-center items-center bg-slate-300">
          <img
            src={`https://api.dicebear.com/9.x/initials/svg?seed=${user.firstname}`}
            className="h-[90%] w-[90%] rounded-full"
          />
        </div>
        <div className="font-medium text-sm ml-2">
          {user.firstname} {user.lastname}
        </div>
      </div>

      <div>
        <Button
          label={"Send Money"}
          onClick={(e) =>
            navigate(
              "/send?id=" +
                user._id +
                "&name=" +
                user.firstname +
                "_" +
                user.lastname
            )
          }
        />
      </div>
    </div>
  );
}
