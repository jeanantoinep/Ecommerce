FROM mysql:8.0
RUN apt-get update \
&& apt-get -y upgrade
ADD script.sql /docker-entrypoint-initdb.d/script.sql
ENV MYSQL_ROOT_PASSWORD root
