!function( f ){
  f()
}( function(  ){
  console.log("hello")
  var obj = {}
  for( var prop in obj ){
    console.log(obj[prop])
  }
} )