export type User = {
  id: string;
  username: string;
};

export type Token = {
  accessToken: string;
  refreshToken?: string;
};