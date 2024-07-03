const productDisplay = {
    template: 
        /*html*/
        `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" :class="{'out-of-stock-image': !inStock}">
            </div>
        </div>
        <div class="product-info">
            <h3 v-if="onSale" :style="{ color: 'red' }">The product is on sale !!</h3>
            <h1><a :href="productUrl">{{ title }}</a></h1>
            <button class="button" @click="toggleStock">Toggle Status</button>
            <div style="display: flex;">
                <p v-if="inStock && inventory > 10">In Stock</p>
                <p v-else-if="inStock && inventory <= 10">Almost out of stock</p>
                <p v-else>Out of Stock</p>
            </div>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" 
                class="color-circle" :style="{backgroundColor: variant.color}">
            </div>
            <div v-for="(variant, index) in variants" :key="variant.id">
                <div v-if="variant.isOnSale">{{ onSaleNoti }}</div>
            </div>              
            <div style="display: flex;">
                <div v-for="size in sizes" style="margin-right: 10px;">{{size}}</div>
            </div>
            <button class="button" :disabled="!inStock" @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>
            <h2>{{des1}}</h2>
            <p>{{des2}}</p>
        </div>
    </div>
    `,
    setup() {
        const product = ref('Boots');
        const brand = ref('SE 331');
        const productUrl = ref('https://www.camt.cmu.ac.th');
        const des1 = ref("SUPPORTIVE SOCKS MADE WITH A BLEND OF RECYCLED AND RENEWABLE MATERIALS.");
        const des2 = ref("From daily training to the big occasions, adidas crew length socks keep you moving comfortably. They wrap around the arches of your feet and cushion high-pressure areas at the heels and toes. So you stay focused on performance, whether you're running, lifting or playing sports.");
        const inventory = ref(100);
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, isOnSale: true},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, isOnSale: false}
        ]);
        const selectedVariant = ref(0);
        const sizes = ref([
            'S', 'M', 'L'
        ]);
        const cart = ref(0);

        function addToCart() {
            cart.value += 1;
        }

        const title = computed(() => {
            return brand.value + ' ' + product.value;
        });

        function updateImage(variantImage) {
            image.value = variantImage;
        }

        function toggleStock() {
            const variant = variants.value[selectedVariant.value];
            variant.quantity = variant.quantity === 0 ? 100 : 0;
        }

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        });

        const onSale = computed(() => {
            return variants.value[selectedVariant.value].isOnSale;
        });

        const onSaleNoti = computed(() => {
            return brand.value + ' ' + product.value + ' is on sale';
        });

        return {
            title,
            productUrl,
            image,
            des1,
            des2,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleStock,
            updateVariant,
            onSaleNoti
        }
    }
}