const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    paymentID: { type: String, required: true },
    address: { type: Object, required: true },
    cart: { type: Array, default: [] },
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

paymentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  },
})

const Payment = mongoose.model('Payment', paymentSchema)
module.exports = Payment
