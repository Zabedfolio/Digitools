import { useState } from 'react';
import { toast } from 'react-toastify';

const tagStyles = {
  "Best Seller": "bg-[#FEF3C6] text-[#BB4D00]",
  "Popular": "bg-[#E1E7FF] text-[#4F39F6]",
  "New": "bg-[#DBFCE7] text-[#0A883E]",
}

const ModelCard = ({ model, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);

  const handleSubscription = () => {
    const isFound = carts.find(item => item.id === model.id);
    if (isFound) {
      toast.error("Already in cart!");
      return;
    }
    setCarts([...carts, model]);
    setIsBuy(true);
    toast.success("Added to cart!");
  }

  return (
    <div className='border border-[#F2F2F2] rounded-2xl p-6 space-y-4'>
      <div className='flex justify-between items-center'>
        <div className='border border-[#F2F2F2] rounded-full p-4'>
          <img src={`/src/assets/products/${model.icon}.png`} alt="" />
        </div>
        <div className={`px-3 py-1.5 rounded-full -mt-10 ${tagStyles[model.tag]}`}>
          <p>{model.tag}</p>
        </div>
      </div>

      <div className='font-bold text-2xl text-[#101727]'>
        <h2>{model.name}</h2>
      </div>

      <div className='text-[#627382]'>
        <p>{model.description}</p>
      </div>

      <div>
        <span className='font-bold text-2xl'>${model.price}</span>
        <span className='text-[#627382]'>/{model.period}</span>
      </div>

      <div className='space-y-2'>
        {model.features.map((feature, index) => (
          <div key={index} className='flex items-center gap-2'>
            <i className="fa-solid fa-check text-[#30B868]"></i>
            <span className='font-medium text-[#627382]'>{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubscription}
        className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold w-full text-white py-4 rounded-full'>
        {isBuy ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  )
}

export default ModelCard