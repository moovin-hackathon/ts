import Campaign from '../models/Campaign'

class CampaignController {
  async store(req, res) {
    const { name, date_start, date_end, target_audience } = req.body
    const campaign = await Campaign.create({
      name,
      date_start,
      date_end,
      target_audience
    })
    return res.json(campaign)
  }

  async index(req, res) {
    const campaign = await Campaign.findAll()

    return res.json(campaign)
  }
}

export default new CampaignController()
