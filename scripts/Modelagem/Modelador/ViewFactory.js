var ViewFactory = {
	view: {},
	setView: function(name,view) {
		this.view[name] = view;
	},
	getView: function(name) {
		return this.view[name];
	}
}