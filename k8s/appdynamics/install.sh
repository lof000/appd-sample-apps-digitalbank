kubectl create ns appdynamics
helm install -f ./values.yaml "cagent" appdynamics-charts/cluster-agent --namespace=appdynamics
