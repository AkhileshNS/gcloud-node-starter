# README

Couple of Important points to keep in mind when deploying NodeJS to App Engine via Github Actions:

1. You will need a service account with the permissions: App Engine Admin, Cloud Build Service Account and Storage Admin

2. Make sure that the App Engine Admin Api is enabled otherwise this will not work

And more importantly when deploying NodeJS to App Engine, keep in mind you have two ways of doing and each have their own requirements and gotchas:-

1. **Standard Environment**: This is the default environment used by GCP and in this environment, when defining your runtime, you will need to mention the version as well:-

	```yml
	runtime: nodejs10
	```

	Additionally, in the standard environment, any "pre" or "post" scripts you specify in your package.json will not work. And you application to listen on the port passed by the environment variable PORT (which you can access using `process.env.PORT`). Also keep in mind that standard deployments are relatively quick taking a little over a minute to deploy on github actions

2. **Flexible Environment**: To specify that you want to use this environment, add the `env: flex` property in your app.yml file. In this environment, when defining the runtime, you shouldn't specify the version:-

	```yml
	runtime: nodejs
	```

	In the flexible environment, "pre" amd "post" scripts do get executed and by default, GCP will look for your application in ports 8080 - 8084. But keep in mind that flexible deployments generally take time, almost 7 minutes in Github Actions.

There are some other advantages that the flexible environment gives over the standard environment including but not limited to being able to run a server in a language of your choice, so long as the server is listening on one of the ports 8080 - 8084. This is accomplished by having the servers run in docker containers. For more information, check out [this article](https://www.quora.com/What-is-the-difference-between-the-standard-and-the-flexible-environments-for-the-Google-App-Engine-GAE)
