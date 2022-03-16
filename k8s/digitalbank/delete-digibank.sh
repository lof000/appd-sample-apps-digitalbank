#!/bin/bash 

echo "`date +%c` [INFO]: ############# Deleting Digital Bank K8s Deployment #############"
echo " "

displayComponents() {
   echo " "
   kubectl get cm,pods,deploy,svc,ingress -n digibank
   sleep $1 
}

deleteAppComponents() {

    #deployments
    kubectl delete -f dp-digibank-broker.yaml
    kubectl delete -f dp-digibank-credit.yaml
    kubectl delete -f dp-digibank-front.yaml
    kubectl delete -f dp-digibank-visa-java.yaml
    kubectl delete -f dp-digibank-atm-search-java.yaml

    #config maps
    kubectl delete -f cm-digibank-atm-search.yaml
    kubectl delete -f cm-digibank-db.yaml
    kubectl delete -f cm-digibank-opb.yaml   
    kubectl delete -f cm-digibank-visa.yaml    
    kubectl delete -f cm-digibank.yaml

    #secrets
    kubectl delete -f sec-digibank-mysql.yaml

    # namespace
    kubectl delete -f ns-digibank.yaml

}


# Starting to delete everything in creating All components again 
displayComponents 4
deleteAppComponents
displayComponents 2

echo " "
echo "`date +%c` [INFO]: ############# DONE....Digital Bank Deleted #############"  
