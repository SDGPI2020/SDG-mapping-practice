var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Bachelor_1 = new ol.format.GeoJSON();
var features_Bachelor_1 = format_Bachelor_1.readFeatures(json_Bachelor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bachelor_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bachelor_1.addFeatures(features_Bachelor_1);
var lyr_Bachelor_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bachelor_1, 
                style: style_Bachelor_1,
                interactive: true,
    title: 'Bachelor<br />\
    <img src="styles/legend/Bachelor_1_0.png" /> 0 - 11.1<br />\
    <img src="styles/legend/Bachelor_1_1.png" /> 11.1 - 18.1<br />\
    <img src="styles/legend/Bachelor_1_2.png" /> 18.1 - 25.2<br />\
    <img src="styles/legend/Bachelor_1_3.png" /> 25.2 - 32.6<br />\
    <img src="styles/legend/Bachelor_1_4.png" /> 32.6 - 54.7<br />'
        });
var format_Associate_2 = new ol.format.GeoJSON();
var features_Associate_2 = format_Associate_2.readFeatures(json_Associate_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Associate_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Associate_2.addFeatures(features_Associate_2);
var lyr_Associate_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Associate_2, 
                style: style_Associate_2,
                interactive: true,
    title: 'Associate<br />\
    <img src="styles/legend/Associate_2_0.png" /> 0 - 5.6<br />\
    <img src="styles/legend/Associate_2_1.png" /> 5.6 - 7.2<br />\
    <img src="styles/legend/Associate_2_2.png" /> 7.2 - 8.8<br />\
    <img src="styles/legend/Associate_2_3.png" /> 8.8 - 10.7<br />\
    <img src="styles/legend/Associate_2_4.png" /> 10.7 - 21.6<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Bachelor_1.setVisible(true);lyr_Associate_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Bachelor_1,lyr_Associate_2];
lyr_Bachelor_1.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'assoc_deg': 'assoc_deg', 'bach_deg': 'bach_deg', 'grad_prof': 'grad_prof', 'hs': 'hs', 'some_hs': 'some_hs', 'assoc_deg2': 'assoc_deg2', 'assoc_de_1': 'assoc_de_1', 'bach_deg2': 'bach_deg2', });
lyr_Associate_2.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'assoc_deg': 'assoc_deg', 'bach_deg': 'bach_deg', 'grad_prof': 'grad_prof', 'hs': 'hs', 'some_hs': 'some_hs', 'assoc_deg2': 'assoc_deg2', 'assoc_de_1': 'assoc_de_1', });
lyr_Bachelor_1.set('fieldImages', {'fid': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'GEO_ID': 'TextEdit', 'assoc_deg': 'TextEdit', 'bach_deg': 'TextEdit', 'grad_prof': 'TextEdit', 'hs': 'TextEdit', 'some_hs': 'TextEdit', 'assoc_deg2': 'TextEdit', 'assoc_de_1': 'TextEdit', 'bach_deg2': '', });
lyr_Associate_2.set('fieldImages', {'fid': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'GEO_ID': 'TextEdit', 'assoc_deg': 'TextEdit', 'bach_deg': 'TextEdit', 'grad_prof': 'TextEdit', 'hs': 'TextEdit', 'some_hs': 'TextEdit', 'assoc_deg2': 'TextEdit', 'assoc_de_1': 'TextEdit', });
lyr_Bachelor_1.set('fieldLabels', {'fid': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'GEO_ID': 'no label', 'assoc_deg': 'no label', 'bach_deg': 'no label', 'grad_prof': 'no label', 'hs': 'no label', 'some_hs': 'no label', 'assoc_deg2': 'no label', 'assoc_de_1': 'no label', 'bach_deg2': 'no label', });
lyr_Associate_2.set('fieldLabels', {'fid': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'GEO_ID': 'no label', 'assoc_deg': 'no label', 'bach_deg': 'no label', 'grad_prof': 'no label', 'hs': 'no label', 'some_hs': 'no label', 'assoc_deg2': 'no label', 'assoc_de_1': 'no label', });
lyr_Associate_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});