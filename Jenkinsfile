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
      }
    }
    stage('Test') {
      parallel {
        stage('Test') {
          environment {
            CI = 'true'
          }
          steps {
            sh './jenkins/scripts/test.sh'
            sh 'echo "hello"'
          }
        }
        stage('error') {
          steps {
            sh 'curl http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=053386d4613a4db2f5750f9a17122805'
          }
        }
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