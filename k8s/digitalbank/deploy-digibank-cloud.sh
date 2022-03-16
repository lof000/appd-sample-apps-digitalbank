#!/bin/bash 

echo "`date +%c` [INFO]: ############# Starting Digital Bank Deployment #############"
echo " "

displayComponents() {
   echo " "
   kubectl get cm,pods,deploy,svc,ingress -n digibank
   sleep $1 
}

deployApps () {

    # namespace
    kubectl apply -f ns-digibank.yaml

    #config maps
    kubectl apply -f cm-digibank-atm-search.yaml
    kubectl apply -f cm-digibank-db.yaml
    kubectl apply -f cm-digibank-opb.yaml   
    kubectl apply -f cm-digibank-visa.yaml    
    kubectl apply -f cm-digibank.yaml

    #secrets
    kubectl apply -f sec-digibank-mysql.yaml

    #deployments
    kubectl apply -f dp-digibank-broker.yaml
    kubectl apply -f dp-digibank-credit.yaml
    kubectl apply -f dp-digibank-front.yaml
    kubectl apply -f dp-digibank-visa-java.yaml
    kubectl apply -f dp-digibank-atm-search-java.yaml
}


# Starting to delete everything in creating All components again 
displayComponents 3
deployApps
displayComponents 2

echo " "
echo "`date +%c` [INFO]: ############# DONE....Digital Bank Up & Running #############"
