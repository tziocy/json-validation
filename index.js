const fs = require('fs');
const express = require('express');
const Ajv = require('ajv');

const app = express();
const schema = JSON.parse(fs.readFileSync('./public/datamodelSchema.json', 'utf8'));
const data = JSON.parse(fs.readFileSync('./public/datamodel.json', 'utf8'));

var ajv = new Ajv({ schemaId: 'auto', allErrors: true });
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));

var validateData = () => {
    var validate = ajv.compile(schema);
    var valid = validate(data);
    if (!valid) return { valid : false, errors: validate.errors }
    return { valid : true }
}

app.get('/datamodel/check', (req, res) => res.send( validateData() ));
app.listen(3000, () => console.log( validateData() ));