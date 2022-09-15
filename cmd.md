## RUN Command

1. RUN Project
   `docker-compose -f docker-compose.production.yml up --build --force-recreate`
2. start docker
   `sudo systemctl start docker`
3. give superuser permission
   `sudo chmod 666 /var/run/docker.sock`
