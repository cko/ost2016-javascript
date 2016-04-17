export function getMyFavoriteBooks () {
		
	// solition v5 & v6
	return [ { "author":"Jon Doe", "title":"Irgendwas", "year":2000} ]

	// v6 only:
	class test { 
			constructor() {
					this.author = "jon";
					this.title = "abc";
					this.year = 2000;
			}
	}
	return [new test()]
	
	// v5 & v6
	function test() {
					this.author = "jon";
					this.title = "abc";
					this.year = 2000;
	}
	return [new test()]
}

