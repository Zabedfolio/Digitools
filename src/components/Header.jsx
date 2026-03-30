const Header = ({ selectType, setSelectType, cartCount }) => {

  // console.log({cartCount})

  return (
    <div className='pt-30 w-10/12 mx-auto'>
      <div className='text-center'>
        <h1 className='text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h1>
        <p className='text-[#627382] my-4'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>

      <div className='flex border border-[#F6F6F6] p-1 rounded-full w-fit gap-0.5 mx-auto mt-6'>
        <button
          onClick={() => setSelectType('products')}
          className={`font-bold px-6 py-2.5 rounded-full transition-all ${
            selectType === 'products'
              ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-[0px_3px_8px_0px_rgba(97,7,236,0.30)]'
              : 'text-[#627382]'
          }`}>
          Products
        </button>
        <button
          onClick={() => setSelectType('cart')}
          className={`font-bold px-6 py-2.5 rounded-full transition-all ${
            selectType === 'cart'
              ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-[0px_3px_8px_0px_rgba(97,7,236,0.30)]'
              : 'text-[#627382]'
          }`}>
          Cart ({cartCount})
          
        </button>
        
      </div>
      
    </div>
  )

  
}

export default Header