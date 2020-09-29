let API_URL;
let APP_URL;
var window = global.window;
const hostname = window && window.location && window.location.hostname;

if (hostname === 'cforcode.github.io' || hostname === 'nerchuko.in') {
  API_URL = 'https://nerchuko.tk';
  APP_URL = `https://${hostname}`;
} else {
  API_URL = process.env.REACT_APP_BACKEND_HOST || 'https://nerchuko.tk';
  APP_URL = 'http://localhost:3000';
}

export const API_BASE_URL = `${API_URL}`;
export const APP_BASE_URL = `${APP_URL}`;