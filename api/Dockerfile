FROM ruby:2.4.1

ENV LANG C.UTF-8

# シェルスクリプトとしてbashを利用
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
# 必要なライブラリインストール
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

# ワークディレクトリ設定
ENV ROOT_PATH /src
RUN mkdir $ROOT_PATH
WORKDIR $ROOT_PATH
ADD Gemfile $ROOT_PATH/Gemfile
ADD Gemfile.lock $ROOT_PATH/Gemfile.lock
RUN bundle install
ADD . $ROOT_PATH