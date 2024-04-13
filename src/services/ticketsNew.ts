import { fetchUsersProps } from "./ticketsNewModel";

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
