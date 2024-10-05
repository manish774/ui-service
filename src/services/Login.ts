import { signupProps } from "./LoginModel";

export const signup = async (props: signupProps) => {
  const fetchData = await fetch(`https://localhost:3000/signup`, {
    method: "POST",
    body: JSON.stringify(props),
  });
  const data = await fetchData.json();
  return data;
};
