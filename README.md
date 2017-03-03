# Nutella Weather Simulations

This is a simulation built using the [Nutella Framework](https://github.com/nutella-framework/nutella_framework)


## Docker development setup:
1. You should have [docker](https://www.docker.com/) installed on your workstation.
2. You should clone this repo from github `git clone git@github.com:concord-consortium/weather.git`
3. Switch into the checkout directory: `cd weather`
3. Checkout this branch:  `git co -b with-docker`
2. Run `docker-compose up`
3. Open a web browser to [http://localhost:57880/weather/default](http://localhost:57880/weather/default)
3. TBD, but you can hack from here.

## TODO Items:
Right now we are building Nutella docker image in this (weather) repositiory.
We want to build that image in the `nutella_framework` repository, and then publish / use
the image from dockerhub.

The Dockerfile build is using untrusted GPG keys that prevent the image from being created on Dockerhub. It should be possible to install Node and GOSU without these keys.

We should try to pull mongo and other dependencies into their own containers.