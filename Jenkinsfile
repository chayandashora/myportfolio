pipeline {
    agent any
    
    stages {
        stage('Pull Source Code') {
            steps {
                sh 'git pull'
            }
        }
        
        stage('Build Source Code') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Deploy to GitHub Pages') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
}
