// NOTE: The cart model represents the logic for working with the user's cart items, using local storage as the main storage mechanism.

class CartModel {
	// NOTE: singleton class too
	constructor() {
		if (CartModel.instance) {
			return CartModel.instance;
		}

		this.storageKey = 'cart';
		this.cart = this.loadCart();

		CartModel.instance = this;
	}

	// TODO: reconsider method names and signatures
	// TODO: implement methods

	loadCart() {
	}

	saveCart() {
	}

	addItem(item) {
	}

	removeItem(itemId) {
	}

	getItems() {
	}

	clearCart() {
	}

	getTotalPrice() {
	}
}

// export
const cartModel = new CartModel();
export default cartModel;
