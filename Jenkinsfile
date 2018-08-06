pipeline {
  agent {
    docker {
      args '-p 8077:8077'
      image 'node'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
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
        sh 'npm start'
        input 'Finished using the web site? (Click "Proceed" to continue)'
      }
    }
  }
  environment {
    npm_config_cache = 'npm-cache'
  }
}