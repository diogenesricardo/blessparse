const express = require('express');
const router = express.Router();

xml2js = require('xml2js');
var fs = require('fs');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'blessbible'
})


router.get('/', async function (req, res, next) {

    var parser = new xml2js.Parser();

    return readFiles(__dirname + '/../../files/',);

    /* fs.readFile(__dirname + '/../../files/1CH.usx', async function (err, data) {
        await parser.parseStringPromise(data).then(async result =>  {
            
            console.dir(result.usx.book);
            
            res.status(200).send(result.usx.book[0]._);

            connection.connect();

            await connection.query('INSERT INTO bibles SET ?', { livro: result.usx.book[0]._ }, function (error, results, fields) {
                if (error) throw error;
                console.log(results.insertId);
            });

            connection.end();

        });
    }); */


});

function readFiles(dirname) {
    fs.readdir(dirname, function(err, filenames) {
      if (err) {        
        return err;
      }
      filenames.forEach(function(filename) {
        fs.readFile(dirname + filename, async function(err, data) {
          if (err) {            
            return err;
          }

          await parser.parseStringPromise(data).then(async result =>  {
            
            console.dir(result.usx.book);
            
            res.status(200).send(result.usx.book[0]._);

            connection.connect();

            await connection.query('INSERT INTO bibles SET ?', { livro: result.usx.book[0]._ }, function (error, results, fields) {
                if (error) throw error;
                console.log(results.insertId);
            });

            connection.end();

        });

          //onFileContent(filename, content);
        });
      });
    });
  }


module.exports = router;