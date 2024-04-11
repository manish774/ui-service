import { fetchUsersProps } from "./ticketsNewModel";
import { fetchUsersNewProps } from "./ticketsNewModel";
import { getUsersProps } from "./ticketsNewModel";
import { getUsersNewProps } from "./ticketsNewModel";

export const fetchUsers = async (props: fetchUsersProps) => {
  const fetchData = await fetch(
    `https://api.github.com/users/${props?.name}/$${props?.userId}`,
    {
      method: "POST",
      body: JSON.stringify(props),
    },
  );
  const data = await fetchData.json();
  return data;
};

export const fetchUsersNew = async (props: fetchUsersNewProps) => {
  const fetchData = await fetch(`https://api.github.com/users/user`, {
    method: "POST",
    body: JSON.stringify(props),
  });
  const data = await fetchData.json();
  return data;
};

export const getUsers = async (props: getUsersProps) => {
  const fetchData = await fetch(`https://api.github.com/users`);
  const data = await fetchData.json();
  return data;
};

export const getUsersNew = async (props: getUsersNewProps) => {
  const fetchData = await fetch(`https://api.github.com/user/${props?.id}`);
  const data = await fetchData.json();
  return data;
};
