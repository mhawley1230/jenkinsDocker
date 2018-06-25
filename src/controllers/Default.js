'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.boxGET = function boxGET (req, res, next) {
  var bbox = req.swagger.params['bbox'].value;
  var callback = req.swagger.params['callback'].value;
  var cluster = req.swagger.params['cluster'].value;
  var lang = req.swagger.params['lang'].value;
  Default.boxGET(bbox,callback,cluster,lang)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findGET = function findGET (req, res, next) {
  var lat = req.swagger.params['lat'].value;
  var lon = req.swagger.params['lon'].value;
  var callback = req.swagger.params['callback'].value;
  var cluster = req.swagger.params['cluster'].value;
  var lang = req.swagger.params['lang'].value;
  var cnt = req.swagger.params['cnt'].value;
  Default.findGET(lat,lon,callback,cluster,lang,cnt)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupGET = function groupGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var units = req.swagger.params['units'].value;
  Default.groupGET(id,units)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.weatherGET = function weatherGET (req, res, next) {
  var q = req.swagger.params['q'].value;
  var id = req.swagger.params['id'].value;
  var lat = req.swagger.params['lat'].value;
  var lon = req.swagger.params['lon'].value;
  var zip = req.swagger.params['zip'].value;
  Default.weatherGET(q,id,lat,lon,zip)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
