require('@google/cloud-debug');
/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.namaste = (req, res) => {
  let name = req.query.name || 'Friend';
  console.log('I made it so far');
  res.status(200).send(`Hey, ${name}!`);
};
