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
echo "Building ...." $1
echo "-----------------------------------------"

docker build -f Dockerfile-Bank -t leandrovo/digitalbank-new:$1 .
docker build -f Dockerfile-Credit -t leandrovo/digitalcredit-new:$1 .
docker build -f Dockerfile-Broker -t leandrovo/digitalbroker-new:$1 .
docker build -f Dockerfile-Backends-java -t leandrovo/digitalbank-backend-java:$1 .

