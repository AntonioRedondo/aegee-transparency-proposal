function init() { // eslint-disable-line no-unused-vars
	function isMobile() {
		return window.innerWidth < 810;
	}
	
	function getGap() {
		return isMobile() ? 80 : 300;
	}
	
	function setBodyHeight() {
		var height = d.calcClientHeightsSum(".skrollr-deck") + getGap();
		document.body.style.height = height + "px";
	}
	
	var entryPosition = undefined;
	var isLineMoving = false;
	
	function moveLine(position, noBlocking) {
		if (!isLineMoving && ((position !== undefined && position !== entryPosition) || position === undefined)) {
			entryPosition = typeof position === "number" ? position : entryPosition;
			isLineMoving = noBlocking ? false : d.st(function() { isLineMoving = false; }, 400);
			var entries = d.calcPositionsToViewport(".table-of-contents a");
			var line = d.gc("table-of-contents__line");
			line.style.height = entries[entryPosition].height + "px";
			line.style.transform = "translate3d(0, calc(" + entries[entryPosition].top + "px - 2px), 0)";
		}
	}
	
	
	
	// Sets up Skroller
	var gap = getGap();
	
	var offsetFunctions = {
		get d0()	{ return d.gi("cover").clientHeight; },
		get d0s()	{ return d.gc("cover__bg").clientHeight; },
		get d0g()	{ return this.d0 + gap; },
		get d2()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#the-issues").top; },
		get d3()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#too-much-restricted-content").top; },
		get d4()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#inadequate-formats-and-storage").top; },
		get d5()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#the-solutions").top; },
		get d6()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#easing-the-levels-of-protection").top; },
		get d7()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#introducing-the-content-format-guidelines").top; },
		get d8()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#precedents").top; },
		get d9()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#faq").top; },
		get d10()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#chronology").top; },
		get d11()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#author").top; },
		get d12()	{ return this.d0g - gap + d.calcRelativePosition("#main", "#feedback-and-suggestions").top; },
	};
	
	var skrollrInstance = skrollr.init({
		smoothScrolling: false,
		forceHeight: false,
		constants: offsetFunctions,
		mobileCheck: function() { return false; },
		keyframe: function(element, name, direction) {
			var up = direction === "up" ? -1 : 0;
			switch (element.id) {
				case "introduction":								moveLine(1 + up, true);		break;
				case "the-issues":									moveLine(2 + up, true);		break;
				case "too-much-restricted-content":					moveLine(3 + up, true);		break;
				case "inadequate-formats-and-storage":				moveLine(4 + up, true);		break;
				case "the-solutions":								moveLine(5 + up, true);		break;
				case "easing-the-levels-of-protection":				moveLine(6 + up, true);		break;
				case "introducing-the-content-format-guidelines":	moveLine(7 + up, true);		break;
				case "precedents":									moveLine(8 + up, true);		break;
				case "faq":											moveLine(9 + up, true);		break;
				case "chronology":									moveLine(10 + up, true);	break;
				case "author":										moveLine(11 + up, true);	break;
				case "feedback-and-suggestions":					moveLine(12 + up, true);	break;
			}

			if (name === "data_d0") {
				var toc = d.gc("table-of-contents");
				if (direction === "up") {
					toc.classList.remove("table-of-contents--in");
				} else {
					toc.classList.add("table-of-contents--in");
				}
			}
		}
	});
	
	// Sets up Skroller Menu
	skrollr.menu.init(skrollrInstance, {
		animate: true,
		easing: "outCubic",
		duration: 500,
		handleLink: function(link) {
			var linkText = link.href.split("#").pop();
			var positionIntroduction = d.calcRelativePosition("#introduction", "#" + linkText);
			var extraSpace = linkText === "introduction" ? 0 : -35;
			var calcSpace = function() { return offsetFunctions.d0g + positionIntroduction.top + extraSpace; };
			
			switch (linkText) {
				case "summary":										return offsetFunctions.d0s;
				case "c1p1":
				case "c1p2":
				case "c1p3":
				case "c1p4":
				case "c1p5":
				case "introduction":								moveLine(1);	return calcSpace();
				case "c2p1":
				case "c2p2":
				case "c2p3":
				case "c2p4":
				case "c2p4b":
				case "c2p5":
				case "the-issues":									moveLine(2);	return calcSpace();
				case "c2p6":
				case "c2p7":
				case "c2p8":
				case "c2p9":
				case "c2p10":
				case "c2p11":
				case "c2p12":
				case "c2p13":
				case "c2p14":
				case "c2p14b":
				case "c2p14c":
				case "c2p15":
				case "c2p16":
				case "c2p17":
				case "c2p18":
				case "c2p19":
				case "c2p20":
				case "c2p21":
				case "c2p22":
				case "c2p23":
				case "c2p24":
				case "c2p25":
				case "c2p26":
				case "c2p27":
				case "c2p28":
				case "c2p29":
				case "c2p29b":
				case "c2p30":
				case "c2p31":
				case "c2p32":
				case "c2p33":
				case "c2p34":
				case "c2p35":
				case "c2p36":
				case "too-much-restricted-content":					moveLine(3);	return calcSpace();
				case "c2p37":
				case "c2p38":
				case "c2p39":
				case "c2p40":
				case "c2p41":
				case "c2p42":
				case "c2p43":
				case "c2p44":
				case "c2p45":
				case "c2p46":
				case "c2p47":
				case "c2p48":
				case "c2p49":
				case "c2p50":
				case "c2p51":
				case "c2p52":
				case "c2p53":
				case "c2p54":
				case "c2p55":
				case "c2p56":
				case "c2p57":
				case "c2p58":
				case "c2p59":
				case "c2p60":
				case "c2p61":
				case "inadequate-formats-and-storage":				moveLine(4);	return calcSpace();
				case "the-solutions":								moveLine(5);	return calcSpace();
				case "easing-the-levels-of-protection":				moveLine(6);	return calcSpace();
				case "introducing-the-content-format-guidelines":	moveLine(7);	return calcSpace();
				case "c4p1":
				case "c4p2":
				case "c4p3":
				case "c4p4":
				case "c4p5":
				case "c4p6":
				case "c4p7":
				case "c4p8":
				case "precedents":									moveLine(8);	return calcSpace();
				case "c5p1":
				case "c5p2":
				case "c5p3":
				case "c5p4":
				case "c5p4b":
				case "c5p4c":
				case "c5p5":
				case "c5p6":
				case "c5p7":
				case "c5p8":
				case "c5p9":
				case "faq":											moveLine(9);	return calcSpace();
				case "c6p1":
				case "c6p2":
				case "c6p3":
				case "chronology":									moveLine(10);	return calcSpace();
				case "author":										moveLine(11);	return calcSpace();
				case "feedback-and-suggestions":					moveLine(12);	return calcSpace();
			}
			
			window.history.replaceState(null, null, " "); // https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r
			return 0;
		}
	});
	
	
	
	// Set ups the navigation top bar for mobile screens
	d.qsa(".table-of-contents a, .table-of-contents__three-bars, .table-of-contents__three-bars-close-surface").forEach(function(item) {
		item.addEventListener("click", function() {
			if (isMobile()) {
				d.gc("table-of-contents").classList.toggle("table-of-contents--open");
				d.gc("table-of-contents__three-bars-close-surface").classList.toggle("table-of-contents__three-bars-close-surface--in");
			}
		});
	});
	
	
	
	// Set ups the theme menu and theme changing logic
	var theme;
	var isChanging = false;
	function setThemeTemp(themeNumber) {
		if (!isChanging) {
			var themesToRemove = [1, 2, 3, 4].filter(function(theme) { return theme !== themeNumber; });
			// d.qs("html").classList.remove(...themesToRemove.map(function(theme) { return 't' + theme; }));
			themesToRemove.forEach(function(theme) { d.qs("html").classList.remove("t" + theme); });
			d.qs("html").classList.add("t" + themeNumber);
			d.qsa("main table").forEach(
				function(table) { return table.setAttribute("border", themeNumber === 4 ? 1 : 0); }
			);
		}
	}
	function setTheme(themeNumber, text) {
		d.st(function() { return isChanging = false, 200; });
		setThemeTemp(themeNumber);
		isChanging = true;
		localStorage.setItem("theme", themeNumber);
		localStorage.setItem("theme-name", text);
		theme = themeNumber;
		d.gc("theme-menu__title").innerText = text;
		d.gc("theme-menu").classList.remove("theme-menu--open");
		d.gc("theme-menu__close-surface").classList.remove("theme-menu__close-surface--in");
	}
	d.gc("t1").addEventListener("click", function(e) { e.stopPropagation(); return setTheme(1, "Blue"); });
	d.gc("t1").addEventListener("mouseover", function(e) { e.stopPropagation(); return setThemeTemp(1); });
	d.gc("t1").addEventListener("mouseout", function(e) { e.stopPropagation(); return setThemeTemp(theme); });
	d.gc("t2").addEventListener("click", function(e) { e.stopPropagation(); return setTheme(2, "Light"); });
	d.gc("t2").addEventListener("mouseover", function(e) { e.stopPropagation(); return setThemeTemp(2); });
	d.gc("t2").addEventListener("mouseout", function(e) { e.stopPropagation(); return setThemeTemp(theme); });
	d.gc("t3").addEventListener("click", function(e) { e.stopPropagation(); return setTheme(3, "High contrast"); });
	d.gc("t3").addEventListener("mouseover", function(e) { e.stopPropagation(); return setThemeTemp(3); });
	d.gc("t3").addEventListener("mouseout", function(e) { e.stopPropagation(); return setThemeTemp(theme); });
	d.gc("t4").addEventListener("click", function(e) { e.stopPropagation(); return setTheme(4, "It's 1996 again!"); });
	d.gc("t4").addEventListener("mouseover", function(e) { e.stopPropagation(); return setThemeTemp(4); });
	d.gc("t4").addEventListener("mouseout", function(e) { e.stopPropagation(); return setThemeTemp(theme); });
	d.gc("theme-menu").addEventListener("click", function() {
		if (d.gc("theme-menu").classList.contains("theme-menu--open")) {
			d.gc("theme-menu").classList.remove("theme-menu--open");
			d.gc("theme-menu__close-surface").classList.remove("theme-menu__close-surface--in");
		} else {
			d.gc("theme-menu").classList.add("theme-menu--open");
			d.gc("theme-menu__close-surface").classList.add("theme-menu__close-surface--in");
		}
	});
	d.gc("theme-menu").addEventListener("mouseover", function() {
		if (!isMobile()) {
			d.gc("theme-menu").classList.add("theme-menu--open");
			d.gc("theme-menu__close-surface").classList.add("theme-menu__close-surface--in");
		}
	});
	d.gc("theme-menu__close-surface").addEventListener("click", function() {
		d.gc("theme-menu").classList.remove("theme-menu--open");
		d.gc("theme-menu__close-surface").classList.remove("theme-menu__close-surface--in");
	});
	setTheme(
		parseInt(localStorage.getItem("theme")) || 1,
		localStorage.getItem("theme-name") || "Blue"
	);
	
	
	
	// Adapts the UI to remove intro animations if the URL points to a section
	var hash = window.location.hash;
	var toc = d.gc("table-of-contents");
	if (hash && !/^#(cover|summary)/.test(hash) || isMobile()) {
		toc.classList.add("table-of-contents--in");
	}
	
	
	
	// Adds general event listeners
	var scrolled = false;
	var distance = offsetFunctions.d0g;
	
	d.ae("scroll", function() {
		if (window.pageYOffset >= distance && !scrolled) {
			toc.classList.add("table-of-contents--in");
			scrolled = true;
		} else if (window.pageYOffset < distance && scrolled) {
			// toc.classList.remove("table-of-contents--in");
			scrolled = false;
		}
	});
	
	d.ae("resize", function() {
		d.st(function() {
			setBodyHeight();
			skrollrInstance.refresh();
			moveLine();
		}, 300);
		d.gc("table-of-contents").classList.remove("table-of-contents--open");
		d.gc("table-of-contents__three-bars-close-surface").classList.remove("table-of-contents__three-bars-close-surface--in");
	});
	
	d.ae("load", function() { // The load event isn't fired on Chrome 89 when there is a hash on the URL
		setBodyHeight();
		moveLine(1, true);
		// d.gc("body").classList.add("body--in");
	});
	
	
	
	setBodyHeight();
	moveLine(1, true);
	d.gc("body").classList.add("body--in");
}
