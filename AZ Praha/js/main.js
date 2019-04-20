function getTheBiggestHeight() {
	var imgContainers = document.getElementsByClassName('document_img');
	var arrayHeight = [];
	for(var i = 0; imgContainers.length > i; i++) {
		var imgContainerHeight = imgContainers[i].offsetHeight;
		arrayHeight.push(imgContainerHeight);
	}

	function sortArrayHeight(a, b) {
 	 	if (a > b) return -1;
  		if (a < b) return 1;
	}

	var sortedArrayHeight = arrayHeight.sort(sortArrayHeight);
	alert(sortedArrayHeight);
	
	for(var i = 0; imgContainers.length > i; i++) {
		imgContainers[i].style.setProperty('height',  sortedArrayHeight[0]  + 'px');
		
	}

	
}

window.addEventListener('load', getTheBiggestHeight);

