pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'bash npm install'
      }
    }
    stage('Test') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'echo \'test\''
      }
    }
    stage('Deliver') {
      steps {
        sh 'bash npm start'
        input 'Finished using the web site? (Click "Proceed" to continue)'
      }
    }
  }
}