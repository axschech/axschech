class Renderer {
	constructor() {
		this.titleWords = Array.from(
			document.getElementsByClassName('title-word')
		);
	    this.contentItems = Array.from(
	    	document.querySelectorAll('.hidden > div')
	    );
	    this.back = document.querySelector('#back');
	}

	hideTitleWords() { 
      this.titleWords.forEach(el => {
        el.style.display = 'none';
      });
    };
    
    hideContentItems() {
      this.contentItems.forEach(el => {
        el.style.display = 'none';
      })
    };

    hideBack() {
    	this.back.style.display = 'none';
    };

    showTitleWords() {
    	this.titleWords.forEach(el => {
        	el.style.display = 'block';
      	});
    };

    showContentItem(key) {
    	document.querySelector('#' + key).style.display = 'block';
    };

    showBack() {
    	this.back.style.display = 'block';
    }

    back() {
    	this.showTitleWords();
    	this.hideBack();
    }
};

module.exports = {
	Renderer: Renderer
};