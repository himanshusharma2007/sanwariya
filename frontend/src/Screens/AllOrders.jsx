import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Package, Truck, CheckCircle } from 'lucide-react';

const AllOrders = () => {
  const [orders, setOrders] = useState([
    {
      orderId: '12345',
      date: 'January 15, 2025',
      total: 299.99,
      status: 'Shipped',
      shippingAddress: '123 Main St, Jaipur, Rajasthan',
      items: [
        { name: 'Vintage Leather Jacket', quantity: 1, price: 199.99 },
        { name: 'Classic Denim Shirt', quantity: 1, price: 79.00 }
      ]
    },
    {
      orderId: '12346',
      date: 'January 20, 2025',
      total: 199.99,
      status: 'Processing',
      shippingAddress: '456 Elm St, Udaipur, Rajasthan',
      items: [
        { name: 'Leather Belt', quantity: 1, price: 21.00 },
        { name: 'Cotton Socks', quantity: 2, price: 15.99 }
      ]
    },
    {
      orderId: '12347',
      date: 'January 22, 2025',
      total: 349.99,
      status: 'Delivered',
      shippingAddress: '789 Oak St, Jaipur, Rajasthan',
      items: [
        { name: 'Winter Coat', quantity: 1, price: 249.99 },
        { name: 'Wool Scarf', quantity: 1, price: 99.00 }
      ]
    },
  ]);

  // Status icon and color mapping
  const getStatusProps = (status) => {
    switch(status) {
      case 'Shipped':
        return { 
          icon: <Truck className="text-[#196F3D] mr-2" />, 
          color: 'bg-[#196F3D]/10 text-[#196F3D]' 
        };
      case 'Processing':
        return { 
          icon: <Package className="text-[#E68A00] mr-2" />, 
          color: 'bg-[#E68A00]/10 text-[#E68A00]' 
        };
      case 'Delivered':
        return { 
          icon: <CheckCircle className="text-[#C0392B] mr-2" />, 
          color: 'bg-[#C0392B]/10 text-[#C0392B]' 
        };
      default:
        return { 
          icon: null, 
          color: 'bg-gray-200 text-gray-800' 
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#C0392B] mb-4">
            Your Orders
          </h1>
          <p className="text-xl text-[#6F4E37]">
            Track and manage your recent purchases with ease.
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => {
            const { icon, color } = getStatusProps(order.status);
            return (
              <div 
                key={order.orderId} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Order Header */}
                <div className="flex justify-between items-center p-5 border-b border-[#6F4E37]/10">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-[#6F4E37] mr-4">
                      Order #{order.orderId}
                    </span>
                    <div className={`flex items-center px-3 py-1 rounded-full ${color}`}>
                      {icon}
                      <span className="font-medium">{order.status}</span>
                    </div>
                  </div>
                  <span className="text-[#6F4E37]/70">{order.date}</span>
                </div>

                {/* Order Details */}
                <div className="p-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Items */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#6F4E37] mb-3">
                        Order Items
                      </h3>
                      {order.items.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex justify-between mb-2 pb-2 border-b border-[#6F4E37]/10 last:border-b-0"
                        >
                          <div>
                            <p className="text-[#6F4E37] font-medium">{item.name}</p>
                            <p className="text-sm text-[#6F4E37]/70">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <span className="text-[#6F4E37] font-semibold">
                            ₹{item.price.toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Shipping Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#6F4E37] mb-3">
                        Shipping Details
                      </h3>
                      <div className="space-y-2">
                        <p className="text-[#6F4E37]">
                          <strong>Total:</strong> ₹{order.total.toFixed(2)}
                        </p>
                        <p className="text-[#6F4E37]">
                          <strong>Address:</strong> {order.shippingAddress}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Actions */}
                <div className="bg-[#F8F5F0] p-4 flex justify-end">
                  <Link
                    // to={`/order/${order.orderId}`}
                    to={"/orderConfirmation"}
                    className="flex items-center text-[#C0392B] hover:text-[#C0392B]/80 transition-colors"
                  >
                    View Order Details <ChevronRight className="ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Orders State */}
        {orders.length === 0 && (
          <div className="text-center bg-white rounded-xl shadow-md p-12">
            <p className="text-xl text-[#6F4E37] mb-6">
              You don't have any past orders yet.
            </p>
            <Link
              to="/shop"
              className="px-6 py-3 bg-[#196F3D] text-white rounded-lg hover:bg-[#196F3D]/90 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllOrders;