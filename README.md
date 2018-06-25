# Swaggerhub + Jenkins

This repository was built as an example of Smartbear's Swaggerhub platform being used to maintain an independantly hosted documentation service. Jenkins pipeline is running to maintain and pull in changes as they happen (Swaggerhub pushes all updates into the /api/swagger.yaml)

docker run \
  --rm \
  -u root \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkinsci/blueocean
