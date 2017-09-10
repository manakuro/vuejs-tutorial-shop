FROM node:slim

MAINTAINER Manato

RUN npm install --quiet --global vue-cli

RUN mkdir -p /src
ADD . /src/

WORKDIR /src

RUN npm i
RUN npm rebuild node-sass --force