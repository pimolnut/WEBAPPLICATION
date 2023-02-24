let count = 0;
function sendDate(){
    postMessage([(new Date()) , count]);
    count = (count + 1) % 4;
    setTimeout(sendDate, 1000);
}
sendDate()