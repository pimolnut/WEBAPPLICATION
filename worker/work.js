let count = 0;
function sendDate(){
    postMessage([(new Date()).toString() , count]);
    count > 4 ? count = 0 : count++;
}

self.onmessage = function(a){
    if(a.data){
        sendDate();
        interval = setInterval(sendDate,1000);
    }
    else{
        clearInterval(interval);
    }
}
