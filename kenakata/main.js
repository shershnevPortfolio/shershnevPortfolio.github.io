var deleteEmpties = function() {
		var empty = document.getElementsByClassName('empty');
	while(empty[0]) {
		empty[0].parentNode.removeChild(empty[0]);
	}
}

var	addEmpties = function() {
	
	var ParentWidth = document.getElementById('column').offsetWidth;
	var a = document.getElementById('column').firstElementChild.classList[0];		
	 var ChildWidth = document.getElementsByClassName('product_wrapper')[0].offsetWidth;
	var In_a_Row = /**/ parseInt(ParentWidth/ChildWidth);
	var quantityOfChild = document.getElementsByClassName(a.toString()).length;



	
var lastRowChildren = quantityOfChild%In_a_Row;
var ElementsToAdd = In_a_Row - lastRowChildren;





if(lastRowChildren == 0 ) {
	return;
}

else {
	
	for(var i = 1; i <= ElementsToAdd; i++) {
		let child = document.createElement('div');
		child.className = "empty";
		child.style.setProperty('width', ChildWidth + "px");
		let parent = document.getElementById('column');
		parent.appendChild(child);


		
	}
	


}




}

window.addEventListener('load',addEmpties);
window.addEventListener('resize', deleteEmpties);
window.addEventListener('resize', addEmpties);





























