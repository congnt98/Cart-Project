import Home from "../views/home/home"
import Contact from "../views/contact/contact"
import Product from "../views/product/product"

const RouterMenu = [
    {
        name: "Trang chủ",
        path: '/',
        element: <Home />
    },
    {
        name: "sản phẩm",
        path: '/product',
        element: <Product />
    },
    {
        name: "Liên hệ",
        path: '/contact',
        element: <Contact />
    }
]
export default RouterMenu