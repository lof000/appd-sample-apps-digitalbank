#ENV
ID=ledeoliv


export OTEL_EXPORTER_OTLP_ENDPOINT=https://xxx/data
export OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=https://xxx/data/v1/trace
export OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf
export OTEL_EXPORTER_OTLP_HEADERS="Authorization=Bearer xx"


export OTEL_RESOURCE_ATTRIBUTES="service.name=app33,service.namespace=hib3$ID"
export OTEL_PROPAGATORS=tracecontext,baggage


java -Dserver.port=8084 -jar target/digisicapis-2.1.0.null.jar


