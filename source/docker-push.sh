if [ $# -eq 0 ]
  then
    echo "please inform version buildNumber"
    exit 1
fi

if [ -z "$1" ]
  then
    echo "please inform version buildNumber"
    exit 1
fi

echo "-----------------------------------------"
echo "Pushing.... ...." $1
echo "-----------------------------------------"

docker push leandrovo/digitalbank-new:$1
docker push leandrovo/digitalcredit-new:$1
docker push leandrovo/digitalbroker-new:$1
docker push leandrovo/digitalbank-backend-java:$1
