$(function(){ 
	function saveIssue(issue){
	var ary = new Array();
	ary.push({"number": issue.number});
	ary.push({"title": issue.title});
	ary.push({"body": issue.body});
	ary.push({"assignee": issue.assignee});
	var blob = new Blob([JSON.stringify(ary)], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "hello world.txt");
   }

  function getIssue(myUrl){
  $.ajax(
   {	 
      url: "https://api.github.com/repos" + myUrl.replace(/^.*\/\/[^\/]+/, ''),
      type: "GET",
      headers: {'Authorization': 'token xxx'}
   }
  )
  
  .done(function(issue){
		saveIssue(issue);		
	});	
  } 

  $("#pull").onClick(getIssue($("#url").value));  
  
});