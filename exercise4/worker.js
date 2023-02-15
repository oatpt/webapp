var i=0
function timedCount() {
  i = i + 1;
  a={'time':new Date(),'num':i};
  postMessage(a);

  setTimeout("timedCount()",1000);
}

timedCount();