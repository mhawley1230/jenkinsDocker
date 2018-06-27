pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '''-ti
-p 8077:8077'''
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
        stage('API Test') {
          agent {
            docker {
              image 'nate01776/soapuipro'
              args '''--privileged \\
-p 8090:8090'''
            }

          }
          steps {
            sh 'ls'
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