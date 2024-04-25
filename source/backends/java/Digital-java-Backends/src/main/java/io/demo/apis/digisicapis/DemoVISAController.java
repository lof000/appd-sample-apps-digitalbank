package io.demo.apis.digisicapis;


import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.context.Scope;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping({"/visadirect"})
public class DemoVISAController {
  @Value("${AWS_API_URL:NONE}")
  private String awsLambdaUrl;
  
  @Value("${SLOW_REGION:NONE}")
  private String slowRegion;
  
  @Value("${SLOW_TIME:NONE}")
  private String slowTime;
  
  @Value("${ERROR_REGION:NONE}")
  private String errorRegion;
  
  private final Tracer tracer;
  
  private static String[] ids = new String[] { "jsmith@demo.io", "ledeoliv@cisco.com", "mkuglerr@cisco.com", "vader@deathstar.com", "luke@xwingacademhy.com", "lcroft@croftcorp.com", "jin.kazama@gcorp.com", "heihachi.mishima@gcorp.com", "kazuya.mishima@gcorp.com" };
  
  @Autowired
  DemoVISAController(OpenTelemetry openTelemetry) {
    this.tracer = openTelemetry.getTracer(io.demo.apis.digisicapis.DemoVISAController.class.getName(), "0.1.0");
  }
  
  @RequestMapping(value = {"/fundstransfer/v1/pullfundstransactions"}, method = {RequestMethod.GET})
  @ResponseBody
  public String atmSearch(@RequestParam(name = "idcode", required = false) String idcode, @RequestParam(name = "amount", required = false) String amount) throws Exception {
    System.out.println(idcode);
    System.out.println(amount);
    Span span = this.tracer.spanBuilder("transferFunds").startSpan();
    try {
      Scope scope = span.makeCurrent();
      try {
        Random random = new Random();
        int randomNumber = random.nextInt(8);
        span.setAttribute("amountxfer", Long.parseLong(amount));
        span.setAttribute("location", "idcode");
        span.setAttribute("userId", ids[randomNumber]);
        if (idcode.equals("aws")) {
          System.out.println("Calling AWS");
          if (!this.awsLambdaUrl.equals("NONE")) {
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(this.awsLambdaUrl, String.class, new Object[0]);
            System.out.println((String)response.getBody());
          } else {
            System.out.println("NO Url");
          } 
        } 
        if (!this.slowRegion.equals("NONE") && 
          idcode.equalsIgnoreCase(this.slowRegion)) {
          if (this.slowTime.equals("NONE"))
            this.slowTime = "3000"; 
          try {
            System.out.println("hanging for " + this.slowTime + " ms");
            Thread.sleep(Long.parseLong(this.slowTime));
          } catch (InterruptedException e) {
            e.printStackTrace();
          } 
        } 
        if (idcode.equalsIgnoreCase(this.errorRegion)) {
          System.out.println("ERROR: Transaction not completed! Missim field <account number>!!!");
          throw new Exception("Transaction not completed! Missim field <account number>!!!");
        } 
        if (scope != null)
          scope.close(); 
      } catch (Throwable throwable) {
        if (scope != null)
          try {
            scope.close();
          } catch (Throwable throwable1) {
            throwable.addSuppressed(throwable1);
          }  
        throw throwable;
      } 
    } catch (Exception e) {
      span.recordException(e);
    } finally {
      span.end();
    } 
    return "{\"transactionIdentifier\": 875806056061895, \"actionCode\": \"00\", \"approvalCode\": \"98765X\", \"responseCode\": \"5\", \"transmissionDateTime\": \"2020-08-28T11:52:08Z\", \"cavvResultCode\": \"8\", \"cpsAuthorizationCharacteristicsIndicator\": \"3333\"}";
  }
  
  @RequestMapping(value = {"/pix"}, method = {RequestMethod.POST})
  @ResponseBody
  public String teste(@RequestBody String jsonExemplo) {
    System.out.println(jsonExemplo);
    return jsonExemplo;
  }
}
