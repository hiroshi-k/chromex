var robots = new Array;
$("meta[name=robots]").map(function(){
  robots.push($(this).attr("content"));
});
console.group("====================== TDK Checker ======================");
console.log("T: "+$("title").html()+"\nD: "+$("meta[name=description]").attr("content")+"\nK: "+$("meta[name=keywords]").attr("content")+"\nR: "+robots+"\nCAN: "+$("link[rel=canonical]").attr("href")+"\nMLD: "+$("link[rel=alternate]").attr("href"));
console.groupEnd();

