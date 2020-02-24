var express = require('express');
var router = express.Router();
var pool = require('../db.js');

router.get('/', async (req, res) => {
  try {
    pool.query(`SELECT * FROM messages`, (q_err, q_res) => {
      res.json(q_res.rows);
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.post('/', (req, res) => {
  const values = [req.body.name, req.body.email, req.body.message];

  try {
    pool.query(
      `INSERT INTO messages(name, email, message, date) VALUES($1, $2, $3, NOW())`,
      values,
      (q_err, q_res) => {
        if (q_err) {
          return res.status(500).json({
            error: q_err.detail,
            status: false,
            message:
              'Hmm..Some thing went wrong, please double check your input.'
          });
        }

        return res.json({
          status: true,
          message: 'Thank you for your message.'
        });
      }
    );
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});
module.exports = router;
