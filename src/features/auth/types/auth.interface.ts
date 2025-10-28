export interface IAuth {
  data: IAuthData;
  token?: string;
}

export interface IForm {
  name: string;
  email: string;
  password: string;
}

export interface IAuthData {
  appointment: [];
  email: string;
  id: string;
  name: string;
}
