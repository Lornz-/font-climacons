/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'climacons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'climacons-Cloud-Download': '&#xe900;',
		'climacons-Cloud-Drizzle-Alt': '&#xe901;',
		'climacons-Cloud-Drizzle-Moon-Alt': '&#xe902;',
		'climacons-Cloud-Drizzle-Moon': '&#xe903;',
		'climacons-Cloud-Drizzle-Sun-Alt': '&#xe904;',
		'climacons-Cloud-Drizzle-Sun': '&#xe905;',
		'climacons-Cloud-Drizzle': '&#xe906;',
		'climacons-Cloud-Fog-Alt': '&#xe907;',
		'climacons-Cloud-Fog-Moon-Alt': '&#xe908;',
		'climacons-Cloud-Fog-Moon': '&#xe909;',
		'climacons-Cloud-Fog-Sun-Alt': '&#xe90a;',
		'climacons-Cloud-Fog-Sun': '&#xe90b;',
		'climacons-Cloud-Fog': '&#xe90c;',
		'climacons-Cloud-Hail-Alt': '&#xe90d;',
		'climacons-Cloud-Hail-Moon-Alt': '&#xe90e;',
		'climacons-Cloud-Hail-Moon': '&#xe90f;',
		'climacons-Cloud-Hail-Sun-Alt': '&#xe910;',
		'climacons-Cloud-Hail-Sun': '&#xe911;',
		'climacons-Cloud-Hail': '&#xe912;',
		'climacons-Cloud-Lightning-Moon': '&#xe913;',
		'climacons-Cloud-Lightning-Sun': '&#xe914;',
		'climacons-Cloud-Lightning': '&#xe915;',
		'climacons-Cloud-Moon': '&#xe916;',
		'climacons-Cloud-Rain-Alt': '&#xe917;',
		'climacons-Cloud-Rain-Moon-Alt': '&#xe918;',
		'climacons-Cloud-Rain-Moon': '&#xe919;',
		'climacons-Cloud-Rain-Sun-Alt': '&#xe91a;',
		'climacons-Cloud-Rain-Sun': '&#xe91b;',
		'climacons-Cloud-Rain': '&#xe91c;',
		'climacons-Cloud-Refresh': '&#xe91d;',
		'climacons-Cloud-Snow-Alt': '&#xe91e;',
		'climacons-Cloud-Snow-Moon-Alt': '&#xe91f;',
		'climacons-Cloud-Snow-Moon': '&#xe920;',
		'climacons-Cloud-Snow-Sun-Alt': '&#xe921;',
		'climacons-Cloud-Snow-Sun': '&#xe922;',
		'climacons-Cloud-Snow': '&#xe923;',
		'climacons-Cloud-Sun': '&#xe924;',
		'climacons-Cloud-Upload': '&#xe925;',
		'climacons-Cloud-Wind-Moon': '&#xe926;',
		'climacons-Cloud-Wind-Sun': '&#xe927;',
		'climacons-Cloud-Wind': '&#xe928;',
		'climacons-Cloud': '&#xe929;',
		'climacons-Compass-East': '&#xe92a;',
		'climacons-Compass-North': '&#xe92b;',
		'climacons-Compass-South': '&#xe92c;',
		'climacons-Compass-West': '&#xe92d;',
		'climacons-Compass': '&#xe92e;',
		'climacons-Degrees-Celcius': '&#xe92f;',
		'climacons-Degrees-Fahrenheit': '&#xe930;',
		'climacons-Moon-First-Quarter': '&#xe931;',
		'climacons-Moon-Full': '&#xe932;',
		'climacons-Moon-Last-Quarter': '&#xe933;',
		'climacons-Moon-New': '&#xe934;',
		'climacons-Moon-Waning-Crescent': '&#xe935;',
		'climacons-Moon-Waning-Gibbous': '&#xe936;',
		'climacons-Moon-Waxing-Crescent': '&#xe937;',
		'climacons-Moon-Waxing-Gibbous': '&#xe938;',
		'climacons-Moon': '&#xe939;',
		'climacons-Shades': '&#xe93a;',
		'climacons-Snowflake': '&#xe93b;',
		'climacons-Sun-Low': '&#xe93c;',
		'climacons-Sun-Lower': '&#xe93d;',
		'climacons-Sun': '&#xe93e;',
		'climacons-Sunrise': '&#xe93f;',
		'climacons-Sunset': '&#xe940;',
		'climacons-Thermometer-25': '&#xe941;',
		'climacons-Thermometer-50': '&#xe942;',
		'climacons-Thermometer-75': '&#xe943;',
		'climacons-Thermometer-100': '&#xe944;',
		'climacons-Thermometer-Zero': '&#xe945;',
		'climacons-Thermometer': '&#xe946;',
		'climacons-Tornado': '&#xe947;',
		'climacons-Umbrella': '&#xe948;',
		'climacons-Wind': '&#xe949;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/climacons-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
