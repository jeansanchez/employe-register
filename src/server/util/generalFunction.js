const { bodyParser } = require("./bodyParser");
const dataBase = { error: "", body: [] };

/**
 *
 * @param {object} req request
 * @param {object} res response
 */
function getDataHandle(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(dataBase));
  res.end();
}

/**
 *
 * @param {object} req request
 * @param {object} res response
 */
async function postDataHandle(req, res) {
  try {
    await bodyParser(req);
    dataBase.body.push(req.body);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(dataBase));
    res.end();
  } catch (error) {
    dataBase.error.push(req.error);
    res.writeHead(200, { "Content-Type": "text/json" });
    res.write(JSON.stringify(dataBase));
    res.end();
  }
}

module.exports = { getDataHandle, postDataHandle };
