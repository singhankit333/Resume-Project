////////////smooth scroll-----start///////////////////

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

///////////smooth scroll----end //////////


/////////skill bar auto fill----start/////////

var progressBars = document.querySelectorAll('.skills-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);

function initialiseBars(){
	for(let bar of progressBars){
		bar.style.width = 0 + '%';
	}
}

initialiseBars();

var animationDone = false;

function fillBars(){
	for(let bar of progressBars){
		let currLevel = 0;
		let maxLevel = bar.dataset.barWidth;
		let interval = setInterval(function(){
			bar.style.width = currLevel + '%';
			currLevel++;
			if(currLevel>=maxLevel){
				clearInterval(interval);
				return;
			}
		}, 5);
	}
}

function checkScroll(){
	var coordinates = skillsContainer.getBoundingClientRect();
	if(!animationDone && coordinates.top < window.innerHeight){
		animationDone = true;
		fillBars();
	}
	else if(animationDone && (coordinates.top > window.innerHeight)){
		animationDone = false;
		initialiseBars();
	}
}

///////skill bar auto fill-----end///////////
