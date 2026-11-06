var wms_layers = [];

var lyr_basemapdeWebRasterFarbe_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sgx.geodatenzentrum.de/wms_basemapde?Version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "de_basemapde_web_raster_farbe",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'basemap.de Web Raster Farbe',
                            popuplayertitle: 'basemap.de Web Raster Farbe',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_basemapdeWebRasterFarbe_0, 0]);
var format_kreis_1 = new ol.format.GeoJSON();
var features_kreis_1 = format_kreis_1.readFeatures(json_kreis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kreis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kreis_1.addFeatures(features_kreis_1);
var lyr_kreis_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kreis_1, 
                style: style_kreis_1,
                popuplayertitle: 'kreis',
                interactive: true,
                title: '<img src="styles/legend/kreis_1.png" /> kreis'
            });
var format_linie_2 = new ol.format.GeoJSON();
var features_linie_2 = format_linie_2.readFeatures(json_linie_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linie_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linie_2.addFeatures(features_linie_2);
var lyr_linie_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linie_2, 
                style: style_linie_2,
                popuplayertitle: 'linie',
                interactive: true,
                title: '<img src="styles/legend/linie_2.png" /> linie'
            });
var format_punkte_3 = new ol.format.GeoJSON();
var features_punkte_3 = format_punkte_3.readFeatures(json_punkte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_punkte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_punkte_3.addFeatures(features_punkte_3);
var lyr_punkte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_punkte_3, 
                style: style_punkte_3,
                popuplayertitle: 'punkte',
                interactive: true,
                title: '<img src="styles/legend/punkte_3.png" /> punkte'
            });

lyr_basemapdeWebRasterFarbe_0.setVisible(true);lyr_kreis_1.setVisible(true);lyr_linie_2.setVisible(true);lyr_punkte_3.setVisible(true);
var layersList = [lyr_basemapdeWebRasterFarbe_0,lyr_kreis_1,lyr_linie_2,lyr_punkte_3];
lyr_kreis_1.set('fieldAliases', {'id': 'id', 'Sperrzone': 'Sperrzone', 'Areal': 'Areal', });
lyr_linie_2.set('fieldAliases', {'id': 'id', 'Kürzel': 'Kürzel', 'Länge': 'Länge', });
lyr_punkte_3.set('fieldAliases', {'id': 'id', 'Anzahl SW': 'Anzahl SW', 'Anmerkunge': 'Anmerkunge', });
lyr_kreis_1.set('fieldImages', {'id': '', 'Sperrzone': '', 'Areal': '', });
lyr_linie_2.set('fieldImages', {'id': 'TextEdit', 'Kürzel': '', 'Länge': '', });
lyr_punkte_3.set('fieldImages', {'id': 'TextEdit', 'Anzahl SW': '', 'Anmerkunge': '', });
lyr_kreis_1.set('fieldLabels', {'id': 'no label', 'Sperrzone': 'no label', 'Areal': 'no label', });
lyr_linie_2.set('fieldLabels', {'id': 'no label', 'Kürzel': 'inline label - always visible', 'Länge': 'inline label - visible with data', });
lyr_punkte_3.set('fieldLabels', {'id': 'hidden field', 'Anzahl SW': 'inline label - visible with data', 'Anmerkunge': 'inline label - visible with data', });
lyr_punkte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});