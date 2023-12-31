function validaSeTalkExiste(req, res, next) {
    const { talk } = req.body;
    if (!talk || talk === undefined) {
      return res
      .status(400)
      .json({
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      });
    }
    const { talk: { watchedAt, rate } } = req.body;
    if (!watchedAt || !rate) {
      return res
        .status(400)
          .json({
            message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
          });
    }
  
    next();
}

module.exports = validaSeTalkExiste;
