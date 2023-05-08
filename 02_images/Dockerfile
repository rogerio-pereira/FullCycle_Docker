# Create Docker image
# docker build -t <username>/<imagename>:<tag> <folder>
# -t you specify your image name
# instead of folder you could use . that means current folder
# eg:
# docker build -t farofapereira/nginx-com-nano:latest .

FROM nginx:latest

WORKDIR /app

RUN apt-get update && \
    apt-get install nano -y

COPY html /usr/share/nginx/html
