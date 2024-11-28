const cds = require('@sap/cds');
module.exports = async ( srv) => {
    srv.on('CREATE', 'Voyage', async req => {
        await cds.run(INSERT.into('mydb.Voyage').entries(req.data));
        return cds.run(SELECT.from('mydb.Voyage').where({voyageCode : req.data.voyageCode}))
    });
}   