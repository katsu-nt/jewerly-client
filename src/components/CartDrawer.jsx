import { Button, Divider } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useCart } from '../context/cartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { addToCart, removeAll, removeFromCart } from '../APIs/MyCartApi';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
export default function CartDrawer() {
    const { user, cart, setUser, setCart, isOpen, setIsOpen } = useCart()
    const updateAmout = async (quantity, productId, size) => {
        const response = await addToCart({
            userId: user._id,
            productId,
            quantity,
            size
        })
        setCart(response)
    }
    const remove = async (productId, size) => {
        const response = await removeFromCart({
            userId: user._id,
            productId,
            size
        })
        setCart(response)
    }
    const clearCart = async () => {
        const response = await removeAll({
            userId: user._id
        });
        setCart(response);
    };

    return (
        <div className='rounded-lg shadow-2xl slide-right' style={{ position: "fixed", top: "0px", zIndex: "1000", bot: "0", right: "0", width: "600px", height: "100%", backgroundColor: "white" }} >

            <div className='cart-header py-5 flex text-3xl items-center justify-between px-10 font-semibold' style={{ height: "8%" }}>
                <CancelOutlinedIcon className='cursor-pointer' onClick={() => {
                    setIsOpen(!isOpen)
                }} />
                <div className='flex gap-5'><ShoppingCartOutlinedIcon fontSize='large' />
                    <h1>Giỏ hàng</h1></div>
                <DeleteForeverOutlinedIcon color='error' fontSize='large' className='cursor-pointer ml-2' onClick={() => {
                    clearCart()
                }} />
            </div>
            <Divider />
            <div className='cart-body p-5' style={{ height: "83.5%" }}>
                {cart && cart.items ? (
                    cart.items.map((item, index) => (
                        <div className='flex justify-around items-center py-5' key={index} >
                            <img src={item.productId.imageUrl} alt="Item image" className='w-1/5 rounded-lg border-2' />
                            <div>
                                <h1 className='font-bold text-xl'>{item.productId.nameProduct}</h1>
                                <h1 className='text-lg'>Giá: <span className='font-semibold'>{item.productId.price}VNĐ</span> Size: <span className='font-semibold'> {item.size}</span> </h1>
                                <div>
                                    <RemoveIcon fontSize='small' className='cursor-pointer mr-2' onClick={() => {
                                        updateAmout(-1, item.productId._id, item.size)
                                    }} />
                                    <input type="number" min="1" value={item.quantity} className='myNumber border-2 p-2 rounded-lg text-center' style={{ width: "50px" }} disabled />
                                    <AddIcon fontSize='small' className='cursor-pointer ml-2' onClick={() => {
                                        updateAmout(1, item.productId._id, item.size)
                                    }} />
                                </div>
                            </div>
                            <DeleteForeverOutlinedIcon color='error' fontSize='large' className='cursor-pointer ml-2' onClick={() => {
                                remove(item.productId._id, item.size)
                            }} />
                        </div>
                    ))
                ) : (
                    <h1>Thêm sản phẩm vào giỏ hàng</h1>
                )}
            </div>
            <Divider />
            <div style={{ height: "8%" }} className='p-5 flex items-center justify-between'>
                <div className='text-2xl font-semibold text-blue'>Tổng tiền: {cart && cart.totalAmount ? <span>{cart.totalAmount}</span> : 0}VNĐ</div>
                <Button variant="outlined">Thanh toán ngay</Button>
            </div>
        </div>
    )
}
