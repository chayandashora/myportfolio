pipeline {
    agent any
    
    stages {        
        stage('Build Source Code') {
            steps {
                sh 'npm install && npm run build'
            }
        }
        
        stage('Deploy to GitHub Pages') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
}
