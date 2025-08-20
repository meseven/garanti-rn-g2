import { User } from "../types/user";
import { api } from "./api";

export async function getUsers(): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return api("/users")
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function getUser(id: number): Promise<User> {
  return api(`/usersf/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message);
    });
}
