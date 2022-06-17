Use environment variable at runtime on nextjs app

## Build docker image

```bash
$ docker build . -t bbonkr/sample-nextjs-environment-variables:1.0.0 --platform linux/amd64
```

## Run container

```bash
$ docker-compose up -d
```

## References

- [NEXT.JS: Deployment Docker Image](https://nextjs.org/docs/deployment#docker-image)
- [NEXT.JS: Environment Variables](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)
- [Manage NEXT_PUBLIC Environment Variables at Runtime with Docker](https://dev.to/itsrennyman/manage-nextpublic-environment-variables-at-runtime-with-docker-53dl)