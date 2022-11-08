export const SERVER_API_DEV = 'http://localhost:8000';
export const SERVER_API_PROD = 'http://localhost:8000'; // TODO: use a real server

export function getPrefix() {
  if (process.env.NODE_ENV === 'production') {
    return SERVER_API_PROD;
  }
  return SERVER_API_DEV;
}
