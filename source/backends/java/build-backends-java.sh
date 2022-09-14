#!/bin/bash
echo "oi"
if [ $# -eq 0 ]
  then
    echo "please inform version buildNumber"
    exit 1
fi
echo "oi"
if [ -z "$1" ]
  then
    echo "please inform version buildNumber"
    exit 1
fi

echo "-----------------------------------------"
echo "Building JAVA BACKENDS ...." $1
echo "-----------------------------------------"

cd Digital-java-Backends
mvn clean package -DskipTests=true -DbuildNumber=$1
cd ..
cp Digital-java-Backends/target/digisicapis-0.0.1-SNAPSHOT.jar .

docker build -f Dockerfile-Backends-java -t leandrovo/digitalbank-backend-java:$1 .
