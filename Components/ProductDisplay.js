app.component("product-display", {
	props: {
		premium: {
			type: Boolean,
			required: true,
		},
	},
	template:
		/*html*/
		`<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :class="{'out-of-stock-img': !inStock}" :src="image" :alt="imageAlt">
            <!-- image goes here -->
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <div>
              <p class="sale">{{sale}}</p>
              <p p v-if="inStock">In Stock</p>
              <!-- <p v-if="inventory > 10">In Stock</p>
              <p v-else-if="inventory <=10 && inventory > 0">Almost out of Stock</p>-->
              <p v-else>Out of Stock</p>
            </div>
            <p>Shipping: {{shipping}}</p>
            <div>
            <div>
                <p>{{description}}</p>
                <label>Details:</label>
                <product-details :details="details"></product-details>
                <div 
                v-for="(variant, index) in variants" 
                :key="variant.id" 
                @mouseover="updateVariant(index)"
                class="color-circle"
                :style="{backgroundColor: variant.color}"
                aria-label="{{variant.color}}"
                ></div>
                <div v-for="size in sizes" :key="size.id">{{size.size}}</div>
                </div >
            </div>
            <button 
            v-if="cart <= 0" 
            class="button"
            @click="addToCart"
            :disabled="!inStock"
            :class="{ 
              disabledButton: !inStock 
            }"
            >
            Add to Cart
            </button>
            <button class="button" v-else>
              <span  @click="addToCart"> + </span>
              <span  @click="removeFromCart"> - </span>
            </button>
            <a :href="url">Search for more socks!</a>
          </div>
        </div>
    </div>`,
	data() {
		return {
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
		shipping() {
			if (this.premium) {
				return "Free";
			}
			return "$2.99";
		},
	},
});
