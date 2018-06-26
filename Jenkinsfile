pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 8077:8077'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh '''
npm install forever -g'''
        sh './jenkins/scripts/deliver.sh'
      }
    }
    stage('Test') {
      environment {
        CI = 'true'
      }
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }
    stage('Deliver') {
      steps {
        input 'Finished using the web site? (Click "Proceed" to continue)'
        sh './jenkins/scripts/kill.sh'
      }
    }
  }
}