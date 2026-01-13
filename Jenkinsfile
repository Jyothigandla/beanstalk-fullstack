pipeline {
    agent any

    environment {
        EBCLI = "/opt/ebcli/venv/bin/eb"
    }

    stages {

        stage('Clone Repo') {
            steps {
                checkout scm
            }
        }

        stage('Deploy Backend') {
            steps {
                sh '''
                cd backend
                $EBCLI use fullstack-prod
                $EBCLI deploy
                '''
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                cd frontend
                $EBCLI use frontend-prod
                $EBCLI deploy
                '''
            }
        }
    }
}
