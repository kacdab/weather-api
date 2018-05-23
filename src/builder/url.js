const API_HOST = 'http://192.168.43.248';
const API_PORT = 3030;

module.exports = function urlBuilder(path) {
  return `${API_HOST}:${API_PORT}/${path}`;
};
