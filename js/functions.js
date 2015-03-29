function Color(r, g, b) {
	var opacity = 1;
	this.setOpacity = function(o) {
		if (o < 1 && o >= 0) {
			opacity = o;
		} else {
			opacity = 1;
		}
		return this;
	};
	this.toString = function() {
		return this.toRGBA();
	};
	this.toRGB = function() {
		return 'rgb(' + r + ',' + g + ',' + b + ')';
	};
	this.toRGBA = function() {
		return 'rgba(' + r + ',' + g + ',' + b + ', ' + opacity + ')';
	};
	this.toHex = function() {
		return '#' + r.toFullHex() + g.toFullHex() + b.toFullHex();
	};
	this.getRed = function() {
		return r;
	};
	this.getGreen = function() {
		return g;
	};
	this.getBlue = function() {
		return b;
	}
}

Number.prototype.toHex = function() {
	return this.toString(16);
};

Number.prototype.toFullHex = function() {
	var s = this.toString(16);
	if (s.length < 2) {
		return '0' + s;
	}
	return s;
};

$(function() {
	var isIphone = function() {
		return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) != null;
	}();

	var isImprintToggled = true;

	$('#showImprint').click(
			function(event) {
				$("#imprint").toggleClass("inv", isImprintToggled);
				if (!isIphone) {
					$("#banner").toggleClass("inv", !isImprintToggled);
				}
				isImprintToggled = !isImprintToggled;
				//event.de
			}).trigger('click');

});

function StorageData(name) {
	this.get = function(defaultValue){
		if(Modernizr.localstorage){
			var item = localStorage.getItem(name);
			if((item == undefined || item == null) && defaultValue != undefined){
				item = defaultValue;
			}
			if(!isNaN(item)){
				return parseInt(item);
			}
			return item;
		}
	};
	this.set = function(name, value){
		if(Modernizr.localstorage){
			localStorage.setItem(name, value);
			//console.debug(localStorage.getItem(name));
		}
	}
};

