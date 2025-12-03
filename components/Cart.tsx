'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cart, removeFromCart, getTotalPrice, completePurchase } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirmPurchase = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Complete purchase (moves items to purchased courses and clears cart)
    completePurchase();
    setIsProcessing(false);
    setShowSuccess(true);

    // Close success message after 3 seconds and redirect to my courses
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      router.push('/my-courses');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998]"
        onClick={onClose}
      ></div>

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white shadow-2xl z-[9999] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="absolute inset-0 bg-white z-50 flex items-center justify-center flex-col p-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Purchase Successful!
            </h3>
            <p className="text-gray-600 text-center">
              Your courses have been added to your library. Redirecting...
            </p>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg
                className="w-24 h-24 text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-600 mb-4">
                Browse our courses and add them to your cart
              </p>
              <button
                onClick={() => {
                  onClose();
                  router.push('/courses');
                }}
                className="px-6 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
              >
                Browse Courses
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-24 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2">
                      By {course.instructor}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-purple-600">
                        ${course.price}
                      </span>
                      <button
                        onClick={() => removeFromCart(course.id)}
                        className="text-sm text-red-600 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-gray-900">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleConfirmPurchase}
              disabled={isProcessing}
              className="w-full py-3 bg-purple-600 text-white font-bold rounded hover:bg-purple-700 transition disabled:bg-purple-400 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Confirm Purchase'
              )}
            </button>
            <p className="text-xs text-gray-500 text-center">
              By completing your purchase you agree to these Terms of Service.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

