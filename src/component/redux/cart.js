import { createReducer, createActions } from 'reduxsauce'
const { Types, Creators } = createActions({
    addCart: ['item'],
    addPlusCart: ['item', 'count'],
    filterMode: ['filter'],
    setUserName: ['userName'],
    removeCart: ['item'],
    removeAllCart: ['item'],
    setProduct: ['products']
});
export const cartTypes = Types;
export default Creators;


let productsInit = [];
export const INITALL_STATE = {
    products: productsInit,
    cart: [],
    userName: [],
    thongbaos: [],
};
const addCart = (state, { item }) => {
    return {
        ...state,
        cart: [...state.cart, item]
    }
}
const addPlusCart = (state, { item, count }) => {
    let cart = state.cart
    const index = cart.findIndex(c => c.id == item.id)
    if (index >= 0) cart[index] = { ...item, count }
    return { ...state, cart }
}
const setUserName = (state, { userName }) => {
    return { ...state, userName }
}
const removeCart = (state, { item }) => {
    return {
        ...state, cart: state.cart.filter(c => c.title !== item.title)
    }
}
const removeAllCart = (state) => {
    const cart = state.cart
    return {
        ...state, cart: [], thongbaos: [...state.thongbaos, cart]
    }
}
const filterMode = (state, { filter }) => {
    const { all, Vip, Thuong } = filter
    return {
        ...state, products: productsInit.filter(c => {
            if (all) return true
            if (Vip) return c.type=== 'Vip'
            if (Thuong) return c.type === 'Gia Thuong'
        })
    }
}
const setProduct = (state, { products }) => {
    productsInit = products
    return { ...state, products }

}

export const reducer = createReducer(INITALL_STATE, {
    [Types.ADD_CART]: addCart,
    [Types.ADD_PLUS_CART]: addPlusCart,
    [Types.SET_USER_NAME]: setUserName,
    [Types.REMOVE_CART]: removeCart,
    [Types.REMOVE_ALL_CART]: removeAllCart,
    [Types.FILTER_MODE]: filterMode,
    [Types.SET_PRODUCT]: setProduct,
});
