L.LayerGroup.Named = L.LayerGroup.extend({
    addLayer: function (name, layer) {
        this._layers[name] = layer;
        if (this._map) {
            this._map.addLayer(layer);
        }
        return this;
    },
    removeLayer: function (name) {
        if (this._map && this._layers[name]) {
            this._map.removeLayer(this._layers[name]);
        }
        delete this._layers[name];
        return this;
    },
    getLayer: function (name) {
        return this._layers[name];
    }
});
L.layerGroup.named = function () {
    return new L.LayerGroup.Named();
};
