ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([51.140430, 7.859897, 108.207876, 38.371205]);
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
                interactive: true,
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
                interactive: true,
                title: '<img src="styles/legend/district_map_1.png" /> district_map'
            });
var format_wo_attended_map_2 = new ol.format.GeoJSON();
var features_wo_attended_map_2 = format_wo_attended_map_2.readFeatures(json_wo_attended_map_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_wo_attended_map_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wo_attended_map_2.addFeatures(features_wo_attended_map_2);
var lyr_wo_attended_map_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wo_attended_map_2, 
                style: style_wo_attended_map_2,
                interactive: true,
    title: 'wo_attended_map<br />\
    <img src="styles/legend/wo_attended_map_2_0.png" /> 1 - 1.73<br />\
    <img src="styles/legend/wo_attended_map_2_1.png" /> 1.73 - 2.93<br />\
    <img src="styles/legend/wo_attended_map_2_2.png" /> 2.93 - 5.6<br />\
    <img src="styles/legend/wo_attended_map_2_3.png" /> 5.6 - 8<br />\
    <img src="styles/legend/wo_attended_map_2_4.png" /> 8 - 9.67<br />\
    <img src="styles/legend/wo_attended_map_2_5.png" /> 9.67 - 13.4<br />\
    <img src="styles/legend/wo_attended_map_2_6.png" /> 13.4 - 15.93<br />\
    <img src="styles/legend/wo_attended_map_2_7.png" /> 15.93 - 22<br />\
    <img src="styles/legend/wo_attended_map_2_8.png" /> 22 - 27.8<br />\
    <img src="styles/legend/wo_attended_map_2_9.png" /> 27.8 - 38<br />\
    <img src="styles/legend/wo_attended_map_2_10.png" /> 38 - 60<br />\
    <img src="styles/legend/wo_attended_map_2_11.png" /> 60 - 70.4<br />\
    <img src="styles/legend/wo_attended_map_2_12.png" /> 70.4 - 97.73<br />\
    <img src="styles/legend/wo_attended_map_2_13.png" /> 97.73 - 142.93<br />\
    <img src="styles/legend/wo_attended_map_2_14.png" /> 142.93 - 217<br />'
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
    <img src="styles/legend/final_elsi_map_databse_3_1.png" /> 1 - 1<br />'
        });

lyr_States_0.setVisible(true);lyr_district_map_1.setVisible(true);lyr_wo_attended_map_2.setVisible(true);lyr_final_elsi_map_databse_3.setVisible(true);
var layersList = [lyr_States_0,lyr_district_map_1,lyr_wo_attended_map_2,lyr_final_elsi_map_databse_3];
lyr_States_0.set('fieldAliases', {'ST_NM': 'ST_NM', });
lyr_district_map_1.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'ST_NM': 'ST_NM', 'ST_CEN_CD': 'ST_CEN_CD', 'DT_CEN_CD': 'DT_CEN_CD', 'censuscode': 'censuscode', });
lyr_wo_attended_map_2.set('fieldAliases', {'ST_NM': 'ST_NM', 'count(d.wo_attend)': 'count(d.wo_attend)', });
lyr_final_elsi_map_databse_3.set('fieldAliases', {'id': 'id', 'clg_code': 'clg_code', 'elsi_clg_id': 'elsi_clg_id', 'college_name': 'college_name', 'state': 'state', 'district': 'district', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'robots_given': 'robots_given', 'eyrtc_allowed': 'eyrtc_allowed', 'eyrtc_score': 'eyrtc_score', 'tbt_allowed': 'tbt_allowed', 'completed': 'completed', 'wo_attend': 'wo_attend', 'lab_inaugurated': 'lab_inaugurated', });
lyr_States_0.set('fieldImages', {'ST_NM': 'TextEdit', });
lyr_district_map_1.set('fieldImages', {'DISTRICT': 'TextEdit', 'ST_NM': 'TextEdit', 'ST_CEN_CD': 'Range', 'DT_CEN_CD': 'Range', 'censuscode': 'TextEdit', });
lyr_wo_attended_map_2.set('fieldImages', {'ST_NM': 'TextEdit', 'count(d.wo_attend)': 'Range', });
lyr_final_elsi_map_databse_3.set('fieldImages', {'id': 'Range', 'clg_code': 'TextEdit', 'elsi_clg_id': 'Range', 'college_name': 'TextEdit', 'state': 'TextEdit', 'district': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'robots_given': 'Range', 'eyrtc_allowed': 'Range', 'eyrtc_score': 'Range', 'tbt_allowed': 'Range', 'completed': 'Range', 'wo_attend': 'Range', 'lab_inaugurated': 'Range', });
lyr_States_0.set('fieldLabels', {'ST_NM': 'no label', });
lyr_district_map_1.set('fieldLabels', {'DISTRICT': 'header label', 'ST_NM': 'header label', 'ST_CEN_CD': 'header label', 'DT_CEN_CD': 'header label', 'censuscode': 'header label', });
lyr_wo_attended_map_2.set('fieldLabels', {'ST_NM': 'header label', 'count(d.wo_attend)': 'header label', });
lyr_final_elsi_map_databse_3.set('fieldLabels', {'id': 'header label', 'clg_code': 'header label', 'elsi_clg_id': 'header label', 'college_name': 'header label', 'state': 'header label', 'district': 'header label', 'Latitude': 'header label', 'Longitude': 'header label', 'robots_given': 'header label', 'eyrtc_allowed': 'header label', 'eyrtc_score': 'header label', 'tbt_allowed': 'header label', 'completed': 'header label', 'wo_attend': 'header label', 'lab_inaugurated': 'header label', });
lyr_final_elsi_map_databse_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});