export const getToken = (token: string) => {
  try {
    return localStorage.getItem(token);
  } catch (err) {
    return null;
  }
}