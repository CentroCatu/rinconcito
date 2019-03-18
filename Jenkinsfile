pipeline {
  agent any
  environment {
      PROJECT = 'term-collection-engine'
  }
  stages {
    stage ('Initialize') {
      steps {
        sh '''
          echo "PATH = ${PATH}"
          echo "JAVA_HOME = ${JAVA_HOME}"
          echo "WORKSPACE = ${WORKSPACE}"
        '''
      }
    }

    stage ('Deploy Branch?') {
      steps {
        script {
          try {
            timeout(time: 30, unit: 'SECONDS') {
              env.DEPLOY_TO_DEV = input message: 'Deploy branch',
                parameters: [choice(name: 'Do you want to deploy this branch?', defaultValue: 'no',  choices: 'no\nyes', description: 'Choose "yes" if you want to deploy this build')]
            }
          } catch(err) {
            echo "using default value"
          }
        }
      }
    }

    stage ('Deploying to Jenkins') {
      when {
        environment name: 'DEPLOY_TO_DEV', value: 'yes'
      }
      steps {
           sh '''
             cp -rf $WORKSPACE/* /var/www/html/rinconcito
            '''
      }
    }
    
    stage ('Cleanup') {
      steps {
        deleteDir() /* clean up our workspace */
      }
    }
  }
}

