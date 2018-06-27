pipeline {
  agent none
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
        bat './jenkins/scripts/test.sh'
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