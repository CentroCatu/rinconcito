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

    stage ('Deploy Branch to DEV?') {
      steps {
        script {
          try {
            timeout(time: 30, unit: 'SECONDS') {
              env.DEPLOY_TO_DEV = input message: 'Deploy branch to DEV',
                parameters: [choice(name: 'Do you want to deploy this branch to DEV?', defaultValue: 'no',  choices: 'no\nyes', description: 'Choose "yes" if you want to deploy this build')]
            }
          } catch(err) {
            echo "using default value"
          }
        }
      }
    }

    stage ('Deploying in DEV') {
      when {
        environment name: 'DEPLOY_TO_DEV', value: 'yes'
      }
      steps {
           sh '''
             cp -rf $WORKSPACE/* /var/www/html/rinconcito/dev
            '''
      }
    }

    stage ('Deploy Branch to QA?') {
      when {
        branch 'master'
      }
      steps {
        script {
          try {
            timeout(time: 30, unit: 'SECONDS') {
              env.DEPLOY_TO_QA = input message: 'Deploy branch to QA',
                parameters: [choice(name: 'Do you want to deploy this branch to QA?', defaultValue: 'no',  choices: 'no\nyes', description: 'Choose "yes" if you want to deploy this build')]
            }
          } catch(err) {
            echo "using default value"
          }
        }
      }
    }
    stage ('Deploying in QA') {
      when {
        environment name: 'DEPLOY_TO_QA', value: 'yes'
      }
      steps {
           sh '''
              cp -rf $WORKSPACE/* /var/www/html/rinconcito/qa/
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

