var navMenuAnchorTags = document.querySelectorAll('nav a');

var interval;

for(let i=0; i<navMenuAnchorTags.length; i++){
	navMenuAnchorTags[i].addEventListener('click', function(event){
		event.preventDefault();
		var targetSectionId = this.textContent.trim().toLowerCase();
		var targetSection = document.getElementById(targetSectionId);
		interval = setInterval(scrollVertically, 20, targetSection);
	});
}

function scrollVertically(targetSection){
	var targetSectionCoordinates = targetSection.getBoundingClientRect();
	if(targetSectionCoordinates.top <= 0 || targetSectionCoordinates.bottom <= screen.height){
		clearInterval(interval);
		return;
	}
	window.scrollBy(0, 50);
}