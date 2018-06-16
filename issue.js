
$(function(){
 
  function getIssue(myUrl){
  $.ajax(
   {
	 
      url: myUrl,
      type: "GET",
      headers: {'Authorization': 'token xxx'}
   }
  )
  
  .done(function(issues){
    console.log(issues);
	
		saveIssue();		
	});
    
  }
  
    
});