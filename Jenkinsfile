pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'npm install'
        bat 'npm install forever -g'
      }
    }
    stage('Test') {
      environment {
        CI = 'true'
      }
      steps {
        bat '"C:\\Program Files\\SmartBear\\ReadyAPI-2.4.0\\bin\\testrunner.bat" -r -a -j -f${WORKSPACE} "-RJUnit-Style HTML Report" -FXML "-EDefault environment" %WORKSPACE%\\jenkins\\testsuite\\OpenWeatherAPI.xml'
      }
    }
    stage('Deliver') {
      steps {
        bat 'npm start'
        bat 'forever list'
        input 'Finished using the web site? (Click "Proceed" to continue)'
        bat 'forever stopall'
      }
    }
  }
}