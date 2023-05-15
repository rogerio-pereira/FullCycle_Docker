FROM nginx:latest

COPY html /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]


#TO run build both images, starting from root folder
#docker build -t farofapereira/full_cycle_laravel:prod 05_otimizacao_multistage_building/ -f 05_otimizacao_multistage_building/Dockerfile.prod
#docker build -t farofapereira/full_cycle_nginx:prod 05_otimizacao_nginx -f 05_otimizacao_nginx/Dockerfile.prod
#docker network create laranet
#docker run -d --network laranet --name laravel farofapereira/full_cycle_laravel:prod
#docker run -d --network laranet --name nginx -p 8080:80 farofapereira/full_cycle_nginx:prod