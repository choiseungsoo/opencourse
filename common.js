function alert4(){
	alert('You clicked alert4!!');
}

function alertOnLoad(){
	console.log('alertOnLoad');
	alert('경고');
	
	var rtnValue = confirm("body에 글을 쓰시겠습니까?");
	
	if( rtnValue == true)
	{  
		document.write('글이 써졌어요');	
	} else {  
		return false;
	}
}