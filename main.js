const { createApp, ref } = Vue

createApp({
    setup() {
        const product =  ref('Boots')
        const productUrl = ref('https://www.camt.cmu.ac.th')
        const image = ref('./assets/images/socks_green.jpg')
        const des1 = ref("SUPPORTIVE SOCKS MADE WITH A BLEND OF RECYCLED AND RENEWABLE MATERIALS.")
        const des2 = ref("From daily training to the big occasions, adidas crew length socks keep you moving comfortably. They wrap around the arches of your feet and cushion high-pressure areas at the heels and toes. So you stay focused on performance, whether you're running, lifting or playing sports.")
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = (true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        return {
            product,
            productUrl,
            image,
            des1,
            des2,
            inStock,
            inventory,
            onSale,
            details
        }
    }
}).mount('#app')