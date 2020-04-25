import { UserSessionModel } from '../models/user-session.model';

export const checkUserLoginOnStorage = (): null | UserSessionModel => {
  const userLoginInfo: UserSessionModel = JSON.parse(
    localStorage.getItem('userLoginResponseInfo')
  );

  if (!userLoginInfo) return null;

  return userLoginInfo;
};
