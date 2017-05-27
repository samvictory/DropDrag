(function(){
	var storage={};
	
	//fonction ini()
	function init()
	{
		var elements=document.querySelectorAll('.draggableBox');
		var elementsLength=elements.length;
		for(var i=0 ; i<elementsLength ; i++)
		{
			//mousedown
			elements[i].addEventListener('mousedown',function(e){
				var s= storage;
				s.target=e.target;
				s.offsetX=e.clientX - s.target.offsetLeft;
				s.offsetY=e.clientY - s.target.offsetTop;
			});
			
			//mouseup
			elements[i].addEventListener('mouseup',function(){
				storage={};
			});
		}
			
			//mousemoov
			document.addEventListener('mousemove', function(e){
    			var target = storage.target;

   				 if (target)
				  {
       				 target.style.top = e.clientY - storage.offsetY + 'px';
      			 	 target.style.left = e.clientX - storage.offsetX + 'px';
  				  }
			});
		
	}
	init();
})();