const mongoose = require("mongoose")

const ShippingAddressSchema = new mongoose.Schema(
	{
		street: {
			type: String,
			required: true,
		},
		street2: {
			type: String,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		postal: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const OrderSchema = new mongoose.Schema(
	{
		cart: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Cart",
		},

		total: {
			type: mongoose.Types.Decimal128,
		},
		creditCard: {
			type: String,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		address: [ShippingAddressSchema],
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Order", OrderSchema)
