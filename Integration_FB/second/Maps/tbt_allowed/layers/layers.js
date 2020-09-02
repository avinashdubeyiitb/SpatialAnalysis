ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([52.976748, 5.996287, 112.528227, 37.835692]);
var wms_layers = [];

var format_States_0 = new ol.format.GeoJSON();
var features_States_0 = format_States_0.readFeatures(json_States_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_States_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_States_0.addFeatures(features_States_0);
var lyr_States_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_States_0, 
                style: style_States_0,
                interactive: false,
                title: '<img src="styles/legend/States_0.png" /> States'
            });
var format_district_map_1 = new ol.format.GeoJSON();
var features_district_map_1 = format_district_map_1.readFeatures(json_district_map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_district_map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_district_map_1.addFeatures(features_district_map_1);
var lyr_district_map_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_district_map_1, 
                style: style_district_map_1,
                interactive: false,
                title: '<img src="styles/legend/district_map_1.png" /> district_map'
            });
var format_tbt_allowed_final_2 = new ol.format.GeoJSON();
var features_tbt_allowed_final_2 = format_tbt_allowed_final_2.readFeatures(json_tbt_allowed_final_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tbt_allowed_final_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tbt_allowed_final_2.addFeatures(features_tbt_allowed_final_2);
var lyr_tbt_allowed_final_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tbt_allowed_final_2, 
                style: style_tbt_allowed_final_2,
                interactive: true,
    title: 'tbt_allowed_final<br />\
    <img src="styles/legend/tbt_allowed_final_2_0.png" /> 1 - 1<br />\
    <img src="styles/legend/tbt_allowed_final_2_1.png" /> 1 - 4.2<br />\
    <img src="styles/legend/tbt_allowed_final_2_2.png" /> 4.2 - 5.8<br />\
    <img src="styles/legend/tbt_allowed_final_2_3.png" /> 5.8 - 6<br />\
    <img src="styles/legend/tbt_allowed_final_2_4.png" /> 6 - 7<br />\
    <img src="styles/legend/tbt_allowed_final_2_5.png" /> 7 - 9.6<br />\
    <img src="styles/legend/tbt_allowed_final_2_6.png" /> 9.6 - 14.2<br />\
    <img src="styles/legend/tbt_allowed_final_2_7.png" /> 14.2 - 15<br />\
    <img src="styles/legend/tbt_allowed_final_2_8.png" /> 15 - 18.4<br />\
    <img src="styles/legend/tbt_allowed_final_2_9.png" /> 18.4 - 28<br />\
    <img src="styles/legend/tbt_allowed_final_2_10.png" /> 28 - 41.6<br />\
    <img src="styles/legend/tbt_allowed_final_2_11.png" /> 41.6 - 46.2<br />\
    <img src="styles/legend/tbt_allowed_final_2_12.png" /> 46.2 - 67<br />\
    <img src="styles/legend/tbt_allowed_final_2_13.png" /> 67 - 93.6<br />\
    <img src="styles/legend/tbt_allowed_final_2_14.png" /> 93.6 - 143<br />'
        });
var format_final_elsi_map_databse_3 = new ol.format.GeoJSON();
var features_final_elsi_map_databse_3 = format_final_elsi_map_databse_3.readFeatures(json_final_elsi_map_databse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_final_elsi_map_databse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_final_elsi_map_databse_3.addFeatures(features_final_elsi_map_databse_3);
var lyr_final_elsi_map_databse_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_final_elsi_map_databse_3, 
                style: style_final_elsi_map_databse_3,
                interactive: true,
    title: 'final_elsi_map_databse<br />\
    <img src="styles/legend/final_elsi_map_databse_3_0.png" /> 0 - 0<br />\
    <img src="styles/legend/final_elsi_map_databse_3_1.png" /> 0 - 16<br />'
        });

lyr_States_0.setVisible(true);lyr_district_map_1.setVisible(true);lyr_tbt_allowed_final_2.setVisible(true);lyr_final_elsi_map_databse_3.setVisible(true);
var layersList = [lyr_States_0,lyr_district_map_1,lyr_tbt_allowed_final_2,lyr_final_elsi_map_databse_3];
lyr_States_0.set('fieldAliases', {'ST_NM': 'ST_NM', });
lyr_district_map_1.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'ST_NM': 'ST_NM', 'ST_CEN_CD': 'ST_CEN_CD', 'DT_CEN_CD': 'DT_CEN_CD', 'censuscode': 'censuscode', });
lyr_tbt_allowed_final_2.set('fieldAliases', {'ST_NM': 'ST_NM', 'count(d.tbt_allowed)': 'count(d.tbt_allowed)', });
lyr_final_elsi_map_databse_3.set('fieldAliases', {'id': 'id', 'clg_code': 'clg_code', 'elsi_clg_id': 'elsi_clg_id', 'college_name': 'college_name', 'state': 'state', 'district': 'district', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'robots_given': 'robots_given', 'eyrtc_allowed': 'eyrtc_allowed', 'eyrtc_score': 'eyrtc_score', 'tbt_allowed': 'tbt_allowed', 'completed': 'completed', 'wo_attend': 'wo_attend', 'lab_inaugurated': 'lab_inaugurated', });
lyr_States_0.set('fieldImages', {'ST_NM': 'TextEdit', });
lyr_district_map_1.set('fieldImages', {'DISTRICT': 'TextEdit', 'ST_NM': 'TextEdit', 'ST_CEN_CD': 'Range', 'DT_CEN_CD': 'Range', 'censuscode': 'TextEdit', });
lyr_tbt_allowed_final_2.set('fieldImages', {'ST_NM': 'TextEdit', 'count(d.tbt_allowed)': 'Range', });
lyr_final_elsi_map_databse_3.set('fieldImages', {'id': 'Range', 'clg_code': 'TextEdit', 'elsi_clg_id': 'Range', 'college_name': 'TextEdit', 'state': 'TextEdit', 'district': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'robots_given': 'Range', 'eyrtc_allowed': 'Range', 'eyrtc_score': 'Range', 'tbt_allowed': 'Range', 'completed': 'Range', 'wo_attend': 'Range', 'lab_inaugurated': 'Range', });
lyr_States_0.set('fieldLabels', {'ST_NM': 'header label', });
lyr_district_map_1.set('fieldLabels', {'DISTRICT': 'header label', 'ST_NM': 'header label', 'ST_CEN_CD': 'header label', 'DT_CEN_CD': 'header label', 'censuscode': 'header label', });
lyr_tbt_allowed_final_2.set('fieldLabels', {'ST_NM': 'header label', 'count(d.tbt_allowed)': 'header label', });
lyr_final_elsi_map_databse_3.set('fieldLabels', {'id': 'header label', 'clg_code': 'header label', 'elsi_clg_id': 'header label', 'college_name': 'header label', 'state': 'header label', 'district': 'header label', 'Latitude': 'header label', 'Longitude': 'header label', 'robots_given': 'header label', 'eyrtc_allowed': 'header label', 'eyrtc_score': 'header label', 'tbt_allowed': 'header label', 'completed': 'header label', 'wo_attend': 'header label', 'lab_inaugurated': 'header label', });
lyr_final_elsi_map_databse_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});