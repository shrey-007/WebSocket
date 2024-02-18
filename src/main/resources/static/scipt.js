var stompClient=null

function connect(){

     let socket=new SockJS("/server1")
     stompClient=Stomp.over(socket)
     stompClient.connect({},function(frame){
         console.log("connected"+frame)
         $("#name-form").addClass('d-none')
         $("#chat-room").removeClass('d-none')

          stompClient.subscribe("/topic/return-to",function(response){
             showMessage(JSON.parse(response.body))
          })

     })


}

function showMessage(message){
   console.log("ambika"+message.name+message.content)
//   $("#message-container-table").prepend('<tr><td><b>${message.name} :</b>${message.content}</td></tr>')
   $("#message-container-table").prepend(`<tr><td><b>${message.name} :</b>${message.content}</td></tr>`)
}





$(document).ready(e=>{


   $("#login").click(()=>{
      let name=$("#name-value").val()
      localStorage.setItem("name",name)
      connect();
   })

   $("#send-btn").click(()=>{
     console.log("send button pressed");
     sendMessage();
   })

   $("#logout").click(()=>{
        localStorage.removeItem("name")
        if(stompClient!=null){
            stompClient.disconnect();
            $("#name-form").removeClass('d-none')
            $("#chat-room").addClass('d-none')
        }
      })


})








function sendMessage(){
    let jsonOb={
      name:localStorage.getItem("name"),
      content:$("#message-value").val()
    }

    console.log("send message called")

    stompClient.send("/app/message",{},JSON.stringify(jsonOb));

}