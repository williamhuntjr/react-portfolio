pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /home/williamhuntjr/public_html"
                sh "sudo cp -r ${WORKSPACE}/build /home/williamhuntjr/public_html"
                sh "sudo chown -R williamhuntjr:williamhuntjr /home/williamhuntjr/public_html"
            }
        }
    }
}
