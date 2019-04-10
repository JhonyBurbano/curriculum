import { useState, useEffect } from 'react';

const api = './src/containers/datos.json';

const useGetData = () => {
	const [mydata, setData] = useState([]);

	useEffect(() => {
		fetch(api) // Llamado a la api
		 .then(response => response.json()) // traer la respuesta y conventirla a un objeto json
		 .then(data => setData(data)) // Data que va pasar a esa funcion que va actualizar mi estado
	}, []);

	return mydata;
}

export default useGetData;