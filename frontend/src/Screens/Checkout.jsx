import React, { useState } from 'react';
import { ShoppingBag, MapPin, CreditCard, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [fullAddress, setFullAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const navigate = useNavigate();
  const [orderSummary, setOrderSummary] = useState({
    items: 3,
    total: 299.99,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/orderConfirmation');
    alert('Order placed successfully!');
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setShippingAddress(`${fullAddress.street}, ${fullAddress.city}, ${fullAddress.state} ${fullAddress.zipCode}, ${fullAddress.country}`);
    setIsAddressFormOpen(false);
  };

  return (
    <div className="bg-[#F8F5F0] text-[#6F4E37] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-[#C0392B] mb-4">Secure Checkout</h1>
          <p className="text-lg text-[#6F4E37]">Complete your purchase and embark on your spiritual journey.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#D4AF37]/20">
              <h2 className="text-2xl font-serif font-semibold text-[#C0392B] mb-4 flex items-center">
                <ShoppingBag className="mr-2" size={24} />
                Order Summary
              </h2>
              <div className="border-b border-[#6F4E37]/20 pb-4 mb-4">
                <p className="text-lg text-[#6F4E37] flex justify-between"><span>Items:</span> <span>{orderSummary.items}</span></p>
                <p className="text-xl font-semibold text-[#C0392B] flex justify-between mt-2"><span>Total:</span> <span>₹{orderSummary.total}</span></p>
              </div>
              <div className="bg-[#196F3D]/10 text-[#196F3D] p-3 rounded-md text-sm">
                Your order qualifies for free shipping!
              </div>
            </div>
          </div>

          {/* Shipping and Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#D4AF37]/20">
              <h2 className="text-2xl font-serif font-semibold text-[#C0392B] mb-6 flex items-center">
                <MapPin className="mr-2" size={24} />
                Shipping Information
              </h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-6">
                  <label htmlFor="address" className="block text-lg text-[#6F4E37] mb-2">Shipping Address</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      className="w-full p-3 border border-[#D4AF37] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E68A00]"
                      placeholder="Enter your address"
                      required
                      readOnly
                    />
                    <button
                      type="button"
                      onClick={() => setIsAddressFormOpen(true)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#E68A00] text-white px-3 py-1 rounded-md text-sm hover:bg-[#D4AF37] transition-colors"
                    >
                      Add Address
                    </button>
                  </div>
                </div>

                {isAddressFormOpen && (
                  <div className="mb-6 bg-[#F8F5F0] p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-3">Enter Full Address</h3>
                    <form onSubmit={handleAddressSubmit}>
                      <input
                        type="text"
                        placeholder="Street Address"
                        value={fullAddress.street}
                        onChange={(e) => setFullAddress({...fullAddress, street: e.target.value})}
                        className="outline-none w-full p-2 mb-2 border border-[#D4AF37] rounded-md"
                        required
                      />
                      <input
                        type="text"
                        placeholder="City"
                        value={fullAddress.city}
                        onChange={(e) => setFullAddress({...fullAddress, city: e.target.value})}
                        className="outline-none w-full p-2 mb-2 border border-[#D4AF37] rounded-md"
                        required
                      />
                      <input
                        type="text"
                        placeholder="State"
                        value={fullAddress.state}
                        onChange={(e) => setFullAddress({...fullAddress, state: e.target.value})}
                        className="outline-none w-full p-2 mb-2 border border-[#D4AF37] rounded-md"
                        required
                      />
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        value={fullAddress.zipCode}
                        onChange={(e) => setFullAddress({...fullAddress, zipCode: e.target.value})}
                        className="outline-none w-full p-2 mb-2 border border-[#D4AF37] rounded-md"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Country"
                        value={fullAddress.country}
                        onChange={(e) => setFullAddress({...fullAddress, country: e.target.value})}
                        className="outline-none w-full p-2 mb-2 border border-[#D4AF37] rounded-md"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-[#E68A00] text-white px-4 py-2 rounded-md hover:bg-[#D4AF37] transition-colors"
                      >
                        Save Address
                      </button>
                    </form>
                  </div>
                )}

                <div className="mb-6">
                  <label htmlFor="payment" className="block text-lg text-[#6F4E37] mb-2">Payment Method</label>
                  <div className="relative">
                    <select
                      id="payment"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full p-3 border border-[#D4AF37] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E68A00] appearance-none"
                      required
                    >
                      <option value="" disabled>Select payment method</option>
                      <option value="credit">Credit/Debit Card</option>
                      <option value="upi">UPI</option>
                      <option value="netbanking">Net Banking</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6F4E37]" size={20} />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#C0392B] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#E68A00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] flex items-center"
                    onClick={handleFormSubmit}
                  >
                    <CreditCard className="mr-2" size={20} />
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
