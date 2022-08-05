helm delete cagent -n appdynamics
sleep 30
helm install -f ./values.yaml "cagent" appdynamics-charts/cluster-agent --namespace=appdynamics