import  axios from "axios";

function generateJoke(){
	const config = {
		headers:{
			Accept:'application/json'
		}
	}
	const url2go = 'https://icanhazdadjoke.com'
	axios.get(url2go, config)
		.then(res =>{
			document.getElementById('joke').innerHTML = res.data.joke
		})
	
}

export default generateJoke;
