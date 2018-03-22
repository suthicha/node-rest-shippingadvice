const mssql = require('mssql');
const settings = require('../../settings');

exports.insert = (data, callback) => {
    const pool = new mssql.ConnectionPool(settings.dbLocalSrv);
    pool.connect()
        .then(()=> {
            const req = new mssql.Request(pool);
            req.input("CompCd", mssql.VarChar, data.CompCd)
            .input("InvNo", mssql.VarChar, data.InvNo)
            .input("TradCd", mssql.VarChar, data.TradCd)
            .input("DecNo", mssql.VarChar, data.DecNo)
            .input("RefNo", mssql.VarChar, data.RefNo)
            .input("CsFee", mssql.VarChar, data.CsFee)
            .input("ExchangeRate", mssql.Decimal, data.ExchangeRate)
            .input("Agent", mssql.VarChar, data.Agent)
            .input("Blue", mssql.VarChar, data.Blue)
            .input("ClrDate", mssql.VarChar, data.ClrDate)
            .input("Location", mssql.VarChar, data.Location)
            .input("ReleasePort", mssql.VarChar, data.ReleasePort)
            .input("CreateBy", mssql.VarChar, data.CreateBy)
            .execute("sp_nmb02kh_insert")
            .then(result => {
                callback(result);
            })
            .catch(err => {
                callback(null, err);
            })
        })
        .catch(err => {
            callback(null, err);
        })
};

exports.update = (data, callback) => {
    const pool = new mssql.ConnectionPool(settings.dbLocalSrv);
    pool.connect()
        .then(()=> {
            const req = new mssql.Request(pool);
            req.input("TrxNo", mssql.Int, data.TrxNo)
            .input("CompCd", mssql.VarChar, data.CompCd)
            .input("InvNo", mssql.VarChar, data.InvNo)
            .input("TradCd", mssql.VarChar, data.TradCd)
            .input("DecNo", mssql.VarChar, data.DecNo)
            .input("RefNo", mssql.VarChar, data.RefNo)
            .input("CsFee", mssql.VarChar, data.CsFee)
            .input("ExchangeRate", mssql.Decimal, data.ExchangeRate)
            .input("Agent", mssql.VarChar, data.Agent)
            .input("Blue", mssql.VarChar, data.Blue)
            .input("ClrDate", mssql.VarChar, data.ClrDate)
            .input("Location", mssql.VarChar, data.Location)
            .input("ReleasePort", mssql.VarChar, data.ReleasePort)
            .input("UpdateBy", mssql.VarChar, data.UpdateBy)
            .execute("sp_nmb02kh_update")
            .then(result => {
                callback(result);
            })
            .catch(err => {
                callback(null, err);
            })
        })
        .catch(err => {
            callback(null, err);
        })
};

exports.delete = (data, callback) => {
    const pool = new mssql.ConnectionPool(settings.dbLocalSrv);
    pool.connect()
        .then(()=> {
            const req = new mssql.Request(pool);
            req.input("TrxNo", mssql.VarChar, data.TrxNo)
            .input("UpdateBy", mssql.VarChar, data.UpdateBy)
            .execute("sp_nmb02kh_delete")
            .then(result => {
                callback(result);
            })
            .catch(err => {
                callback(null, err);
            })
        })
        .catch(err => {
            callback(null, err);
        })
};

exports.select = (fromdate, todate, callback) => {
    const pool = new mssql.ConnectionPool(settings.dbLocalSrv);
    pool.connect()
        .then(()=> {
            const req = new mssql.Request(pool);
            req.input("fromdate", mssql.VarChar, fromdate)
            .input("todate", mssql.VarChar, todate)
            .execute("sp_nmb02kh_select")
            .then(result => {
                callback(result.recordset);
            })
            .catch(err => {
                callback(null, err);
            })
        })
        .catch(err => {
            callback(null, err);
        })
};

exports.find = (refno, callback) => {
    const pool = new mssql.ConnectionPool(settings.dbLocalSrv);
    pool.connect()
        .then(()=> {
            const req = new mssql.Request(pool);
            req.input("refno", mssql.VarChar, refno)
            .execute("sp_nmb02kh_filter")
            .then(result => {
                callback(result.recordset);
            })
            .catch(err => {
                callback(null, err);
            })
        })
        .catch(err => {
            callback(null, err);
        })
};