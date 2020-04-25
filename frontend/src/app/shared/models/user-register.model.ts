export interface UserRegisterModel {
  name: string;
  email: string;
  password: string | number;
}

export interface UserRegisterReturnModel {
  user: {
    id: number;
    email: string;
    name: string;
  };
}
