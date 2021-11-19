module.exports = {
	apps : [{
		name: "gambit",
		script: "./src/app.js",
		instances: "max",
		node_args : '-r dotenv/config',
		env: {
			NODE_ENV: "development",
		},
		env_production: {
			NODE_ENV: "production",
		}
	}]
}