#!/bin/bash 

echo "`date +%c` [INFO]: ############# Starting Digital Bank JMETER Deployment #############"
echo " "

displayComponents() {
   echo " "
   kubectl get cm,pods,deploy,svc,ingress -n load-jmeter
   sleep $1 
}

deployApps () {

    kubectl delete -f deployment-jmeter.yml    
    kubectl delete configmap config-jmeter -n load-jmeter
    kubectl delete -f jmeter-configmap.yml
    kubectl delete -f jmeter-secret.yml
}


# Starting to delete everything in creating All components again 
displayComponents 1
deployApps
displayComponents 1

echo " "
echo "`date +%c` [INFO]: ############# DONE....Digital JMETER Bank Up & Running #############"  
