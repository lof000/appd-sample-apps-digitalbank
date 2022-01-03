package io.demo.apis.digisicapis;


import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/visadirect")
public class DemoVISAController {

    //http://httpvisadirect10418-8080-default.mock.blazemeter.com/visadirect/fundstransfer/v1/pullfundstransactions?idcode=ABCD1234ABCD123&amount=5

    @RequestMapping(value = "/fundstransfer/v1/pullfundstransactions", method = RequestMethod.GET)
	@ResponseBody
    public String atmSearch(@RequestParam(name="idcode",required = false) String idcode,@RequestParam(name="amount",required = false) String amount){
        System.out.println(idcode);
        System.out.println(amount);
        return "{\"transactionIdentifier\": 875806056061895, \"actionCode\": \"00\", \"approvalCode\": \"98765X\", \"responseCode\": \"5\", \"transmissionDateTime\": \"2020-08-28T11:52:08Z\", \"cavvResultCode\": \"8\", \"cpsAuthorizationCharacteristicsIndicator\": \"3333\"}";
    }


    @RequestMapping(value = "/pix", method = RequestMethod.POST)
	@ResponseBody
    public String teste(@RequestBody String jsonExemplo){
        System.out.println(jsonExemplo);
        return jsonExemplo;
    }

}