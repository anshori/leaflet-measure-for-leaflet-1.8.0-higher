// Source from https://github.com/ljagis/leaflet-measure/issues/171#issuecomment-1137483548
L.Control.Measure.include({
	// set icon on the capture marker
	_setCaptureMarkerIcon: function () {
		// disable autopan
		this._captureMarker.options.autoPanOnFocus = false;

		// default function
		this._captureMarker.setIcon(
			L.divIcon({
				iconSize: this._map.getSize().multiplyBy(2)
			})
		);
	},
});