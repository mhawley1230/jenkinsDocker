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
        bat '"C:\\Program Files\\SmartBear\\ReadyAPI-2.4.0\\bin\\testrunner.bat" -r -a -j -f${WORKSPACE} "-RJUnit-Style HTML Report" -FXML "-EDefault environment" C:\\Users\\temil.sanchez\\.jenkins\\workspace\\insDocker_add_jenkins_tests-MXOXKCXHDCUFWPDYERGSSWZN5TSQ23W67WZASH5V6OFQ3UQGTPRQ\\jenkins\\testsuite\\OpenWeatherAPI.xml'
      }
    }
    stage('Deliver') {
      steps {
        sh './jenkins/scripts/deliver.sh'
        input 'Finished using the web site? (Click "Proceed" to continue)'
        sh './jenkins/scripts/kill.sh'
      }
    }
  }
}