import { fetchUsersProps } from "./ticketsModel";
import { fetchUsersNewProps } from "./ticketsModel";

export const fetchUsers = async (props: fetchUsersProps) => {
  const fetchData = await fetch("https://facebook.com", {
    method: "POST",
    body: JSON.stringify(props),
  });
  const data = await fetchData.json();
  return data;
};

export const fetchUsersNew = async (props: fetchUsersNewProps) => {
  const fetchData = await fetch("https://facebook.com/user", {
    method: "POST",
    body: JSON.stringify(props),
  });
  const data = await fetchData.json();
  return data;
};
