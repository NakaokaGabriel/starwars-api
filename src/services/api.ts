import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://swapi-trybe.herokuapp.com/api'
});
