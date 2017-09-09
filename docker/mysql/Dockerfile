FROM mysql:5.6

RUN apt-get update
RUN apt-get install -y locales
RUN rm -rf /var/lib/apt/lists/*
ENV LC_ALL ja_JP.UTF-8

RUN { \
  echo '[mysqld]'; \
  echo 'character-set-server=utf8mb4'; \
  echo 'collation-server=utf8mb4_general_ci'; \
  echo '[client]'; \
  echo 'default-character-set=utf8mb4'; \
} > /etc/mysql/conf.d/charset.cnf