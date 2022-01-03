#!/bin/bash
if [ $# -eq 0 ]
  then
    echo "please inform version buildNumber"
    exit 1
fi

if [ -z "$1" ]
  then
    echo "please inform version buildNumber"
    exit 1
fi

echo "-----------------------------------------"
echo "Building ...." $1
echo "-----------------------------------------"

mvn clean package -DskipTests=true -DbuildNumber=$1

rm -rf war/*
cp Digital-Bank/target/bank\#\#2.1.0.$1.war war/bank.war
cp Digital-Bank/target/classes/application.properties war/bank_application.properties

cp Digital-Credit/target/credit##2.1.0.$1.war war/credit.war
cp Digital-Credit/target/classes/application.properties war/credit_application.properties

cp backends/java/Digital-java-Backends/target/digisicapis-2.1.0.$1.jar jar/digibank-java-backends.jar

