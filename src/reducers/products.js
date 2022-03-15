import { PRODUCT } from '../actionTypes'

var initState = [
    {
        id: 1,
        name: 'Iphone 6 Plus',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'sản phẩm được sản xuất tại hoa kỳ',
        price: 1000,
        rating: 4,
        inventory: 10
    },
    {
        id: 2,
        name: 'Samsung 11',
        image: 'https://images.samsung.com/is/image/samsung/vn-galaxy-a71-a715-sm-a715fzkdxxv-front-237807510?$720_576_PNG$',
        description: 'sản phẩm được sản xuất tại hoa mỹ',
        price: 1000,
        rating: 3,
        inventory: 10
    },
    {
        id: 3,
        name: 'Xiaomi 11 note',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'sản phẩm được sản xuất tại china',
        price: 1000,
        rating: 5,
        inventory: 10
    },
]
const products = (state = initState, action) => {
    switch (action.type) {
        case PRODUCT:
            return [...state];
        default:
            return state
    }
}
export default products