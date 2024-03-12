export type loginregisterInterface = {
  userName: string;
  userMail: string;
  password: string;
  role: string;
  isApproved: boolean;
};

export type loginInterface = {
  userMail: string;
  password: string;
};

export type loginregisterUpdateInterface = {
  userName?: string;
  userMail?: string;
  password?: string;
  role?: string;
  isApproved?: boolean;
};
