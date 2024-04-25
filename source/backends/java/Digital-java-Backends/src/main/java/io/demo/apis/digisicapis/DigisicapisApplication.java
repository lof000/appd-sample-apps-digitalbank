package io.demo.apis.digisicapis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.opentelemetry.api.OpenTelemetry;
//import io.opentelemetry.sdk.autoconfigure.AutoConfiguredOpenTelemetrySdk;

@SpringBootApplication
public class DigisicapisApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigisicapisApplication.class, args);
	}

    //@Bean
    //public OpenTelemetry openTelemetry() {
    //    return AutoConfiguredOpenTelemetrySdk.initialize().getOpenTelemetrySdk();
    //}    

}
