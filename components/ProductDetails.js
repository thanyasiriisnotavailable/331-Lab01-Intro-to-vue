const productDetails = {
    template: 
        /*html*/
        `
    <div>
        <ul>
            <li v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>
    </div>
    `,
    props: {
        details: String
    }
}