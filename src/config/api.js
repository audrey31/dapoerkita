import axios from 'axios';

export const dapoerAPI = axios.create({
	baseURL:
		'http://5967-125-166-13-9.ngrok.io',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Content-Type': 'application/json',
	},
});