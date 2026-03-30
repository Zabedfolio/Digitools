const Cart = ({ carts, setCarts }) => {
    const handleRemove = (id) => {
        setCarts(carts.filter(item => item.id !== id));
    }

    if (carts.length === 0) {
        return (
            <div className='text-center py-30 text-[#627382]'>
                <p className='text-2xl font-bold'>Your cart is empty</p>
            </div>
        )
    }

    return (
        <div className='w-10/12 mx-auto py-10 space-y-4'>
            <h2 className='text-3xl font-extrabold text-[#101727]'>Your Cart</h2>
            {carts.map(item => (
                <div key={item.id} className='border border-[#F2F2F2] p-10'>
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
                            className='text-red-500 font-bold px-4 py-2 rounded-full border border-red-200 hover:bg-red-50'>
                            Remove
                        </button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Cart