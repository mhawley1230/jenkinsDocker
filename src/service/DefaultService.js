'use strict';


/**
 * Call current weather data for several cities
 * JSON returns the data from cities within the defined rectangle specified by the geographic coordinates.
 *
 * bbox String bounding box [lon-left,lat-bottom,lon-right,lat-top,zoom]
 * callback String javascript functionName (optional)
 * cluster String use server clustering of points. Possible values are [yes, no] (optional)
 * lang String language [ru, en ... ] (optional)
 * no response value expected for this operation
 **/
exports.boxGET = function(bbox,callback,cluster,lang) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cities in cycle
 * JSON returns data from cities laid within definite circle that is specified by center point ('lat', 'lon') and expected number of cities ('cnt') around this point. The default number of cities is 10, the maximum is 50.
 *
 * lat String Latitude
 * lon String Longitude
 * callback String functionName for JSONP callback. (optional)
 * cluster String Use server clustering of points. Possible values are [yes, no] (optional)
 * lang String language [ru, en ... ] (optional)
 * cnt String Number of cities around the point that should be returned (optional)
 * no response value expected for this operation
 **/
exports.findGET = function(lat,lon,callback,cluster,lang,cnt) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Call for several city IDs
 *
 * id String Single, or collection of IDs (each counts as 1 API call!)
 * units String Unit type results should be returned in (optional)
 * no response value expected for this operation
 **/
exports.groupGET = function(id,units) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Call current weather data for one location
 * You can call by city name or city name and country code. API responds with a list of results that match a searching word.
 *
 * q String City name and country code divided by comma, use ISO 3166 country codes (optional)
 * id String You can call by city ID. API responds with exact result. (optional)
 * lat String Coordinates of the location of your interest, **required to be sent as a pair** (optional)
 * lon String Coordinates of the location of your interest, **required to be sent as a pair** (optional)
 * zip String Zip code, please note if country is not specified then the search works for USA as a default (optional)
 * no response value expected for this operation
 **/
exports.weatherGET = function(q,id,lat,lon,zip) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

