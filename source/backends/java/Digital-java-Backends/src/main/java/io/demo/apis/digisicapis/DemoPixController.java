package io.demo.apis.digisicapis;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pix")
public class DemoPixController {

    @RequestMapping(value = "/transaction", method = RequestMethod.POST)
	@ResponseBody
    public String teste(@RequestBody String jsonExemplo){
        System.out.println(jsonExemplo);

        sendTransactionData(getTransactioName(jsonExemplo),getTransactioValue(jsonExemplo));

        return getTransactioName(jsonExemplo)+getTransactioValue(jsonExemplo);
    }

    private void sendTransactionData(String name,String value){
        System.out.println(name);
        System.out.println(value);
    }

    private String getTransactioName(String jsonExemplo){
        int ix = jsonExemplo.indexOf("transactionName");
        int f = jsonExemplo.indexOf("transactionValue");
        String trName = jsonExemplo.substring(ix+18, f-3);
        return trName;
    }

    private String getTransactioValue(String jsonExemplo){
        int ix = jsonExemplo.indexOf("transactionValue");
        String trName = jsonExemplo.substring(ix+18, jsonExemplo.length()-1);
        return trName;
    }
    
}
