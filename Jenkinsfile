pipeline {
    agent any
    
    stages {
        stage('Pull Source Code') {
            steps {
                git 'https://github.com/chayandashora/myportfolio.git'
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