if (Modernizr.canvas && Modernizr.canvastext) {
	function draw(ctx, fillStyle, useShadow) {
		function setShadow() {
			if (useShadow) {
				ctx.shadowOffsetX = 1;
				ctx.shadowOffsetY = 1;
				ctx.shadowBlur = 1;
				ctx.shadowColor = "white";
			}
		}

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.save();
		setShadow();
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(29.8, 30.7);
		ctx.bezierCurveTo(29.8, 33.0, 29.4, 34.9, 28.7, 36.5);
		ctx.bezierCurveTo(27.9, 38.1, 26.9, 39.4, 25.6, 40.5);
		ctx.bezierCurveTo(24.3, 41.5, 22.7, 42.3, 21.0, 42.8);
		ctx.bezierCurveTo(19.2, 43.3, 17.3, 43.6, 15.2, 43.6);
		ctx.bezierCurveTo(13.1, 43.6, 11.1, 43.3, 9.3, 42.8);
		ctx.bezierCurveTo(7.5, 42.2, 5.8, 41.4, 4.5, 40.3);
		ctx.bezierCurveTo(3.1, 39.2, 2.0, 37.8, 1.2, 36.2);
		ctx.bezierCurveTo(0.4, 34.5, 0.0, 32.6, 0.0, 30.3);
		ctx.lineTo(0.0, 28.9);
		ctx.lineTo(10.8, 28.9);
		ctx.bezierCurveTo(10.8, 29.6, 10.8, 30.3, 11.0, 30.9);
		ctx.bezierCurveTo(11.1, 31.6, 11.4, 32.2, 11.7, 32.8);
		ctx.bezierCurveTo(12.1, 33.3, 12.5, 33.7, 13.1, 34.1);
		ctx.bezierCurveTo(13.6, 34.4, 14.3, 34.6, 15.1, 34.6);
		ctx.bezierCurveTo(16.2, 34.6, 17.2, 34.2, 18.0, 33.5);
		ctx.bezierCurveTo(18.8, 32.7, 19.2, 31.7, 19.2, 30.6);
		ctx.bezierCurveTo(19.2, 29.9, 19.1, 29.4, 18.8, 28.9);
		ctx.bezierCurveTo(18.6, 28.4, 18.2, 28.0, 17.8, 27.6);
		ctx.bezierCurveTo(17.3, 27.3, 16.8, 27.0, 16.3, 26.7);
		ctx.bezierCurveTo(15.8, 26.5, 15.3, 26.2, 14.8, 26.0);
		ctx.bezierCurveTo(13.0, 25.3, 11.3, 24.6, 9.6, 23.9);
		ctx.bezierCurveTo(7.9, 23.2, 6.3, 22.3, 4.9, 21.1);
		ctx.bezierCurveTo(3.6, 20.0, 2.5, 18.7, 1.8, 17.2);
		ctx.bezierCurveTo(1.0, 15.7, 0.6, 14.1, 0.6, 12.4);
		ctx.bezierCurveTo(0.6, 10.4, 1.1, 8.7, 1.9, 7.1);
		ctx.bezierCurveTo(2.8, 5.6, 3.9, 4.3, 5.3, 3.2);
		ctx.bezierCurveTo(6.7, 2.2, 8.2, 1.4, 10.0, 0.8);
		ctx.bezierCurveTo(11.8, 0.3, 13.5, 0.0, 15.3, 0.0);
		ctx.bezierCurveTo(17.4, 0.0, 19.5, 0.4, 21.6, 1.2);
		ctx.bezierCurveTo(23.6, 1.9, 25.3, 3.1, 26.7, 4.8);
		ctx.bezierCurveTo(27.8, 6.1, 28.5, 7.4, 28.9, 8.6);
		ctx.bezierCurveTo(29.2, 9.8, 29.4, 11.3, 29.5, 13.0);
		ctx.lineTo(18.9, 13.0);
		ctx.bezierCurveTo(18.8, 11.8, 18.4, 10.8, 17.8, 10.1);
		ctx.bezierCurveTo(17.3, 9.4, 16.4, 9.0, 15.1, 9.0);
		ctx.bezierCurveTo(14.2, 9.0, 13.3, 9.3, 12.5, 9.9);
		ctx.bezierCurveTo(11.7, 10.5, 11.3, 11.2, 11.3, 12.2);
		ctx.bezierCurveTo(11.3, 13.3, 11.7, 14.1, 12.4, 14.8);
		ctx.bezierCurveTo(13.2, 15.4, 14.0, 15.9, 14.9, 16.3);
		ctx.bezierCurveTo(16.6, 17.1, 18.4, 17.9, 20.1, 18.7);
		ctx.bezierCurveTo(21.9, 19.4, 23.5, 20.3, 24.9, 21.4);
		ctx.bezierCurveTo(26.4, 22.4, 27.5, 23.7, 28.5, 25.2);
		ctx.bezierCurveTo(29.4, 26.7, 29.8, 28.5, 29.8, 30.7);
		ctx.closePath();
		ctx.fillStyle = fillStyle;
		ctx.fill();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(73.7, 33.9);
		ctx.bezierCurveTo(72.3, 35.9, 70.8, 37.6, 68.9, 39.1);
		ctx.bezierCurveTo(67.1, 40.5, 65.0, 41.6, 62.7, 42.4);
		ctx.bezierCurveTo(60.4, 43.2, 58.0, 43.6, 55.4, 43.6);
		ctx.bezierCurveTo(52.3, 43.6, 49.5, 43.0, 46.8, 41.9);
		ctx.bezierCurveTo(44.1, 40.7, 41.8, 39.2, 39.8, 37.3);
		ctx.bezierCurveTo(37.8, 35.3, 36.2, 33.0, 35.1, 30.3);
		ctx.bezierCurveTo(33.9, 27.7, 33.3, 24.8, 33.3, 21.7);
		ctx.bezierCurveTo(33.3, 18.6, 33.9, 15.8, 35.0, 13.1);
		ctx.bezierCurveTo(36.2, 10.5, 37.7, 8.2, 39.7, 6.3);
		ctx.bezierCurveTo(41.7, 4.3, 44.0, 2.8, 46.7, 1.7);
		ctx.bezierCurveTo(49.3, 0.6, 52.2, 0.0, 55.3, 0.0);
		ctx.bezierCurveTo(59.2, 0.0, 62.7, 0.9, 65.9, 2.6);
		ctx.bezierCurveTo(69.1, 4.3, 71.8, 6.9, 73.9, 10.1);
		ctx.bezierCurveTo(74.7, 11.3, 75.3, 12.4, 75.7, 13.3);
		ctx.bezierCurveTo(76.1, 14.2, 76.4, 15.4, 76.6, 16.8);
		ctx.lineTo(65.4, 16.8);
		ctx.bezierCurveTo(64.6, 14.6, 63.2, 12.8, 61.5, 11.5);
		ctx.bezierCurveTo(59.7, 10.1, 57.6, 9.4, 55.2, 9.4);
		ctx.bezierCurveTo(53.5, 9.4, 51.9, 9.8, 50.6, 10.4);
		ctx.bezierCurveTo(49.2, 11.1, 48.0, 12.0, 47.1, 13.1);
		ctx.bezierCurveTo(46.1, 14.3, 45.3, 15.6, 44.8, 17.0);
		ctx.bezierCurveTo(44.3, 18.5, 44.0, 20.1, 44.0, 21.7);
		ctx.bezierCurveTo(44.0, 23.3, 44.3, 24.9, 44.8, 26.4);
		ctx.bezierCurveTo(45.3, 27.9, 46.1, 29.2, 47.1, 30.3);
		ctx.bezierCurveTo(48.0, 31.5, 49.2, 32.4, 50.6, 33.1);
		ctx.bezierCurveTo(52.0, 33.8, 53.5, 34.1, 55.3, 34.1);
		ctx.bezierCurveTo(57.7, 34.1, 59.7, 33.5, 61.4, 32.2);
		ctx.bezierCurveTo(63.0, 30.9, 64.4, 29.2, 65.4, 27.1);
		ctx.lineTo(76.6, 27.1);
		ctx.bezierCurveTo(76.0, 29.6, 75.0, 31.8, 73.7, 33.9);
		ctx.closePath();
		ctx.fill();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(106.6, 42.8);
		ctx.lineTo(106.6, 26.0);
		ctx.lineTo(92.9, 26.0);
		ctx.lineTo(92.9, 42.8);
		ctx.lineTo(82.2, 42.8);
		ctx.lineTo(82.2, 0.8);
		ctx.lineTo(92.9, 0.8);
		ctx.lineTo(92.9, 16.5);
		ctx.lineTo(106.6, 16.5);
		ctx.lineTo(106.6, 0.8);
		ctx.lineTo(117.3, 0.8);
		ctx.lineTo(117.3, 42.8);
		ctx.lineTo(106.6, 42.8);
		ctx.closePath();
		ctx.fill();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(156.0, 29.8);
		ctx.bezierCurveTo(155.9, 30.9, 155.7, 32.0, 155.4, 33.1);
		ctx.bezierCurveTo(155.1, 34.2, 154.7, 35.2, 154.1, 36.2);
		ctx.bezierCurveTo(153.6, 37.2, 152.9, 38.1, 152.0, 39.0);
		ctx.bezierCurveTo(150.4, 40.7, 148.6, 41.8, 146.5, 42.5);
		ctx.bezierCurveTo(144.5, 43.2, 142.4, 43.6, 140.1, 43.6);
		ctx.bezierCurveTo(137.8, 43.6, 135.7, 43.2, 133.6, 42.5);
		ctx.bezierCurveTo(131.6, 41.8, 129.7, 40.7, 128.1, 39.1);
		ctx.bezierCurveTo(127.2, 38.1, 126.4, 37.2, 125.8, 36.2);
		ctx.bezierCurveTo(125.3, 35.3, 124.9, 34.2, 124.6, 33.2);
		ctx.bezierCurveTo(124.3, 32.2, 124.1, 31.1, 124.1, 29.9);
		ctx.bezierCurveTo(124.0, 28.7, 123.9, 27.5, 123.9, 26.2);
		ctx.lineTo(123.9, 0.8);
		ctx.lineTo(134.6, 0.8);
		ctx.lineTo(134.6, 26.2);
		ctx.bezierCurveTo(134.6, 27.2, 134.7, 28.2, 134.8, 29.1);
		ctx.bezierCurveTo(134.9, 30.1, 135.2, 30.9, 135.6, 31.7);
		ctx.bezierCurveTo(135.9, 32.4, 136.5, 33.0, 137.2, 33.5);
		ctx.bezierCurveTo(137.9, 33.9, 138.9, 34.1, 140.1, 34.1);
		ctx.bezierCurveTo(141.3, 34.1, 142.3, 33.9, 143.0, 33.5);
		ctx.bezierCurveTo(143.8, 33.0, 144.3, 32.5, 144.6, 31.7);
		ctx.bezierCurveTo(145.0, 31.0, 145.2, 30.1, 145.3, 29.2);
		ctx.bezierCurveTo(145.4, 28.2, 145.4, 27.2, 145.4, 26.2);
		ctx.lineTo(145.4, 0.8);
		ctx.lineTo(156.1, 0.8);
		ctx.lineTo(156.1, 26.2);
		ctx.bezierCurveTo(156.1, 27.5, 156.1, 28.7, 156.0, 29.8);
		ctx.closePath();
		ctx.fill();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(162.8, 42.8);
		ctx.lineTo(162.8, 0.8);
		ctx.lineTo(173.5, 0.8);
		ctx.lineTo(173.5, 33.3);
		ctx.lineTo(185.9, 33.3);
		ctx.lineTo(185.9, 42.8);
		ctx.lineTo(162.8, 42.8);
		ctx.closePath();
		ctx.fill();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(203.9, 10.2);
		ctx.lineTo(203.9, 42.8);
		ctx.lineTo(193.2, 42.8);
		ctx.lineTo(193.2, 10.2);
		ctx.lineTo(184.9, 10.2);
		ctx.lineTo(184.9, 0.8);
		ctx.lineTo(212.2, 0.8);
		ctx.lineTo(212.2, 10.2);
		ctx.lineTo(203.9, 10.2);
		ctx.closePath();
		ctx.fill();

		// ebene1/Gruppe/Gruppe/Gruppe
		ctx.restore();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.save();
		setShadow();
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(209.8, 42.9);
		ctx.lineTo(209.8, 33.3);
		ctx.lineTo(219.6, 33.3);
		ctx.lineTo(219.6, 42.9);
		ctx.lineTo(209.8, 42.9);
		ctx.closePath();
		ctx.fillStyle = fillStyle;
		ctx.fill();

		// ebene1/Gruppe/Gruppe
		ctx.restore();
		ctx.restore();

		// ebene1/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.save();
		setShadow();
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(228.1, 6.0);
		ctx.lineTo(228.1, 0.9);
		ctx.lineTo(229.3, 0.9);
		ctx.lineTo(229.3, 6.0);
		ctx.lineTo(228.1, 6.0);
		ctx.closePath();

		// ebene1/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(228.1, 42.7);
		ctx.lineTo(228.1, 12.7);
		ctx.lineTo(229.3, 12.7);
		ctx.lineTo(229.3, 42.7);
		ctx.lineTo(228.1, 42.7);
		ctx.closePath();
		ctx.fillStyle = fillStyle;
		ctx.fill();

		// ebene1/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(257.7, 42.7);
		ctx.lineTo(257.7, 26.2);
		ctx.bezierCurveTo(257.7, 24.3, 257.5, 22.6, 257.0, 21.1);
		ctx.bezierCurveTo(256.5, 19.5, 255.9, 18.2, 255.0, 17.0);
		ctx.bezierCurveTo(254.2, 15.9, 253.2, 15.0, 252.0, 14.4);
		ctx.bezierCurveTo(250.8, 13.8, 249.4, 13.5, 247.9, 13.5);
		ctx.bezierCurveTo(246.6, 13.5, 245.4, 13.8, 244.2, 14.3);
		ctx.bezierCurveTo(243.0, 14.9, 241.9, 15.7, 241.0, 16.9);
		ctx.bezierCurveTo(239.9, 18.2, 239.2, 19.5, 238.9, 20.8);
		ctx.bezierCurveTo(238.6, 22.1, 238.5, 23.7, 238.5, 25.5);
		ctx.lineTo(238.5, 42.7);
		ctx.lineTo(237.2, 42.7);
		ctx.lineTo(237.2, 12.7);
		ctx.lineTo(238.5, 12.7);
		ctx.lineTo(238.5, 18.4);
		ctx.bezierCurveTo(238.8, 17.3, 239.4, 16.4, 240.1, 15.6);
		ctx.bezierCurveTo(240.8, 14.8, 241.6, 14.1, 242.5, 13.6);
		ctx.bezierCurveTo(243.3, 13.0, 244.2, 12.7, 245.2, 12.4);
		ctx.bezierCurveTo(246.1, 12.1, 247.1, 12.0, 247.9, 12.0);
		ctx.bezierCurveTo(249.4, 12.0, 250.9, 12.3, 252.4, 13.1);
		ctx.bezierCurveTo(253.9, 13.9, 255.2, 14.9, 256.3, 16.2);
		ctx.bezierCurveTo(257.3, 17.6, 258.1, 19.2, 258.4, 20.8);
		ctx.bezierCurveTo(258.8, 22.5, 258.9, 24.3, 258.9, 26.2);
		ctx.lineTo(258.9, 42.7);
		ctx.lineTo(257.7, 42.7);
		ctx.closePath();
		ctx.fill();

		// ebene1/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(267.9, 14.2);
		ctx.lineTo(267.9, 42.7);
		ctx.lineTo(266.6, 42.7);
		ctx.lineTo(266.6, 14.2);
		ctx.lineTo(262.7, 14.2);
		ctx.lineTo(262.7, 12.7);
		ctx.lineTo(266.6, 12.7);
		ctx.lineTo(266.6, 10.8);
		ctx.bezierCurveTo(266.6, 9.1, 266.8, 7.5, 267.2, 6.2);
		ctx.bezierCurveTo(267.5, 4.9, 268.3, 3.8, 269.5, 2.8);
		ctx.bezierCurveTo(270.2, 2.2, 270.9, 1.8, 271.7, 1.6);
		ctx.bezierCurveTo(272.4, 1.3, 273.2, 1.2, 274.0, 1.1);
		ctx.lineTo(274.0, 2.9);
		ctx.bezierCurveTo(272.0, 3.1, 270.5, 3.8, 269.5, 5.0);
		ctx.bezierCurveTo(268.4, 6.3, 267.9, 8.2, 267.9, 10.8);
		ctx.lineTo(267.9, 12.7);
		ctx.lineTo(274.0, 12.7);
		ctx.lineTo(274.0, 14.2);
		ctx.lineTo(267.9, 14.2);
		ctx.closePath();
		ctx.fill();

		// ebene1/Gruppe/Gruppe/Zusammengesetzter Pfad
		ctx.beginPath();

		// ebene1/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(298.7, 27.7);
		ctx.bezierCurveTo(298.7, 29.8, 298.4, 31.9, 297.8, 33.8);
		ctx.bezierCurveTo(297.2, 35.7, 296.3, 37.4, 295.2, 38.8);
		ctx.bezierCurveTo(294.2, 40.3, 292.9, 41.4, 291.5, 42.2);
		ctx.bezierCurveTo(290.0, 43.1, 288.5, 43.5, 286.8, 43.5);
		ctx.bezierCurveTo(285.3, 43.5, 283.8, 43.1, 282.3, 42.2);
		ctx.bezierCurveTo(280.9, 41.4, 279.7, 40.3, 278.6, 38.9);
		ctx.bezierCurveTo(277.6, 37.5, 276.8, 35.8, 276.1, 33.9);
		ctx.bezierCurveTo(275.5, 32.0, 275.2, 30.0, 275.2, 27.9);
		ctx.bezierCurveTo(275.2, 25.7, 275.5, 23.6, 276.1, 21.7);
		ctx.bezierCurveTo(276.7, 19.7, 277.5, 18.0, 278.6, 16.6);
		ctx.bezierCurveTo(279.6, 15.2, 280.9, 14.1, 282.3, 13.2);
		ctx.bezierCurveTo(283.7, 12.4, 285.2, 12.0, 286.9, 12.0);
		ctx.bezierCurveTo(288.5, 12.0, 290.0, 12.4, 291.5, 13.2);
		ctx.bezierCurveTo(292.9, 14.0, 294.2, 15.1, 295.2, 16.5);
		ctx.bezierCurveTo(296.3, 17.9, 297.2, 19.6, 297.8, 21.5);
		ctx.bezierCurveTo(298.4, 23.4, 298.7, 25.5, 298.7, 27.7);
		ctx.closePath();

		// ebene1/Gruppe/Gruppe/Zusammengesetzter Pfad/Pfad
		ctx.moveTo(297.6, 27.7);
		ctx.bezierCurveTo(297.6, 25.8, 297.3, 23.9, 296.7, 22.2);
		ctx.bezierCurveTo(296.2, 20.5, 295.4, 19.0, 294.5, 17.7);
		ctx.bezierCurveTo(293.5, 16.4, 292.4, 15.4, 291.1, 14.6);
		ctx.bezierCurveTo(289.9, 13.9, 288.5, 13.5, 287.0, 13.5);
		ctx.bezierCurveTo(285.5, 13.5, 284.1, 13.9, 282.8, 14.6);
		ctx.bezierCurveTo(281.5, 15.4, 280.4, 16.4, 279.5, 17.6);
		ctx.bezierCurveTo(278.5, 18.9, 277.7, 20.4, 277.2, 22.1);
		ctx.bezierCurveTo(276.6, 23.9, 276.4, 25.7, 276.4, 27.7);
		ctx.bezierCurveTo(276.4, 29.7, 276.6, 31.5, 277.2, 33.3);
		ctx.bezierCurveTo(277.7, 35.0, 278.5, 36.5, 279.4, 37.8);
		ctx.bezierCurveTo(280.4, 39.1, 281.5, 40.1, 282.8, 40.9);
		ctx.bezierCurveTo(284.1, 41.6, 285.5, 42.0, 286.9, 42.0);
		ctx.bezierCurveTo(288.4, 42.0, 289.8, 41.6, 291.1, 40.9);
		ctx.bezierCurveTo(292.4, 40.1, 293.5, 39.1, 294.4, 37.8);
		ctx.bezierCurveTo(295.4, 36.5, 296.2, 35.0, 296.7, 33.3);
		ctx.bezierCurveTo(297.3, 31.5, 297.6, 29.7, 297.6, 27.7);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}

	$(function() {
		function render(color) {
			context.clearRect(0, 0, canvas.width, canvas.height);
			draw(context, color + '', true);
			//draw(context, (new Color(0, 0, 0)) + '', true);
			var gradient = context.createLinearGradient(0, 0, 0, 44);
			gradient.addColorStop("0", (new Color(255, 255, 255)).setOpacity(.8));
			gradient.addColorStop(".45", (new Color(255, 255, 255)).setOpacity(.3));
			gradient.addColorStop(".5", (new Color(255, 255, 255)).setOpacity(0));
			draw(context, gradient, false);
			nav.css('background', color.toRGB());
			h1.css('color', color.toRGB());
			store.red.set('red', color.getRed());
			store.green.set('green', color.getGreen());
			store.blue.set('blue', color.getBlue());
			store.state.set('state', state);
		}


		var red = 0, green = 0, blue = 0, state = 0;

		var store = {
			red: new StorageData('red'),
			green: new StorageData('green'),
			blue: new StorageData('blue'),
			state: new StorageData('state')
		};

		if(Modernizr.localstorage){
			red = store.red.get(red);
			green = store.green.get(green);
			blue = store.blue.get(blue);
			state = store.state.get(state);
		}

		var canvas = $('#logo canvas:first')[0];
		var nav = $('#nav, #imprint > div');
		var h1 = $('h1');
		var context = canvas.getContext('2d');
		var speed = 1;

		$(canvas).click(function() {
			var color = new Color(red, green, blue);

		});

		function animationLoop() {
			var doAnimationLoop = true;

			if (state == 0) {
				if (blue != 0 || green != 255) {
					if (blue != 0)
						blue--;
					if (green != 255)
						green ++;
					if (blue == 0 && green == 255) {
						state = 1
					}
				}
			}

			if (state == 1) {
				if (red != 255) {
					red ++;
					if (red == 255) {
						state = 2
					}

				}
			}

			if (state == 2) {
				if (green != 0) {
					green --;
					if (green == 0) {
						state = 3
					}

				}
			}

			if (state == 3) {
				if (blue != 255) {
					blue ++;
					if (blue == 255) {
						state = 4
					}

				}
			}

			if (state == 4) {
				if (red != 0) {
					red --;
					if (red == 0) {
						state = 0
					}

				}
			}

			render(new Color(red, green, blue));

			if (doAnimationLoop) {
				setTimeout(function() {
					animationLoop();
				}, speed);
			}
		}

		animationLoop();

	});
}
