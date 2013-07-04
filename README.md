leaflet-layergroup-named
========================
Leaflet plugin for creating a layergroup with named layers. Great when you need to access layers regardless of context/Scope.
Released under MIT

Esample use:
var layergroup = new L.LayerGroup.Named();
layergroup.addLayer('name' , layer);
layergroup.getLayer('name');
layergroup.removeLayer('name');
