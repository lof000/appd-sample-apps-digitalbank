#!/bin/bash 

echo "`date +%c` [INFO]: ############# Starting Digital Bank JMETER Deployment #############"
echo " "

displayComponents() {
   echo " "
   kubectl get cm,pods,deploy,svc,ingress -n digibank
   sleep $1 
}

deployApps () {

    kubectl delete -f deployment-jmeter.yml    
    sleep 3
    kubectl delete configmap config-jmeter -n digibank
    sleep 2
    kubectl delete -f jmeter-configmap.yml
    sleep 3
    kubectl delete -f jmeter-secret.yml
}


# Starting to delete everything in creating All components again 
displayComponents 3
deployApps
displayComponents 2

echo " "
echo "`date +%c` [INFO]: ############# DONE....Digital JMETER Bank Up & Running #############"  
