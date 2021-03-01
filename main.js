const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: "Socks",
			brand: "Vue Mastery",
			description: "Fuzzy, warmess for your toes! Available in 2 colors.",
			selectedVariant: 0,
			imageAlt: "a pair of socks, in selected color",
			url: "http://www.google.com",
			inventory: 10,
			onSale: true,
			details: ["50% cotton", "30% wool", "20% polyester"],
			variants: [
				{ id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
				{ id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 },
			],
			sizes: [
				{ id: 00, size: "xs" },
				{ id: 01, size: "sm" },
				{ id: 02, size: "md" },
				{ id: 03, size: "lg" },
				{ id: 04, size: "xl" },
			],
		};
	},
	methods: {
		addToCart() {
			this.cart += 1;
		},
		removeFromCart() {
			this.cart -= 1;
		},
		updateVariant(index) {
			this.selectedVariant = index;
		},
	},
	computed: {
		title() {
			return `${this.brand} ${this.product}`;
		},
		image() {
			return this.variants[this.selectedVariant].image;
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity;
		},
		sale() {
			if (this.onSale) {
				return `${this.brand} ${this.product} are on Sale!`;
			}
			return " ";
		},
	},
});
