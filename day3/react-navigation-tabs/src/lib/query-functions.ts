import { User } from "../types/user";
import { api } from "./api";

export async function getUsers(): Promise<User[]> {
  const { data } = await api("/users");
  return data;
}

export async function getUser(id: number): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { data } = await api(`/users/${id}`);
  return data;
}
