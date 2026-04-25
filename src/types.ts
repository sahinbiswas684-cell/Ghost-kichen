export interface MenuItem {
  id: string;
  name: string;
  category: 'chicken' | 'momo' | 'burger' | 'pizza';
  description: string;
  price: number;
  emoji: string;
  badge?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'c1',
    name: 'Ghost Crispy Chicken',
    category: 'chicken',
    description: 'মুচমুচে ক্রিসপি চিকেন, গোপন ভূতুরে মশলা দিয়ে ফ্রাই করা। এক কামড়েই ভুলে যাবেন সব।',
    price: 280,
    emoji: '🍗',
    badge: 'বেস্টসেলার',
  },
  {
    id: 'c2',
    name: 'Haunted BBQ Wings',
    category: 'chicken',
    description: 'ধোঁয়ার সাথে BBQ মশলায় মাখানো জুইসি চিকেন উইংস। ৬ পিস একসাথে।',
    price: 320,
    emoji: '🍖',
  },
  {
    id: 'm1',
    name: 'Spirit Steam Momo',
    category: 'momo',
    description: 'নরম আবরণে মুচমুচে চিকেন ফিলিং। ঘি ও আদা-রসুনের ঐশ্বরিক কম্বো। ৮ পিস।',
    price: 220,
    emoji: '🥟',
    badge: 'নতুন',
  },
  {
    id: 'm2',
    name: 'Devil Fried Momo',
    category: 'momo',
    description: 'ডিপ ফ্রাই করা মোমো — বাইরে কুড়কুড়ে, ভেতরে রসালো। বিশেষ ডিপ সস সহ।',
    price: 250,
    emoji: '🥟',
  },
  {
    id: 'b1',
    name: 'Phantom Smash Burger',
    category: 'burger',
    description: 'ডাবল পেটি, গলা চিজ, ক্যারামেলাইজড পেঁয়াজ ও ভূতুরে সস। সাথে ক্রিসপি ফ্রাই।',
    price: 380,
    emoji: '🍔',
    badge: 'স্পেশাল',
  },
  {
    id: 'b2',
    name: 'Ghost Spicy Burger',
    category: 'burger',
    description: 'তীব্র ঝাল প্রেমীদের জন্য। ক্রিসপি চিকেন পেটি, হ্যালাপেনো, ফায়ার সস।',
    price: 350,
    emoji: '🍔',
  },
  {
    id: 'p1',
    name: 'Midnight Chicken Pizza',
    category: 'pizza',
    description: 'পাতলা ক্রাস্ট, গ্রিলড চিকেন, মোজারেলা ও ক্যাপসিকাম। রাতের আকাশের মতো কালো অলিভ।',
    price: 480,
    emoji: '🍕',
    badge: 'পপুলার',
  },
  {
    id: 'p2',
    name: 'Haunted BBQ Pizza',
    category: 'pizza',
    description: 'স্মোকি BBQ বেস, ডাবল চিজ, পেঁয়াজ ও জালাপেনো। প্রতিটি স্লাইস একটি অভিযান।',
    price: 520,
    emoji: '🍕',
  },
];
