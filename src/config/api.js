// import axios from 'axios';

// const dapoerAPI = axios.create({
// 	baseURL:
// 		'https://46ef-125-166-13-9.ngrok.io/',
// 	headers: {
// 		'Access-Control-Allow-Origin': '*',
// 		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
// 		'Content-Type': 'application/json',
// 	},
// });

// export default dapoerAPI;
import axios from "axios";

const dapoerAPI = axios.create({
  baseURL: "https://2f9d-125-166-13-9.ngrok.io/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  },
});

export default dapoerAPI;
// import axios from 'axios';

// export default axios.create({
//   baseURL:"https://f191-125-166-13-9.ngrok.io/",
//   header:{
//       "Access-Control-Allow-Origin" : "*",
// 	  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
// 		'Content-Type': 'application/json'
//   }
// })
