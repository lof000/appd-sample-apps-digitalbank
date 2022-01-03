FROM adoptopenjdk:14-jre-hotspot

COPY digisicapis-0.0.1-SNAPSHOT.jar /opt/digisicapis/
WORKDIR /opt/digisicapis/
ENTRYPOINT ["java","-Duser.timezone=America/Sao_Paulo", "-jar", "digisicapis-0.0.1-SNAPSHOT.jar"]