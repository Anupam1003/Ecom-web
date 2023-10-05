function sendMessage(message, itsMe) { // ...Mario
  var messageList = document.getElementById("message-list");
  
  var scrollToBottom = (messageList.scrollHeight - messageList.scrollTop - messageList.clientHeight < 80);

  var lastMessage = messageList.children[messageList.children.length-1];
  
  var newMessage = document.createElement("span");
  newMessage.innerHTML = message;

  var className;
  
  if(itsMe)
  {
    className = "me";
    scrollToBottom = true;
  }
  else
  {
    className = "not-me";
  }
  
  if(lastMessage && lastMessage.classList.contains(className))
  {
    lastMessage.appendChild(document.createElement("br"));
    lastMessage.appendChild(newMessage);
  }
  else
  {
    var messageBlock = document.createElement("div");
    messageBlock.classList.add(className);
    messageBlock.appendChild(newMessage);
    messageList.appendChild(messageBlock);
  }
  
  if(scrollToBottom)
    messageList.scrollTop = messageList.scrollHeight;
}

var message = document.getElementById("message-input");
message.addEventListener("keypress", function(event) {
  var key = event.which || event.keyCode;
  if(key === 13 && this.value.trim() !== "")
  {
    sendMessage(this.value, true);
    this.value = "";
  }
});

sendMessage("Hello!", true);
sendMessage("Hey!", false);
sendMessage("How are you doing?", false);
sendMessage("I'm doing well.", true);
sendMessage("What about you?", true);
sendMessage("Good", false);

function sendRandomMessages()
{
  // http://www.conversationstarters.com/generator.php
  var messageList = [
    "What is your biggest concern about the future?",
    "What is your biggest fear?",
    "At what age would you consider someone to be old?",
    "What is your favorite home cooked dish?",
    "What is the biggest priority in your life right now?",
    "Where did you go on your last vacation?",
    "What was the biggest life change you've gone through?",
    "Do you have any siblings?",
    "What's your family like?",
    "If you knew that you only had a year left to live, what would you do?",
    "What do you usually eat in the morning?",
    "What's in your fridge?",
    "Do you recycle?",
    "What are some things that you should not not say during a job interview?",
    "If you could go back in time and change one thing, what would that be?",
    "What do you wear to sleep?",
    "What is the last thing you do before you go to sleep?",
    "If you could only eat one thing for the rest of your life, what would it be?",
    "Would you rather be homeless for a year or be in jail for a year?",
    "What do you do for fun?"
  ];
  var choosenMessage = messageList[Math.floor(Math.random() * messageList.length)];
  
  sendMessage(choosenMessage, false);
  
  setTimeout(sendRandomMessages, Math.random()*10000 + 7000);
}

sendRandomMessages();