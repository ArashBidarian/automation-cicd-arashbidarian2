pipeline {
    /* insert Declarative Pipeline here */
    agent any
        stages {
        stage('Example Build') {
            steps {
                sh '''
                    echo 'Application deployed successfully!
                '''
            }
        }
        stage('Frontend tests') {
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
        
        stage('Backend tests') {
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
        
        stage('Performance tests') {
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
        
    }
}