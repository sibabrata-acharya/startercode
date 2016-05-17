# Node JS template application to connect Authentication microservice.

## Developer can leverage this application code, modify accordingly and can push to cloud foundry instance to ensure the changes in the application

### Template application files

File | Description
:-- | :-- 
bin/www | Configures the port and domain, starts the application on the available or given port.
app.js | This file does all the bootstrapping by require-ing all the controllers, models and middlewares.
routes/config | Contains the information about redirect URIs to be provided for microservice during authentication and logout
routes/index.js | Routes for homepage and userpage
package.json | All npm packages contain a file, this file holds various metadata relevant to the project.
manifest.ml | This file contains the information like app name, memory, instances, domain, host and services.


### Application Configuration

1. Create and configure Authentication microservice with the provider AppID and SecretID(Provided from eg.facebook after app configuration)
2. Bind the service to this sample application
3. Check for VCAP_SERVICES provided by Authentication microservice
4. Provide the provider_redirecturi to the provider app configuration. This will redirect from the provider(eg:facebook) to the microservice after authentication
5. send the redirect URIs during the authentication call and logout call. Refer config.js for the same
