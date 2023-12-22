aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 315730648862.dkr.ecr.us-east-1.amazonaws.com
docker build -t nyapi -f Dockerfile .
docker tag nyapi:latest 315730648862.dkr.ecr.us-east-1.amazonaws.com/nyapi:latest
docker push 315730648862.dkr.ecr.us-east-1.amazonaws.com/nyapi:latest

