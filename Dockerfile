FROM ubuntu:16.04
MAINTAINER Madeline Miller

RUN apt-get update \
  && apt-get -y install software-properties-common \
  && add-apt-repository ppa:linuxuprising/java \
  && apt-get update \
  && echo oracle-java11-installer shared/accepted-oracle-license-v1-2 select true | /usr/bin/debconf-set-selections \
  && apt-get -y install oracle-java11-installer

ADD Emojify-*.jar app.jar

EXPOSE 5078

ENTRYPOINT java -jar app.jar