const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    product_id: { type: String, unique: true, trim: true, required: true },
    title: { type: String, trim: true, required: true },
    price: { type: Number, trim: true, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    images: { type: Object, required: true },
    category: { type: String, required: true },
    checked: { type: Boolean, default: false },
    sold: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  },
})
