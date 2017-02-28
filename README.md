# Nutella Weather Simulations

This is a simulation built using the [Nutella Framework](https://github.com/nutella-framework/nutella_framework)


## Docker development setup:
1. Prerequisites: You should have [docker](https://www.docker.com/) installed on your workstation.
2. from this directory `docker-compose up`
3. Open a web browser to [http://localhost:57880/weather/default](http://localhost:57880/weather/default)
3. TBD, but you can hack from here.

## Working on:
Right now we are building Nutella docker image in this (weather) repositiory.
We want to build that image in the `nutella_framework` repository, and then publish / use
the image from dockerhub.

The Dockerfile build is using untrusted GPG keys that prevent the image from being created on Dockerhub. It should be possible to install Node and GOSU without these keys by chaning the build steps.
