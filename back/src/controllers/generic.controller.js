const genericCrud = (model) => ({
  async get({ params: { id } }, res) {
    try {
      const item = await model.findById(id)
      return res.status(200).send(item)
    } catch (error) {
      console.log('error: ', error);      
      return res.status(400).send(error)
    }
  },

  async getAll(req, res) {
    try {
      const items = await model.find()
      return res.status(200).send(items)
    } catch (error) {
      console.log('error: ', error);      
      return res.status(400).send(error)
    }
  },

  async create({ body }, res) {
    try {
      const item = new model(body)
      const newItem = await item.save()
      return res.status(200).send(newItem)
    } catch (error) {
      console.log('error: ', error);      
      return res.status(400).send(error)
    }
  },

  async update({params: { id }, body }, res) {
    try {
      const item = await model.findByIdAndUpdate(id, body, { new: true })
      return res.status(200).send(item)
    } catch (error) {
      console.log('error: ', error);      
      return res.status(400).send(error)
    }
  },

  async delete({ params: { id } }, res) {
    try {
      await model.findByIdAndDelete(id)
      return res.status(200).send({ status: 'OK', message: 'продукт удален'})
    } catch (error) {
      console.log('error: ', error);      
      return res.status(400).send(error)
    }
  }
})

module.exports = genericCrud;

