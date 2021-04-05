d.notifyWhenLoaded(".intro__cover");

WebFont.load({
	google: {
		families: ["Source Sans Pro:300,900", "Bebas Neue"]
	},
	active: function() {
		d.runWhenAllLoaded(init);
	},
	inactive: function() {
		window.location.reload();
	},
	classes: false,
	timeout: 8000
});
