const app = Vue.createApp({
	data() {
		return {
			product: "Socks",
			description: "Fuzzy, warmess for your toes! Available in 2 colors.",
			image: "./assets/images/socks_green.jpg",
			imageAlt: "a pair of socks, green",
			url: "http://www.google.com",
			inventory: 100,
			onSale: false,
			details: ["50% cotton", "30% wool", "20% polyester"],
			variants: [
				{ id: 2234, color: "green" },
				{ id: 2235, color: "blue" },
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
});
