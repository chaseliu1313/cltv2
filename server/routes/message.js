var express = require('express');
var router = express.Router();
var pool = require('../db.js');

router.get('/', (req, res) => {
  pool.query(`SELECT * FROM messages`, (q_err, q_res) => {
    res.json(q_res.rows);
  });
});

router.post('/', (req, res, next) => {
  const values = [req.body.name, req.body.email, req.body.message];
  pool.query(
    `INSERT INTO messages(name, email, message, date) VALUES($1, $2, $3, NOW())`,
    values,
    (q_err, q_res) => {
      if (q_err) {
        return res.json({
          error: q_err.detail,
          status: false,
          message: 'Hmm..Some thing went wrong, please double check your input.'
        });
      }

      return res.json({ status: true, message: 'Thank you for your message.' });
    }
  );
});
module.exports = router;
