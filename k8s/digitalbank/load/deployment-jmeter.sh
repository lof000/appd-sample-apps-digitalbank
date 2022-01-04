#!/bin/bash 

echo "`date +%c` [INFO]: ############# Starting Digital Bank JMETER Deployment #############"
echo " "

displayComponents() {
   echo " "
   kubectl get cm,pods,deploy,svc,ingress -n digibank
   sleep $1 
}

deployApps () {

    ./create_configmap.sh
    sleep 2
    kubectl apply -f jmeter-configmap.yml
    sleep 3
    kubectl apply -f jmeter-secret.yml
    sleep 3
    kubectl apply -f deployment-jmeter.yml
}


# Starting to delete everything in creating All components again 
displayComponents 3
deployApps
displayComponents 2

echo " "
echo "`date +%c` [INFO]: ############# DONE....Digital JMETER Bank Up & Running #############"  
