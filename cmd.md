## RUN Command

1. RUN Project
   `docker-compose -f docker-compose.production.yml up --build --force-recreate`
2. start docker
   `sudo systemctl start docker`
3. give superuser permission
   `sudo chmod 666 /var/run/docker.sock`
4. AWS
   `docker network create portfolio-network`
   `docker run --network portfolio-network --name reactbricks_portfolio ashiqul33/portfolio:reactbricks`
   `docker run --network portfolio-network --link reactbricks_portfolio:app --publish 80:80 ashiqul33/portfolio:nginx`