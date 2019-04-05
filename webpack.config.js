const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Creación de modulo
module.exports = {
	// Entrada que permite colocar cual es el elemento principal a tener encuenta o escuchar
	entry: './src/index.js',
	// Donde queremos empujar nuestro proyecto
	output: {
		// Donde voy a empujar o guardar este elemento
		path: path.resolve(__dirname, 'dist'), // crea la carpeta dist
		// Como se va contruir
		filename: 'bundle.js',
	},
	// Saber con que archivos se van a tratabajar - Extensiones
	resolve: {
		extensions: ['.js', '.jsx']
	},
	// modulo que vamos a tener las reglas de nuestro proyecto
	module: {
		rules: [
		// Primer regla: Nos permite identifiacr los archivos js y jsx 
			{
				test: /\.(js|jsx)$/,
				// Escluir la carpeta de node_modules, ya que esta puede tener archivos
				// js o jsx que nos pueden dar conflicto
				exclude: /node_modules/,
				//Utilizar loader
				use: {
					loader: "babel-loader"
				}
			},
		// Segunda regla: Permite identificar los archivos html
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader"
				}]
			}
		]
	},
	//Añadir plugins
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			flie: "./index.html"
		})
	]
}