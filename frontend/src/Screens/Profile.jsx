import React, { useState, useRef } from 'react';
import { Edit, Save, User, MapPin, Mail, Phone, ClipboardList, Camera } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Dhairya Jain',
    email: 'dhairya@example.com',
    phone: '+91 123 456 7890',
    address: '123 Main St, Jaipur, Rajasthan',
    profileImage: null
  });

  const [editMode, setEditMode] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevState) => ({
          ...prevState,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Add validation or API call logic here
    setEditMode(false);
  };

  const orderHistory = [
    {
      orderId: '12345',
      date: 'January 15, 2025',
      status: 'Shipped',
      total: 299.99
    },
    {
      orderId: '12346',
      date: 'January 20, 2025',
      status: 'Processing',
      total: 199.99
    },
    {
      orderId: '12347',
      date: 'January 22, 2025',
      status: 'Delivered',
      total: 349.99
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Shipped': return 'text-[#196F3D] bg-[#196F3D]/10';
      case 'Processing': return 'text-[#E68A00] bg-[#E68A00]/10';
      case 'Delivered': return 'text-[#C0392B] bg-[#C0392B]/10';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#C0392B] mb-4">
            Your Profile
          </h1>
          <p className="text-xl text-[#6F4E37]">
            Manage your personal details and track your orders
          </p>
        </div>

        {/* Profile Information Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          {/* Card Header */}
          <div className="bg-[#D4AF37] p-5 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <User className="mr-3" /> Personal Information
            </h2>
            <button 
              onClick={() => setEditMode(!editMode)}
              className="text-white hover:text-[#F8F5F0] transition-colors"
            >
              {editMode ? <Save className="w-6 h-6" /> : <Edit className="w-6 h-6" />}
            </button>
          </div>

          {/* Profile Details */}
          <div className="p-6">
            {/* Profile Image Section */}
            <div className="flex justify-center mb-8 relative">
              <div className="relative">
                <div className="w-40 h-40 rounded-full border-4 border-[#C0392B]/20 overflow-hidden">
                  {user.profileImage ? (
                    <img 
                      src={user.profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#6F4E37]/10 flex items-center justify-center">
                      <User className="w-20 h-20 text-[#6F4E37]/50" />
                    </div>
                  )}
                </div>
                {editMode && (
                  <button 
                    onClick={() => fileInputRef.current.click()}
                    className="absolute bottom-0 right-0 bg-[#E68A00] text-white p-2 rounded-full shadow-lg hover:bg-[#E68A00]/90 transition-colors"
                  >
                    <Camera className="w-5 h-5" />
                  </button>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            {/* Personal Details Grid */}
            <div className="space-y-6">
              {/* Name Field */}
              <div className="grid grid-cols-3 items-center">
                <label className="text-[#6F4E37] font-medium flex items-center">
                  <User className="mr-2 text-[#C0392B]" /> Name
                </label>
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    className="col-span-2 p-3 border border-[#6F4E37]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E68A00]"
                  />
                ) : (
                  <span className="col-span-2 text-[#6F4E37]">{user.name}</span>
                )}
              </div>

              {/* Email Field */}
              <div className="grid grid-cols-3 items-center">
                <label className="text-[#6F4E37] font-medium flex items-center">
                  <Mail className="mr-2 text-[#196F3D]" /> Email
                </label>
                {editMode ? (
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="col-span-2 p-3 border border-[#6F4E37]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E68A00]"
                  />
                ) : (
                  <span className="col-span-2 text-[#6F4E37]">{user.email}</span>
                )}
              </div>

              {/* Phone Field */}
              <div className="grid grid-cols-3 items-center">
                <label className="text-[#6F4E37] font-medium flex items-center">
                  <Phone className="mr-2 text-[#E68A00]" /> Phone
                </label>
                {editMode ? (
                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                    className="col-span-2 p-3 border border-[#6F4E37]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E68A00]"
                  />
                ) : (
                  <span className="col-span-2 text-[#6F4E37]">{user.phone}</span>
                )}
              </div>

              {/* Address Field */}
              <div className="grid grid-cols-3 items-start">
                <label className="text-[#6F4E37] font-medium flex items-center">
                  <MapPin className="mr-2 text-[#C0392B]" /> Address
                </label>
                {editMode ? (
                  <textarea
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                    className="col-span-2 p-3 border border-[#6F4E37]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E68A00]"
                    rows="3"
                  />
                ) : (
                  <span className="col-span-2 text-[#6F4E37]">{user.address}</span>
                )}
              </div>

              {/* Save Button */}
              {editMode && (
                <div className="text-right mt-4">
                  <button
                    onClick={handleSave}
                    className="bg-[#196F3D] text-white px-6 py-3 rounded-lg hover:bg-[#196F3D]/90 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Order History Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Card Header */}
          <div className="bg-[#E68A00] p-5 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <ClipboardList className="mr-3" /> Order History
            </h2>
          </div>

          {/* Order List */}
          <div className="divide-y divide-[#6F4E37]/10">
            {orderHistory.map((order) => (
              <div 
                key={order.orderId} 
                className="p-5 hover:bg-[#F8F5F0]/50 transition-colors flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium text-[#6F4E37]">
                    Order #{order.orderId}
                  </p>
                  <p className="text-sm text-[#6F4E37]/70">
                    {order.date}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold text-[#6F4E37]">
                    ₹{order.total.toFixed(2)}
                  </span>
                  <span 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;