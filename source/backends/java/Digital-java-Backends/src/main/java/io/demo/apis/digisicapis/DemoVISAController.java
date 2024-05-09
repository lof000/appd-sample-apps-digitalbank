package io.demo.apis.digisicapis;


import java.util.Random;
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
  
  private static String[] ids = new String[] { "jsmith@demo.io", "ledeoliv@cisco.com", "mkuglerr@cisco.com", "vader@deathstar.com", "luke@xwingacademhy.com", "lcroft@croftcorp.com", "jin.kazama@gcorp.com", "heihachi.mishima@gcorp.com", "kazuya.mishima@gcorp.com" };
    
  @RequestMapping(value = {"/fundstransfer/v1/pullfundstransactions"}, method = {RequestMethod.GET})
  @ResponseBody
  public String atmSearch(@RequestParam(name = "idcode", required = false) String idcode, @RequestParam(name = "amount", required = false) String amount) throws Exception {
    System.out.println(idcode);
    System.out.println(amount);

    Random random = new Random();
    int randomNumber = random.nextInt(8);
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

    return "{\"transactionIdentifier\": 875806056061895, \"actionCode\": \"00\", \"approvalCode\": \"98765X\", \"responseCode\": \"5\", \"transmissionDateTime\": \"2020-08-28T11:52:08Z\", \"cavvResultCode\": \"8\", \"cpsAuthorizationCharacteristicsIndicator\": \"3333\"}";
  }
  
  @RequestMapping(value = {"/pix"}, method = {RequestMethod.POST})
  @ResponseBody
  public String teste(@RequestBody String jsonExemplo) {
    System.out.println(jsonExemplo);
    return jsonExemplo;
  }
}
