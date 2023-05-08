# Create Docker image
# docker build -t <username>/<imagename>:<tag> <folder>
# -t you specify your image name
# instead of folder you could use . that means current folder
# eg:
# docker build -t farofapereira/nginx-com-nano:latest .

#FROM ubuntu:latest

# WORKDIR /app

# RUN apt-get update && \
#     apt-get install nano -y

# COPY html /usr/share/nginx/html

# CMD pode ser substituido pelo parametro que vc mandar
# eg.
# docker run --rm farofapereira/hello echo hi
# if instead of echo oi, i use bash... It won't run the echo "Hello World" and will run bash instead
# CMD ["echo", "Hello World"]
# if don't want to be replaced use ENTRYPOINT, this is always fixed
# ENTRYPOINT ["echo", "Hello "]
# CMD ["World"]
# docker run --rm farofapereira/hello 
# will show Hello World
# docker run --rm farofapereira/hello Rogerio
# will show hello Rogerio


FROM nginx:latest

COPY html /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]

# to publish image
# docker build -t farofapereira/nginx-fullcycle .
# docker push farofapereira/nginx-fullcycle