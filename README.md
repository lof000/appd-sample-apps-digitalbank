# appd-sample-apps-digitalbank

Digital Bank is a sample application that was developed for exploratory purposes to examine development frameworks and techniques. The application is an example online digital banking application with integrations into other services.

Forked from: digisic.github.io/digital-bank/

## Getting Started

## Building
...

## Running - Docker Compose

## Running - K8s using helm


## Packaging

* To create a deployment package, execute "mvn clean package -DbuildNumber={###}"
* To create a new Docker image, update the [Dockerfile](Dockerfile) with the latest build number and then execute "docker build -t {imageName}:{imageTag} ."

## Interfaces

* Web Interface @ http://{hostname}:{port}/bank
  * Sample user data is created when the application is started. User credentials for these users are as follows:
    * jsmith@demo.io/Demo123!
    * nsmith@demo.io/Demo123!
* Swagger UI @ http://{hostname}:{port}/bank/swagger-ui.html
  * The API Admin user credentials are as follows:
    * admin@demo.io/Demo123!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
