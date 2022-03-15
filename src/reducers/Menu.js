// var data = JSON.parse(localStorage.getItem('CART',))
var initState = [
    {
        name: "Trang chủ",
        to: "/",
    },
    {
        name: "sản phẩm",
        to: "/product",
    }
    // ,
    // {
    //     name: "Liên hệ",
    //     to: "/contact",
    // }
]
const Menu = (state = initState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default Menu