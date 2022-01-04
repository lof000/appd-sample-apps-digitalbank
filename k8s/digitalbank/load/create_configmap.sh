#!/bin/bash
kubectl create configmap config-jmeter --from-file=script.jmx -n digibank
