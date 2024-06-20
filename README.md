## URL
1) To connect to server: /server1
2) To send message: /app/message
3) To subscribe so that we can receive messages /topic/return-to

### To Host this on EC2-:
1) Pull this repository from github (github is already installed in EC2)
2) Run the shell script in yur EC2 instance , it will download Docker and Docker compose
3) Open HTTP, HTTPS, port 8080 of your EC2 and then run "sudo docker compose up".

