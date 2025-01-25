import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const orderDetails = {
    orderId: '12345',
    items: 3,
    total: 299.99,
    shippingAddress: '123 Main St, Jaipur, Rajasthan',
    estimatedDelivery: 'February 1, 2025',
    orderItems: [
      { name: 'Vintage Leather Jacket', quantity: 1, price: 199.99 },
      { name: 'Classic Denim Shirt', quantity: 1, price: 79.00 },
      { name: 'Leather Belt', quantity: 1, price: 21.00 }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#6F4E37] py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Order Confirmation Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-[#C0392B] mb-4">
            Order Confirmation
          </h1>
          <p className="text-xl text-[#6F4E37]">
            Thank you for your purchase! Your order has been successfully processed.
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
          <div className="bg-[#E68A00] p-4">
            <h2 className="text-2xl font-semibold text-white">
              Order Summary
            </h2>
          </div>
          <div className="p-6">
            <div className="flex justify-between mb-4">
              <span className="text-lg font-medium">Order Number:</span>
              <span className="text-lg font-bold text-[#C0392B]">
                {orderDetails.orderId}
              </span>
            </div>
            <div className="border-t border-[#6F4E37]/20 pt-4">
              <h3 className="text-xl font-semibold mb-4">Order Items</h3>
              {orderDetails.orderItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center mb-3 pb-3 border-b border-[#6F4E37]/10 last:border-b-0"
                >
                  <div>
                    <p className="text-base font-medium">{item.name}</p>
                    <p className="text-sm text-[#6F4E37]/70">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <span className="text-base font-semibold">
                    ₹{item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t border-[#6F4E37]/20">
              <span className="text-xl font-bold">Total</span>
              <span className="text-2xl font-bold text-[#196F3D]">
                ₹{orderDetails.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="bg-[#D4AF37] p-4">
            <h2 className="text-2xl font-semibold text-white">
              Shipping Information
            </h2>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Delivery Address</h3>
              <p className="text-[#6F4E37]">{orderDetails.shippingAddress}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Estimated Delivery</h3>
              <p className="text-[#196F3D] font-medium">
                {orderDetails.estimatedDelivery}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/allOrders"
            className="px-6 py-3 bg-[#196F3D] text-white rounded-lg hover:bg-[#196F3D]/90 transition-colors"
          >
            View All Orders
          </Link>
          <Link
            to="/"
            className="px-6 py-3 bg-[#C0392B] text-white rounded-lg hover:bg-[#C0392B]/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Support Section */}
        <div className="text-center mt-10">
          <p className="text-[#6F4E37]">
            Need help? Contact our support team at{' '}
            <a 
              href="mailto:support@example.com" 
              className="text-[#C0392B] hover:underline"
            >
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;