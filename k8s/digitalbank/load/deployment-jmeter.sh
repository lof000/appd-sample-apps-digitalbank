#!/bin/bash 

echo "`date +%c` [INFO]: ############# Starting Digital Bank JMETER Deployment #############"
echo " "

displayComponents() {
   echo " "
   kubectl get cm,pods,deploy,svc,ingress -n load-jmeter
   sleep $1 
}

deployApps () {

    kubectl apply -f jmeter-namespace.yml
    ./create_configmap.sh
    kubectl apply -f jmeter-configmap.yml
    kubectl apply -f jmeter-secret.yml
    kubectl apply -f deployment-jmeter.yml
}


# Starting to delete everything in creating All components again 
displayComponents 1
deployApps
displayComponents 1

echo " "
echo "`date +%c` [INFO]: ############# DONE....Digital JMETER Bank Up & Running #############"  
