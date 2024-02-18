package com.websocket.controller;

import com.websocket.model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    //jo bhi message ko bhejega vo /message url pr bhejega
    @MessageMapping("/message")
    //bheja hua message un sabko send ho jaaega jo log is website pr us time pr active hoge
    @SendTo("/topic/return-to")
    public Message getContent(@RequestBody Message message){
        //ye controller ek se message lega and sabko bhej dega

        try{
            Thread.sleep(500);
        }
        catch (InterruptedException e){
            //message directly nhi jaaega pehle thread sleep hogi then message jaaega isliye try catch hai
            e.printStackTrace();
        }
        return message;
    }
}
