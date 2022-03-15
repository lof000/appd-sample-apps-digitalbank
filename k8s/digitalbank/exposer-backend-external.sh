kubectl expose deployment digital-bank-backends-deployment --name backend-external --port=8081 --type=LoadBalancer -n digibank
