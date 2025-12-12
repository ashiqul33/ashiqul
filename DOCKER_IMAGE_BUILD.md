## Docker Image Build
- `docker build -t ghcr.io/ashiqul33/ashiqul:latest .`
- `docker push ghcr.io/ashiqul33/ashiqul:latest`
- `echo YOUR_GITHUB_PAT | docker login ghcr.io -u ashiqul33 --password-stdin`