import axios from "axios";
import Cookies from "js-cookie";
import API_URL from "./api";

export function singup(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: generateUserName(data.name),
    avatar:
      "https://uploaddeimagens.com.br/images/004/692/619/original/icon.png?1702777124",
  };
  const response = axios.post(`${API_URL}/pessoajuridica/create`, body);
  return response;
}

function generateUserName(name) {
  const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}

export function signin(data) {
  const response = axios.post(`${API_URL}/auth/authpj`, data);
  return response;
}

export function userLogged() {
  const response = axios.get(`${API_URL}/pessoajuridica/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export async function userFindById() {
  try {
    const response = await axios.get(`${API_URL}/pessoajuridica/findById`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro em userFindById:", error);
    throw error;
  }
}

export async function userUpdate(id, userData) {
  try {
    const response = await axios.patch(
      `${API_URL}/pessoajuridica/update/${id}`,
      userData, // Corpo da requisição
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro em userUpdate:", error);
    throw error;
  }
}

