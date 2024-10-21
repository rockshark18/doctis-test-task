class ProductService {
	// NOTE: I use singleton pattern
	constructor() {
		if (!ProductService.instance) {

			console.log('[ProductService] constructor()')

			// NOTE: mock/test products
			this.products = [
				{ id: 100,
					name: 'Syltherine',
					desc: 'Stylish cafe chair',
					image: '1.jpg',
					price: 3500000,
					salePrice: 2500000,
					sale: 30,
					isNew: false,
				},
				{ id: 101,
					name: 'Leviosa',
					desc: 'Stylish cafe chair',
					image: '2.jpg',
					price: 2500000,
					salePrice: null,
					sale: null,
					isNew: false,
				},
				{ id: 102,
					name: 'Lolito',
					desc: 'Luxury big sofa',
					image: '3.jpg',
					price: 14000000,
					salePrice: 7000000,
					sale: 50,
					isNew: false,
				},
				{ id: 103,
					name: 'Respira',
					desc: 'Outdoor bar table and stool',
					image: '4.jpg',
					price: 500000,
					salePrice: null,
					sale: null,
					isNew: true,
				},
				{ id: 104,
					name: 'Grifo',
					desc: 'Night lamp',
					image: '5.jpg',
					price: 1500000,
					salePrice: null,
					sale: null,
					isNew: false,
				},
				{ id: 105,
					name: 'Muggo',
					desc: 'Small mug',
					image: '6.jpg',
					price: 150000,
					salePrice: null,
					sale: null,
					isNew: true,
				},
				{ id: 106,
					name: 'Pingky',
					desc: 'Cute bed set',
					image: '7.jpg',
					price: 14000000,
					salePrice: 7000000,
					sale: 50,
					isNew: false,
				},
				{ id: 107,
					name: 'Potty',
					desc: 'Minimalist flower pot',
					image: '8.jpg',
					price: 500000,
					salePrice: null,
					sale: null,
					isNew: true,
				},
			];
			ProductService.instance = this;
		}
		return ProductService.instance;
	}

	async getProducts() {
		try {
			return this.products
		} catch (error) {
			throw error;
		}
	}
}

const instance = new ProductService();
Object.freeze(instance);

export default instance;
