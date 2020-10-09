function welcome2(){
  return 'Hello Student!';
}

var abc = ['7', 'A', 'K', '2', '3']; //배열
var abc2 = ['9', 'A', '9', '9', '9']
abc.splice(1, 1, 'K'); //배열에 있는 소문자 b를 대문자 B로 바꾸기
alert(abc);

var total = {
'value': {'Pair':10, 'Straight':40, 'Flush':50},
'Four_card' : function(){
  for(var i = 0; i < abc2.length; i++){
    document.write(abc2[i]);
    document.write("\n");
    }
    document.write('FOUR CARD !!')
  }
};
