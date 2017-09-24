FROM node:slim
MAINTAINER Manato

RUN npm install --quiet --global vue-cli

RUN mkdir -p /src

COPY package.json /src
RUN npm install
# RUN npm cache verify

ADD . /src

WORKDIR /src

RUN npm rebuild node-sass --force
