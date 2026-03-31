import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
    const handleRemove = (id) => {
        setCarts(carts.filter(item => item.id !== id));
        toast.success("Item deleted!");
    }

    const handlePayment = () =>{
        setCarts([]);
        toast.success("Payment successful");
    }

    let totalPrice = 0;
    for (let item of carts) {
        totalPrice += item.price;
    }

    if (carts.length === 0) {
        return (
            <div className='w-10/12 mx-auto mt-10 mb-40 py-10 text-center text-[#627382] border border-[#F2F2F2] rounded-2xl'>
                <p className='text-2xl font-bold'>Your cart is empty</p>
            </div>
        )
    }

    return (
        <div className='w-10/12 mx-auto py-10 space-y-4 border border-[#F2F2F2] p-10 mt-10 rounded-2xl'>
            <h2 className='text-3xl font-extrabold text-[#101727]'>Your Cart</h2>
            {carts.map(item => (
                <div key={item.id} className=''>
                    <div className="flex items-center justify-between bg-[#F9FAFC] border border-[#F2F2F2] rounded-2xl p-4">
                        <div className='flex items-center gap-4'>
                            <div className="border border-[#F2F2F2] bg-white rounded-full p-4">
                                <img className='object-contain ' src={`/src/assets/products/${item.icon}.png`} alt="" />
                            </div>

                            <div>
                                <h3 className='font-bold text-[#101727]'>{item.name}</h3>
                                <p className='text-[#627382]'>${item.price}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleRemove(item.id)}
                            className='text-red-500 font-bold'>
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>

                </div>
            ))}

            <div className="flex justify-between">
                <p className="text-[#627382]">Total:</p>
                <h2 className="font-bold text-[#101727] text-2xl">${totalPrice}</h2>
            </div>
            <div>
                <button onClick={handlePayment} className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold w-full text-white py-4 rounded-full'>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Cart