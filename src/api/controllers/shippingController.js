const settings = require('../../settings');
const helper = require('../utils/helper');
const Shipping = require('../adapter/shippingAdapter');
const NAME = "shippingcontroller";

exports.insert = (req, res, next) => {
    try {
        const shippingData = req.body;
        Shipping.insert(shippingData, (data, error) => {
            if (error) {
                helper.sendJson(req, res, 500, NAME, { 
                    message: "Internal Server Error.|" + error.message
                });
            } else {
                helper.sendJson(req, res, 201, NAME, { 
                    message: "insert successfully",
                    data: data.recordset
                });
            }
        });

    } catch (e) {
        helper.sendJson(req, res, 500, NAME, {
            message: e.message
        });
    }
};


exports.update = (req, res, next) => {
    try {
        const shippingData = req.body;
        Shipping.update(shippingData, (data, error) => {
            if (error) {
                helper.sendJson(req, res, 500, NAME, { 
                    message: "Internal Server Error.|" + error.message
                });
            } else {
                helper.sendJson(req, res, 200, NAME, { 
                    message: "update successfully"
                });
            }
        });

    } catch (e) {
        helper.sendJson(req, res, 500, NAME, {
            message: e.message
        });
    }
};


exports.delete = (req, res, next) => {
    try {
        const shippingData = {
            TrxNo: req.params.trxno,
            UpdateBy: req.params.userId
        }

        Shipping.delete(shippingData, (data, error) => {
            if (error) {
                helper.sendJson(req, res, 500, NAME, { 
                    message: "Internal Server Error.|" + error.message
                });
            } else {
                helper.sendJson(req, res, 200, NAME, { 
                    message: "delete successfully"
                });
            }
        });

    } catch (e) {
        helper.sendJson(req, res, 500, NAME, {
            message: e.message
        });
    }
};

exports.select = (req, res, next) => {
    try {
        const { fromdate, todate } = req.params;

        Shipping.select(fromdate, todate, (data, error) => {
            if (error) {
                helper.sendJson(req, res, 500, NAME, { 
                    message: "Internal Server Error.|" + error.message
                });
            } else {
                helper.sendJson(req, res, 200, NAME, { 
                    message: "OK",
                    data: data
                });
            }
        });

    } catch (e) {
        helper.sendJson(req, res, 500, NAME, {
            message: e.message
        });
    }
};


exports.find = (req, res, next) => {
    try {

        Shipping.find(req.params.refno, (data, error) => {
            if (error) {
                helper.sendJson(req, res, 500, NAME, { 
                    message: "Internal Server Error.|" + error.message
                });
            } else {
                helper.sendJson(req, res, 200, NAME, { 
                    message: "OK",
                    data: data
                });
            }
        });

    } catch (e) {
        helper.sendJson(req, res, 500, NAME, {
            message: e.message
        });
    }
};