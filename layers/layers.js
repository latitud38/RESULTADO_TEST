ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-73.020872, -36.826058, -73.007902, -36.817120]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_COORDEN_LOCALIZ_1 = new ol.format.GeoJSON();
var features_COORDEN_LOCALIZ_1 = format_COORDEN_LOCALIZ_1.readFeatures(json_COORDEN_LOCALIZ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_COORDEN_LOCALIZ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COORDEN_LOCALIZ_1.addFeatures(features_COORDEN_LOCALIZ_1);
cluster_COORDEN_LOCALIZ_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_COORDEN_LOCALIZ_1
});
var lyr_COORDEN_LOCALIZ_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_COORDEN_LOCALIZ_1, 
                style: style_COORDEN_LOCALIZ_1,
                popuplayertitle: 'COORDEN_LOCALIZ',
                interactive: true,
                title: '<img src="styles/legend/COORDEN_LOCALIZ_1.png" /> COORDEN_LOCALIZ'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_COORDEN_LOCALIZ_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_COORDEN_LOCALIZ_1];
lyr_COORDEN_LOCALIZ_1.set('fieldAliases', {'Name': 'Name', 'T_pregunta': 'T_pregunta', 'N_Preg_Inc': 'N_Preg_Inc', 'N_Preg_Cor': 'N_Preg_Cor', 'Por_Corr': 'Por_Corr', 'Por_Incor': 'Por_Incor', 'Porc_Total': 'Porc_Total', 'Preg_incor': 'Preg_incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_COORDEN_LOCALIZ_1.set('fieldImages', {'Name': 'TextEdit', 'T_pregunta': 'Range', 'N_Preg_Inc': 'Range', 'N_Preg_Cor': 'Range', 'Por_Corr': 'Range', 'Por_Incor': 'Range', 'Porc_Total': 'Range', 'Preg_incor': 'Range', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_COORDEN_LOCALIZ_1.set('fieldLabels', {'Name': 'inline label - always visible', 'T_pregunta': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'N_Preg_Cor': 'inline label - always visible', 'Por_Corr': 'inline label - visible with data', 'Por_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Preg_incor': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_COORDEN_LOCALIZ_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});