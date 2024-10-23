// NOTE: The cart model represents the logic for working with the user's cart items, using local storage as the main storage mechanism.

import Transcoder from '@/utility/transcoder';

// const
const STORAGE_KEY = 'cart'; // const/define
const MAX_QUANTITY = 100; // quantity limiter per item
const MIN_QUANTITY = 1;
const SHIPPING_COST_PERCENTS_OF_SUBTOTAL = 2; // 1% of items sum

const ENCRYPTION_ENABLED = false //true // NOTE: this option encryptes cart data in the Local Storage for additional (weak) security

/*
	TODO:  Для реального приложение:
	       1) Важный момент! При работе с пользовательской корзиной очень важно защищать данные корзины
	       от мошеннических изменений, т.к. данные хранятся в local storage.  Для этого делается
	       предварительное шифрование данных корзины в local storage, но мошенник поумнее может
	       раскриптовать, изменить и опять закриптовать эти данные, то есть это защита "от дурака"
	       и её недостаточно. Поэтому в идеале надо после каждого действия над корзиной синхронизировать
	       её с серверной частью и следить за несовпадением данных (если подменили её содержимое,
	       например цену)
	       2) Ещё момент: т.к. в процессе совершения покупок менеджеры интернет-магазина могут менять
	       характеристики товара, то в корзине надо хранить и ссылку на старое изображение товара на
	       момент когда пользователь добавил его в корзину (т.к. менеджеры могут изменить изображение
	       в этот момент). Также и с ценой - цена должно сохраняться той что была на момент добавления
	       в корзину(!). При проверке/синхронизации товаров корзины из local storage с корзиной на сервере
	       этот момент тоже должен учитываться, то есть в серверной части должна быть история изменения
	       цен (менеджером) и сверка должна производиться с учётом datetime'ов когда товар был добавлен
	       в корзину по старой цене с ценой которая была до изменения (из истории цен), то есть
	       datetime/timestamp добавления товара в корзину храниться тоже должен. Все времена/datetime'ы
	       в таком случае брать надо исключительно со стороны сервера, клиентское/браузерное время
	       использовать нежелательно чтобы не было потом сюрпризов c UTC :)
*/
class CartModel {

	// NOTE: singleton class too
	constructor() {
		if (CartModel.instance) {
			return CartModel.instance;
		}

		// state
		this.transcoder = new Transcoder();
		this.result = null;

		CartModel.instance = this;
	}

	addItem(product, quantity) {
		let q = quantity
		if (q === undefined) {
			q = 1;
		}

		product = this.preprocessItem(product);

		const ls = window.localStorage;
		let items = this.decrypt(ls.getItem(STORAGE_KEY));

		if (items == null) { // if empty
			items = [];
			let item = {
				product: product,
				quantity: q
			};
			items.push(item);
			ls.setItem(STORAGE_KEY, this.encrypt(items));
		} else {
			let itemIdx = items.findIndex(i => i.product.id === product.id)
			let item = null;
			if (itemIdx !== -1) {
				item = items[itemIdx]
			}

			if (item) { // items not empty and item already exists
				items[itemIdx].quantity += q;  // increment quantity
				if (items[itemIdx].quantity > MAX_QUANTITY) {
					items[itemIdx].quantity = MAX_QUANTITY
				}
				ls.setItem(STORAGE_KEY, this.encrypt(items));
			} else { // items not empty and item NOT exists
				let item = {
					product: product,
					quantity: q
				};
				items.push(item);
				ls.setItem(STORAGE_KEY, this.encrypt(items));
			}
		}
		this.updateResult();
	}

	removeItem(productId) {
		const ls = window.localStorage;
		let items = this.decrypt(ls.getItem(STORAGE_KEY));
		if (items !== null) {
			items = items.filter(i => i.product.id !== productId);
			if (items.length !== 0) {
				ls.setItem(STORAGE_KEY, this.encrypt(items))
			} else {
				this.clear();
			}
		}
		this.updateResult();
	}

	setQuantity(productId, quantity) {
		const ls = window.localStorage;
		let items = this.decrypt(ls.getItem(STORAGE_KEY));

		let itemIdx = items.findIndex(i => i.product.id === productId)
		if (itemIdx !== -1) { // found
			if (quantity >= MIN_QUANTITY || quantity <= MAX_QUANTITY) { // check boundaries
				items[itemIdx].quantity = quantity;
				ls.setItem(STORAGE_KEY, this.encrypt(items));
				this.updateResult();
				return true;
			} else {
				return false;
			}
		}
		return null;
	}

	clear() {
		const ls = window.localStorage;
		ls.removeItem(STORAGE_KEY); // purge completely from LS
		this.result = null;
	}

	getItems() {
		const ls = window.localStorage;
		let items = this.decrypt(ls.getItem(STORAGE_KEY));
		return items;
	}

	getResult() {
		if (!this.result) {
			this.updateResult();
		}
		return this.result;
	}

	getResultNumItems(){
		let res = this.getResult();
		if (res){
			return res.numItems;
		}
		return null;
	}

	getMinQuantity() {
		return MIN_QUANTITY;
	}

	getMaxQuantity() {
		return MAX_QUANTITY;
	}

	// private
	encrypt(data) {
		let str = JSON.stringify(data);

		if (ENCRYPTION_ENABLED) {
			const bytes = str.split('');
			for (let i = 0; i < bytes.length; i++) {
				const rem = i % (i % 4 + 1);
				bytes[i] = bytes[i].charCodeAt(0);
				bytes[i] += rem;
			}
			let r = '';
			for (const byte of bytes) {
				r += String.fromCharCode(byte);
			}
			r = this.transcoder.encode(r);
			return r;
		}
		return str;
	}

	decrypt(strData) {
		if (strData == null || strData.length === 0) {
			return null;
		}

		if (ENCRYPTION_ENABLED) {
			let str = strData;
			str = this.transcoder.decode(str);
			const bytes = str.split('');
			for (let i = 0; i < bytes.length; i++) {
				const rem = i % (i % 4 + 1);
				bytes[i] = bytes[i].charCodeAt(0);
				bytes[i] -= rem;
			}
			let r = '';
			for (const byte of bytes) {
				r += String.fromCharCode(byte);
			}
			return JSON.parse(r);
		}
		return JSON.parse(strData);
	}

	preprocessItem(product) {
		if (product.sale) {
			product._finalPrice = product.salePrice;
		} else {
			product._finalPrice = product.price;
		}
		return product;
	}

	updateResult() {
		const ls = window.localStorage;

		let items = this.getItems();

		if (items !== null) {
			let r = {};
			r.itemsCost = 0;
			r.shippingCost = 0;
			r.totalCost = 0;
			r.numItems = 0;

			for (const i of items) {
				r.itemsCost += i.quantity * i.product.price;
				r.numItems += i.quantity;
			}
			r.shippingCost = Math.floor(r.itemsCost * (SHIPPING_COST_PERCENTS_OF_SUBTOTAL / 100.0));
			r.totalCost = r.itemsCost + r.shippingCost;

			this.result = r;
		}else{
			this.result = null;
		}
	}
}

// export
const cartModel = new CartModel();
export default cartModel;
