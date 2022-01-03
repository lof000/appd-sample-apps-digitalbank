FROM tomcat:9.0
EXPOSE 8080
COPY /target/credit##2.1.0.local.war /usr/local/tomcat/webapps/
COPY /target/classes/application.properties /usr/local/tomcat/conf/digitalcredit.properties
HEALTHCHECK CMD curl -fail http://localhost:8080/credit/api/v1/health || exit 1
