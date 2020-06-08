$(document).ready(function () {
	$.getJSON('/app/build/asset-manifest.json',
		function (j) {
			j.entrypoints.forEach(function (e) {
				if (e.indexOf('.css') > 0) {
					var fileref = document.createElement("link");
					fileref.rel = "stylesheet";
					fileref.type = "text/css";
					fileref.href = "/app/build/" + e;
					document.getElementsByTagName("head")[0].appendChild(fileref);
					return;
				}

				var bundle = document.createElement('script');
				bundle.setAttribute('type', "text/javascript");
				bundle.setAttribute('src', "/app/build/" + e);
				document.body.appendChild(bundle);
			});
		});
});