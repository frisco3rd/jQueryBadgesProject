$(function() {

$.ajax({
  dataType:'jsonp',
  url:'https://www.codeschool.com/users/2818593.json',
  success:function(response){
    console.log('response', response);

  }
})
});
