clear
echo " "
echo "pods...."

kubectl get pods -n digibank

echo "-------"

kubectl get pods -n digibank-backends

echo " "

echo " "
echo "cluster agent"
echo "-------------------_"
echo " "
kubectl get pods -n appdynamics
