const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = Schema(
  {
    productId: { type: Array, required: true },
    isDeleted: { type: Boolean, default: false },
  },

  { timestamps: true }
);

// productSchema.plugin(require("./plugins/isDeletedFalse"));

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
