import { signupProps, loginProps } from "./UserModel";

export const signup = async (props: signupProps) => {
  const fetchData = await fetch(`https://localhost:4000/signup`, {
    method: "POST",
    body: JSON.stringify(props),
  });
  const data = await fetchData.json();
  return data;
};

export const login = async (props: loginProps) => {
  const fetchData = await fetch(`https://localhost:4000/login`, {
    method: "POST",
    body: JSON.stringify(props),
  });
  const data = await fetchData.json();
  return data;
};
