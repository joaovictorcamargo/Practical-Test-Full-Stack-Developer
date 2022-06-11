import axios from "axios";
import { useState } from "react";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const createSession = async (user, password) => {
  return await api.post("/login", { user, password });
};
