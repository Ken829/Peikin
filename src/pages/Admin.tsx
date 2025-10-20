import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, Phone, Calendar, CheckCircle, Circle, RefreshCw, Bell, BellOff } from 'lucide-react';

interface Feedback {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  read: boolean;
  created_at: string;
}

export default function Admin() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const ADMIN_PASSWORD = 'peikin2025';

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support notifications');
      return false;
    }

    if (Notification.permission === 'granted') {
      setNotificationsEnabled(true);
      localStorage.setItem('notifications_enabled', 'true');
      return true;
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setNotificationsEnabled(true);
        localStorage.setItem('notifications_enabled', 'true');
        new Notification('Notifications Enabled!', {
          body: 'You will now receive alerts for new feedback',
          icon: '/peikin_logo_refined_letters_smooth.png',
        });
        return true;
      }
    }
    return false;
  };

  const disableNotifications = () => {
    setNotificationsEnabled(false);
    localStorage.setItem('notifications_enabled', 'false');
  };

  const showNotification = (feedback: Feedback) => {
    if (notificationsEnabled && Notification.permission === 'granted') {
      const notification = new Notification('New Customer Feedback!', {
        body: `${feedback.name}: ${feedback.message.substring(0, 100)}...`,
        icon: '/peikin_logo_refined_letters_smooth.png',
        tag: feedback.id,
        requireInteraction: true,
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    const notifEnabled = localStorage.getItem('notifications_enabled') === 'true';

    if (auth === 'true') {
      setIsAuthenticated(true);
    }

    if (notifEnabled && Notification.permission === 'granted') {
      setNotificationsEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadFeedback();

      const channel = supabase
        .channel('feedback-changes')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'feedback',
          },
          (payload) => {
            const newFeedback = payload.new as Feedback;
            showNotification(newFeedback);
            loadFeedback();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [isAuthenticated, notificationsEnabled]);

  const loadFeedback = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading feedback:', error);
    } else {
      setFeedback(data || []);
    }
    setLoading(false);
  };

  const toggleRead = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('feedback')
      .update({ read: !currentStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating feedback:', error);
    } else {
      loadFeedback();
    }
  };

  const filteredFeedback = feedback.filter((item) => {
    if (filter === 'unread') return !item.read;
    if (filter === 'read') return item.read;
    return true;
  });

  const unreadCount = feedback.filter((item) => !item.read).length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Feedback Dashboard</h1>
              <p className="text-gray-600 mt-1">
                {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="flex gap-2">
              {notificationsEnabled ? (
                <button
                  onClick={disableNotifications}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  title="Notifications are ON"
                >
                  <Bell className="h-4 w-4" />
                  Notifications ON
                </button>
              ) : (
                <button
                  onClick={requestNotificationPermission}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
                  title="Enable notifications"
                >
                  <BellOff className="h-4 w-4" />
                  Enable Notifications
                </button>
              )}
              <button
                onClick={loadFeedback}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('admin_auth');
                  setIsAuthenticated(false);
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({feedback.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'unread'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Unread ({unreadCount})
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'read'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Read ({feedback.length - unreadCount})
            </button>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading feedback...</p>
          </div>
        ) : filteredFeedback.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">No feedback to display</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFeedback.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl ${
                  !item.read ? 'border-l-4 border-amber-500' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                      {!item.read && (
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                          NEW
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${item.email}`} className="hover:text-amber-600">
                          {item.email}
                        </a>
                      </div>
                      {item.phone && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          <a href={`tel:${item.phone}`} className="hover:text-amber-600">
                            {item.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        {new Date(item.created_at).toLocaleString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 whitespace-pre-wrap">{item.message}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleRead(item.id, item.read)}
                    className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                      item.read
                        ? 'text-green-600 hover:bg-green-50'
                        : 'text-gray-400 hover:bg-gray-100'
                    }`}
                    title={item.read ? 'Mark as unread' : 'Mark as read'}
                  >
                    {item.read ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <Circle className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
