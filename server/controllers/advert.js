import { Advert } from '../models/advert'

export function getAdvert(req, res) {
  const keywords = req.body.keywords

  Advert.find({ keywords: RegExp(keywords, 'i') }).exec((err, adverts) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({ adverts })
  })
}