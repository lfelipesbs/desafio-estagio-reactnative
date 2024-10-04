import axios from 'axios';

import { getToken } from '../utils/storage';

const client = axios.create({ baseURL: 'https://445f-45-168-140-49.ngrok-free.app'});

const TokenInterceptor = async config => {
	const token = await getToken();

	if (token) {
		config.headers.Authorization = token;
	}

	return config;
};

client.interceptors.request.use(TokenInterceptor);

export default client;