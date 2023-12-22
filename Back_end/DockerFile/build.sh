aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 315730648862.dkr.ecr.us-east-1.amazonaws.com
docker build -t sprint-3 -f Dockerfile .
docker tag sprint-3:latest 315730648862.dkr.ecr.us-east-1.amazonaws.com/sprint-3:latest
docker push 315730648862.dkr.ecr.us-east-1.amazonaws.com/sprint-3:latest
