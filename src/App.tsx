import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Phone, MapPin, Clock, Star, Users, Flame, Truck } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from './types';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-ghost-dark/85 backdrop-blur-xl border-b border-ghost-glow/20 flex items-center justify-between px-6 md:px-10 py-4">
      <div className="font-spooky text-2xl md:text-3xl text-ghost-white tracking-widest">
        👻 Ghost Kitchen
      </div>
      <div className="hidden md:flex gap-8">
        {['মেনু', 'আমাদের', 'যোগাযোগ'].map((item) => (
          <a
            key={item}
            href={`#${item === 'মেনু' ? 'menu' : item === 'আমাদের' ? 'about' : 'contact'}`}
            className="text-gray-400 hover:text-ghost-glow text-sm tracking-[2px] uppercase transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <ShoppingCart className="text-ghost-glow w-6 h-6" />
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center text-center p-10 relative overflow-hidden">
      <motion.span
        animate={{ y: [0, -20, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="text-[clamp(80px,18vw,160px)] leading-none filter drop-shadow-[0_0_40px_rgba(123,47,255,0.6)] mb-4"
      >
        👻
      </motion.span>
      <h1 className="font-spooky text-[clamp(48px,12vw,100px)] tracking-[4px] leading-none bg-gradient-to-br from-white via-ghost-glow to-ghost-accent bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(123,47,255,0.4)] animate-[titleGlow_2s_infinite_alternate]">
        Ghost Kitchen
      </h1>
      <p className="text-[clamp(14px,3vw,20px)] text-gray-500 tracking-[6px] uppercase mt-3 font-light">
        রাতের সেরা স্বাদ • Since 2024
      </p>
      <p className="mt-6 text-[clamp(14px,2.5vw,17px)] text-gray-400 max-w-[480px] leading-relaxed">
        যেখানে খাবার শুধু পেট ভরায় না — আত্মাকে তৃপ্ত করে।
        ভূতুরে স্বাদের এক অনন্য অভিজ্ঞতায় স্বাগতম।
      </p>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-[3px]"
      >
        <span>↓ মেনু দেখুন ↓</span>
      </motion.div>
    </header>
  );
}

function FeatureBar() {
  return (
    <div className="py-20 px-10 bg-gradient-to-br from-ghost-glow/10 to-ghost-accent/5 border-y border-white/5 text-center relative z-10">
      <div className="text-5xl flex gap-4 justify-center mb-6">
        {['🍗', '🥟', '🍔', '🍕'].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
      <h2 className="font-display text-[clamp(42px,8vw,72px)] leading-none mb-3">
        ভূতুরে স্বাদের <span className="text-ghost-accent italic not-italic">চার রাজা</span>
      </h2>
      <p className="text-gray-500 text-base max-w-[500px] mx-auto leading-relaxed">
        চিকেন, মোমো, বার্গার, পিৎজা — চারটি অসাধারণ আইটেম। একটাই ঠিকানা।
      </p>
    </div>
  );
}

function MenuSection({ onAddToCart }: { onAddToCart: (name: string) => void }) {
  const [activeTab, setActiveTab] = useState<'all' | 'chicken' | 'momo' | 'burger' | 'pizza'>('all');

  const filteredItems = MENU_ITEMS.filter(item => activeTab === 'all' || item.category === activeTab);

  return (
    <section id="menu" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <span className="text-[11px] tracking-[6px] uppercase text-ghost-glow block mb-3">
        👻 আমাদের মেনু
      </span>
      <h2 className="font-display text-[clamp(42px,8vw,72px)] leading-[0.95] mb-4">
        বেছে নিন <span className="text-ghost-accent">আপনার</span><br />পছন্দের আইটেম
      </h2>

      <div className="flex gap-3 flex-wrap mt-10">
        {[
          { id: 'all', label: 'সব', icon: '' },
          { id: 'chicken', label: 'চিকেন', icon: '🍗' },
          { id: 'momo', label: 'মোমো', icon: '🥟' },
          { id: 'burger', label: 'বার্গার', icon: '🍔' },
          { id: 'pizza', label: 'পিৎজা', icon: '🍕' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-2.5 rounded-full border transition-all text-sm font-sans ${
              activeTab === tab.id
                ? 'bg-ghost-glow border-ghost-glow text-white'
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-ghost-glow hover:border-ghost-glow hover:text-white'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-ghost-card border border-white/5 rounded-[20px] overflow-hidden relative group hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(123,47,255,0.25)] hover:border-ghost-glow/30 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ghost-glow/5 to-transparent pointer-events-none" />
              {item.badge && (
                <span className="absolute top-4 right-4 bg-ghost-accent text-white text-[10px] tracking-[2px] font-semibold px-3 py-1 rounded-full uppercase z-10 shadow-lg">
                  {item.badge}
                </span>
              )}
              <div className="p-6 md:p-8 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform animate-[wiggle_3s_infinite_ease-in-out]">
                  {item.emoji}
                </span>
              </div>
              <div className="px-6 pb-7 mt-[-10px]">
                <div className="text-[10px] tracking-[4px] uppercase text-ghost-glow mb-1.5 font-medium">
                  {item.category === 'chicken' ? 'চিকেন' : item.category === 'momo' ? 'মোমো' : item.category === 'burger' ? 'বার্গার' : 'পিৎজা'}
                </div>
                <h3 className="font-display text-2xl tracking-wide mb-2 text-ghost-white">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed min-h-[48px] mb-5">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="font-display text-2xl text-ghost-accent tracking-wider">
                    ৳ {item.price}
                  </div>
                  <button
                    onClick={() => onAddToCart(item.name)}
                    className="bg-gradient-to-br from-ghost-glow to-ghost-accent text-white border-none py-2 px-5 rounded-full text-xs cursor-pointer tracking-wider hover:scale-105 active:scale-95 shadow-lg shadow-ghost-glow/20 transition-transform font-sans font-medium"
                  >
                    অর্ডার করুন
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const stats = [
    { label: 'খুশি গ্রাহক', value: '৫০০+', icon: <Users className="w-5 h-5 text-ghost-glow" /> },
    { label: 'আইটেম', value: '৮', icon: <Flame className="w-5 h-5 text-ghost-accent" /> },
    { label: 'ডেলিভারি', value: '২৪/৭', icon: <Truck className="w-5 h-5 text-ghost-glow" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 text-center">
      <span className="text-[11px] tracking-[6px] uppercase text-ghost-glow block mb-3">
        👻 আমাদের গল্প
      </span>
      <h2 className="font-display text-[clamp(42px,8vw,72px)] leading-none mb-6">
        কেন <span className="text-ghost-accent italic not-italic">Ghost</span> Kitchen?
      </h2>
      <p className="text-gray-400 max-w-[600px] mx-auto text-base md:text-lg leading-loose">
        ২০২৪ সালে জন্ম নেওয়া Ghost Kitchen শুধু একটি রেস্তোরাঁ নয় — এটি একটি অনুভূতি।
        প্রতিটি খাবারে আমরা ঢেলে দিই তাজা উপকরণ, অনন্য মশলা আর অসাধারণ ভালোবাসা।
        রাত হোক বা দিন, আমরা সবসময় প্রস্তুত আপনার জন্য।
      </p>

      <div className="flex flex-wrap justify-center gap-10 md:gap-20 mt-16">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-2">{stat.icon}</div>
            <div className="font-display text-5xl md:text-6xl text-ghost-glow/80 mb-1">{stat.value}</div>
            <div className="text-gray-500 text-[11px] tracking-[2px] uppercase">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 text-center max-w-4xl mx-auto border-t border-white/5">
      <span className="text-[11px] tracking-[6px] uppercase text-ghost-glow block mb-3">
        📞 যোগাযোগ
      </span>
      <h2 className="font-display text-[clamp(42px,8vw,72px)] leading-none mb-6">
        অর্ডার করুন <span className="text-ghost-accent italic not-italic">এখনই</span>
      </h2>
      <div className="space-y-6 mt-8">
        <div className="flex items-center justify-center gap-3 text-gray-400 text-lg">
          <Phone className="w-5 h-5 text-ghost-glow" />
          <span>01712-345678</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-gray-400 text-lg">
          <MapPin className="w-5 h-5 text-ghost-glow" />
          <span>ভূতপাড়া, ঢাকা-১২১২</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-gray-400 text-lg">
          <Clock className="w-5 h-5 text-ghost-glow" />
          <span>সকাল ১০টা — রাত ২টা</span>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-14 bg-gradient-to-br from-ghost-glow to-ghost-accent text-white border-none py-4 px-12 rounded-full text-xl cursor-pointer font-sans tracking-wide shadow-[0_8px_40px_rgba(123,47,255,0.4)]"
      >
        👻 এখনই অর্ডার দিন
      </motion.button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 text-center py-16 px-6 border-t border-white/5 bg-ghost-dark">
      <span className="text-4xl block mb-4">👻</span>
      <h3 className="font-spooky text-2xl text-ghost-white mb-2">Ghost Kitchen</h3>
      <p className="text-gray-500 text-sm max-w-sm mx-auto mb-10 leading-relaxed">
        রাতের সেরা খাবার, আপনার দরজায় পৌঁছে দিই
      </p>
      <div className="text-[10px] tracking-[3px] text-gray-600 uppercase font-medium">
        © 2024 GHOST KITCHEN. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}

function GhostBackground() {
  const ghosts = [
    { left: '5%', duration: 18, delay: 0, size: 120 },
    { left: '85%', duration: 14, delay: -7, size: 80 },
    { left: '45%', duration: 22, delay: -12, size: 60 },
  ];

  return (
    <>
      <div className="fixed inset-0 z-0 bg-ghost-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(123,47,255,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(255,61,61,0.08)_0%,transparent_60%)]" />
      </div>
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-50 fog-texture animate-[fogDrift_20s_linear_infinite_alternate]" />

      {ghosts.map((ghost, i) => (
        <motion.div
          key={i}
          initial={{ y: '110vh', x: 0, rotate: -5, opacity: 0 }}
          animate={{
            y: '-20vh',
            x: [0, 30, -30, 0],
            rotate: [5, -5, 5],
            opacity: 0.08
          }}
          transition={{
            duration: ghost.duration,
            repeat: Infinity,
            delay: ghost.delay,
            ease: "linear",
          }}
          className="fixed pointer-events-none z-[1] select-none"
          style={{ left: ghost.left, fontSize: ghost.size }}
        >
          👻
        </motion.div>
      ))}
    </>
  );
}

export default function App() {
  const [toast, setToast] = useState<{ show: boolean; msg: string }>({ show: false, msg: '' });

  const handleAddToCart = (name: string) => {
    setToast({ show: true, msg: `"${name}" কার্টে যোগ হয়েছে!` });
  };

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast({ show: false, msg: '' }), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  return (
    <div className="min-h-screen font-sans text-ghost-white selection:bg-ghost-glow selection:text-white">
      <GhostBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FeatureBar />
        <MenuSection onAddToCart={handleAddToCart} />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>

      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 right-8 z-[1000] bg-ghost-card border border-ghost-glow p-4 px-6 rounded-2xl shadow-[0_8px_40px_rgba(123,47,255,0.3)] flex items-center gap-3 backdrop-blur-lg"
          >
            <span className="text-xl">👻</span>
            <span className="text-sm font-medium">{toast.msg}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
