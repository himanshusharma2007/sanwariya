import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  X, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Tag, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  Search 
} from 'lucide-react';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Order #12345 Shipped',
      message: 'Your order has been shipped and is on its way to your address.',
      date: '2025-01-24',
      type: 'info',
      read: false,
      category: 'Order'
    },
    {
      id: 2,
      title: 'New Offer: 20% Off',
      message: 'Get 20% off on all spiritual products. Use code SPIRIT20 at checkout.',
      date: '2025-01-22',
      type: 'promotion',
      read: false,
      category: 'Promotion'
    },
    {
      id: 3,
      title: 'Order #12346 Delivered',
      message: 'Your order has been successfully delivered. Enjoy your purchase!',
      date: '2025-01-20',
      type: 'success',
      read: true,
      category: 'Order'
    },
  ]);

  const [filteredNotifications, setFilteredNotifications] = useState(notifications);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState('newest');

  // Filter and sort logic
  useEffect(() => {
    let result = notifications;

    // Search filter
    if (searchQuery) {
      result = result.filter(notification => 
        notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Type filter
    if (selectedTypes.length > 0) {
      result = result.filter(notification => 
        selectedTypes.includes(notification.type)
      );
    }

    // Sorting
    switch(sortOption) {
      case 'newest':
        result = result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        result = result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'unread':
        result = result.sort((a, b) => (a.read === b.read ? 0 : a.read ? 1 : -1));
        break;
    }

    setFilteredNotifications(result);
  }, [searchQuery, sortOption, selectedTypes, notifications]);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
  };

  // Remove notification
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Toggle type selection
  const toggleType = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  // Get unique types
  const notificationTypes = [...new Set(notifications.map(notification => notification.type))];

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Get notification icon based on type
  const getNotificationIcon = (type) => {
    switch(type) {
      case 'info':
        return <Info className="text-[#E68A00]" />;
      case 'promotion':
        return <Tag className="text-[#C0392B]" />;
      case 'success':
        return <CheckCircle className="text-[#196F3D]" />;
      case 'alert':
        return <AlertCircle className="text-[#C0392B]" />;
      default:
        return <Bell className="text-[#6F4E37]" />;
    }
  };

  return (
    <div className="bg-[#F8F5F0] text-[#6F4E37] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title and Search Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#C0392B] mb-6 text-center">
            Notifications
          </h1>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Search Input */}
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-[#6F4E37] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E68A00]"
              />
              <Search className="absolute left-3 top-3 text-[#6F4E37]" />
            </div>

            {/* Sort Dropdown */}
            {/* <div className="relative w-full md:w-auto">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full flex items-center justify-between px-4 py-2 border border-[#6F4E37] rounded-lg"
              >
                <span>Sort By</span>
                {isSortOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-full bg-white border border-[#6F4E37] rounded-lg shadow-lg">
                  <button 
                    onClick={() => { setSortOption('newest'); setIsSortOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F8F5F0]"
                  >
                    Newest First
                  </button>
                  <button 
                    onClick={() => { setSortOption('oldest'); setIsSortOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F8F5F0]"
                  >
                    Oldest First
                  </button>
                  <button 
                    onClick={() => { setSortOption('unread'); setIsSortOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#F8F5F0]"
                  >
                    Unread First
                  </button>
                </div>
              )}
            </div> */}
          </div>

          {/* Type Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {notificationTypes.map(type => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTypes.includes(type)
                    ? 'bg-[#E68A00] text-white'
                    : 'bg-[#F8F5F0] text-[#6F4E37] border border-[#6F4E37]'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-6">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-6 bg-white rounded-lg shadow-lg flex justify-between items-center relative ${
                  !notification.read ? 'border-l-4 border-[#E68A00]' : ''
                }`}
              >
                {/* Notification Icon */}
                <div className="absolute top-4 right-4 text-2xl">
                  {getNotificationIcon(notification.type)}
                </div>

                <div className="pr-12">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-semibold text-[#6F4E37] mr-2">
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <span className="bg-[#C0392B] text-white text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-[#6F4E37] mt-2">{notification.message}</p>
                  <p className="text-sm text-[#6F4E37]/70 mt-2">
                    {formatDate(notification.date)}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-[#196F3D] hover:text-[#196F3D]/70"
                      title="Mark as Read"
                    >
                      <CheckCircle />
                    </button>
                  )}
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-[#C0392B] hover:text-[#C0392B]/70"
                    title="Remove Notification"
                  >
                    <X />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <Bell className="mx-auto mb-4 w-16 h-16 text-[#C0392B]" />
              <p className="text-2xl text-[#6F4E37]">No notifications found.</p>
              <p className="text-[#6F4E37]/70 mt-2">You're all caught up!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;