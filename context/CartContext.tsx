'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  category: string;
  image: string;
  bestseller: boolean;
}

interface CartContextType {
  cart: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  isInCart: (courseId: number) => boolean;
  cartCount: number;
  purchasedCourses: Course[];
  completePurchase: () => void;
  isPurchased: (courseId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Course[]>([]);
  const [purchasedCourses, setPurchasedCourses] = useState<Course[]>([]);

  // Load cart and purchased courses from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    
    const savedPurchased = localStorage.getItem('purchasedCourses');
    if (savedPurchased) {
      setPurchasedCourses(JSON.parse(savedPurchased));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save purchased courses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
  }, [purchasedCourses]);

  const addToCart = (course: Course) => {
    setCart((prevCart) => {
      // Check if course is already in cart
      if (prevCart.find((item) => item.id === course.id)) {
        return prevCart;
      }
      return [...prevCart, course];
    });
  };

  const removeFromCart = (courseId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, course) => total + course.price, 0);
  };

  const isInCart = (courseId: number) => {
    return cart.some((item) => item.id === courseId);
  };

  const completePurchase = () => {
    // Add cart items to purchased courses
    setPurchasedCourses((prev) => {
      const newPurchased = [...prev];
      cart.forEach((course) => {
        if (!newPurchased.find((p) => p.id === course.id)) {
          newPurchased.push(course);
        }
      });
      return newPurchased;
    });
    // Clear the cart
    setCart([]);
  };

  const isPurchased = (courseId: number) => {
    return purchasedCourses.some((item) => item.id === courseId);
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        isInCart,
        cartCount,
        purchasedCourses,
        completePurchase,
        isPurchased,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

