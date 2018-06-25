# jenkins login
user: nathan
pass: test

# jenkins run:
docker run \
  --rm \
  -u root \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkinsci/blueocean


  {
  "cod": 401,
  "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
}