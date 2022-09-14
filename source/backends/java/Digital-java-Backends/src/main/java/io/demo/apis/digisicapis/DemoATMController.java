package io.demo.apis.digisicapis;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/v3.1")
public class DemoATMController {

    @Value("${SLOW_ZIP:00000}")
    private String slowZipCode;

    @Value("${EXTERNAL_CALL:N}")
    private String externalCall;

    @Value("${EXTERNAL_URL:NONE}")
    private String externalUrl;

    // http://devops.apimlab.org:8081/v3.1/nodes/atms?zip=14758&radius=10

    @RequestMapping(value = "/nodes/atms", method = RequestMethod.GET)
    @ResponseBody
    public String atmSearch(@RequestParam(name = "zip", required = false) String zipCode,
            @RequestParam(name = "radius", required = false) String radius) {
        System.out.println(zipCode);
        System.out.println(radius);
        if (zipCode.equalsIgnoreCase(slowZipCode)) {
            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        if (externalCall.equalsIgnoreCase("y")){
            System.out.println("Calling AWS");
            if (!externalUrl.equals("NONE")){
                RestTemplate restTemplate = new RestTemplate();
                ResponseEntity<String> response  = restTemplate.getForEntity(externalUrl, String.class);
                System.out.println(response.getBody());
            }else{
                System.out.println("NO Url");
            }
        }

        return "{\"atms\": [{\"atmLocation\": {\"address\": {\"city\": \"ISLANDIA\", \"country\": \"USA\", \"postalCode\": \"14758\", \"state\": \"NY\", \"street\": \"1700 VETERANS HIGHWAY\"}, \"coordinates\": {\"latitude\": 40.805604, \"longitude\": -73.181343 }, \"id\": \"848936\", \"isAvailable24Hours\": true, \"isDepositAvailable\": false, \"isHandicappedAccessible\": false, \"isOffPremise\": true, \"isSeasonal\": false, \"languageType\": null, \"locationDescription\": \"1700 VETERANS HIGHWAY,ISLANDIA,NY,14758,USA\", \"logoName\": \"711\", \"name\": \"7ELEVEN-FCTI\"}, \"distance\": 0.5843634867457268 }, {\"atmLocation\": {\"address\": {\"city\": \"COLORADO\", \"country\": \"USA\", \"postalCode\": \"14758\", \"state\": \"DN\", \"street\": \"12551 HWY 24 HARTSEL\"}, \"coordinates\": {\"latitude\": 39.0214828, \"longitude\": -105.8002834 }, \"id\": \"848936\", \"isAvailable24Hours\": true, \"isDepositAvailable\": false, \"isHandicappedAccessible\": false, \"isOffPremise\": true, \"isSeasonal\": false, \"languageType\": null, \"locationDescription\": \"12551 HWY 24 HARTSEL,COLORADO,DN,14758,USA\", \"logoName\": \"711\", \"name\": \"BADGER BASIN\"}, \"distance\": 3.57 }, {\"atmLocation\": {\"address\": {\"city\": \"COLORADO\", \"country\": \"USA\", \"postalCode\": \"14758\", \"state\": \"DN\", \"street\": \"8722 TELLER HWY NO 1 FLORISSANT\"}, \"coordinates\": {\"latitude\": 38.8213947, \"longitude\": -105.2608944 }, \"id\": \"848936\", \"isAvailable24Hours\": true, \"isDepositAvailable\": false, \"isHandicappedAccessible\": false, \"isOffPremise\": true, \"isSeasonal\": false, \"languageType\": null, \"locationDescription\": \"8722 TELLER HWY NO 1 FLORISSANT,COLORADO,DN,14758,USA\", \"logoName\": \"711\", \"name\": \"ATM TECHNOLOGIES\"}, \"distance\": 6.85 } ], \"atms_count\": 3, \"error_code\": \"0\", \"http_code\": \"200\", \"limit\": 3, \"page\": 1, \"page_count\": 1, \"success\": true }";
    }
}