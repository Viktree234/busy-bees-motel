import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaBed,
  FaCar,
  FaCoffee,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSwimmer,
  FaWifi,
  FaStar,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'
import { Bee } from './components/Bee'

const rooms = [
  {
    name: 'Honeycomb Standard',
    price: '₦28,000',
    blurb: 'Cozy queen bed, warm lighting, and a quiet corner after a long day.',
    perks: ['Queen bed', 'Free Wi‑Fi', 'Work desk'],
  },
  {
    name: 'Golden Deluxe',
    price: '₦42,000',
    blurb: 'Spacious suite energy with a sitting nook and garden-facing windows.',
    perks: ['King bed', 'Mini fridge', 'Garden view'],
  },
  {
    name: 'Queen Bee Suite',
    price: '₦65,000',
    blurb: 'Our flagship stay — soft golds, lounge space, and breakfast on us.',
    perks: ['Lounge area', 'Breakfast', 'Late checkout'],
  },
]

const amenities = [
  { icon: FaWifi, title: 'Fast Wi‑Fi', text: 'Stream, work, or plan tomorrow without buffering.' },
  { icon: FaCar, title: 'Secure Parking', text: 'On-site parking with night security.' },
  { icon: FaCoffee, title: 'Morning Buzz', text: 'Fresh coffee and light breakfast options.' },
  { icon: FaSwimmer, title: 'Cool Pool', text: 'A small pool to reset after the road.' },
  { icon: FaBed, title: 'Soft Landing', text: 'Crisp linens and rooms that actually sleep well.' },
  { icon: FaMapMarkerAlt, title: 'Easy Access', text: 'Minutes from main roads and local spots.' },
]

const gallery = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
]

const testimonials = [
  {
    name: 'Adaeze O.',
    quote: 'Felt like a warm hug after a long drive. Clean, calm, and the staff were pure honey.',
  },
  {
    name: 'Tunde K.',
    quote: 'Booked for one night, stayed three. Quiet rooms and the best small-motel vibe I’ve found.',
  },
  {
    name: 'Mira S.',
    quote: 'Pretty, peaceful, and actually affordable. Busy Bees gets the details right.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function App() {
  const [form, setForm] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    room: rooms[0].name,
  })

  const whatsappHref = useMemo(() => {
    const message = `Hi Busy Bees Motel! I'd like to book:
Name: ${form.name || '—'}
Check-in: ${form.checkIn || '—'}
Check-out: ${form.checkOut || '—'}
Guests: ${form.guests}
Room: ${form.room}`
    return `https://wa.me/2348000000000?text=${encodeURIComponent(message)}`
  }, [form])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-honey-200/70 bg-honey-50/85 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-honey-900">
            <Bee size={34} animated={false} />
            Busy Bees Motel
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-honey-800 md:flex">
            <a href="#rooms" className="hover:text-honey-600">Rooms</a>
            <a href="#amenities" className="hover:text-honey-600">Amenities</a>
            <a href="#gallery" className="hover:text-honey-600">Gallery</a>
            <a href="#about" className="hover:text-honey-600">About</a>
            <a href="#book" className="btn-primary !px-4 !py-2">Book Now</a>
          </nav>
          <a href="#book" className="btn-primary !px-4 !py-2 md:hidden">Book</a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="honeycomb relative overflow-hidden">
          <div className="absolute -left-10 top-20 h-40 w-40 rounded-full bg-honey-300/30 blur-3xl" />
          <div className="absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-honey-400/20 blur-3xl" />
          <div className="container-page grid min-h-[88vh] items-center gap-10 py-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.12 }}
              className="relative z-10"
            >
              <motion.p variants={fadeUp} className="eyebrow mb-4">
                Boutique roadside rest · Warm as honey
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl font-bold leading-tight text-honey-900 sm:text-5xl lg:text-6xl"
              >
                Rest easy at
                <span className="block text-honey-600">Busy Bees Motel</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-honey-800/90 sm:text-lg">
                A cozy stop for travelers who want soft beds, golden-hour vibes, and hospitality
                that actually feels human. Check in, slow down, buzz out rested.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <a href="#book" className="btn-primary">Check Availability</a>
                <a href="#rooms" className="btn-secondary">Explore Rooms</a>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3 text-sm text-honey-700">
                <div className="flex text-honey-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span>4.9 guest love · “clean, calm, and sweet”</span>
              </motion.div>
            </motion.div>

            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-honey-300/30 blur-2xl animate-pulse-glow" />
              <Bee size={220} />
              <motion.div
                className="card absolute -bottom-2 left-4 max-w-[220px] p-4 sm:left-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-honey-600">Tonight’s vibe</p>
                <p className="mt-1 text-sm text-honey-900">Soft lights · Quiet rooms · Fresh coffee at dawn</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ROOMS */}
        <section id="rooms" className="section-pad bg-white">
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="eyebrow">Rooms</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-honey-900 sm:text-4xl">
                Pick your honeycomb
              </h2>
              <p className="mt-3 text-honey-800/80">
                Every room is warm, clean, and built for real rest — not just Instagram photos.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {rooms.map((room, i) => (
                <motion.article
                  key={room.name}
                  className="card overflow-hidden"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="h-40 bg-gradient-to-br from-honey-200 via-honey-300 to-honey-500" />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-honey-900">{room.name}</h3>
                      <p className="text-sm font-semibold text-honey-600">{room.price}<span className="text-honey-700/70">/night</span></p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-honey-800/85">{room.blurb}</p>
                    <ul className="mt-4 space-y-1 text-sm text-honey-800">
                      {room.perks.map((perk) => (
                        <li key={perk}>• {perk}</li>
                      ))}
                    </ul>
                    <a href="#book" className="btn-primary mt-6 w-full">Book this room</a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* AMENITIES */}
        <section id="amenities" className="section-pad honeycomb-soft bg-honey-50">
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="eyebrow">Amenities</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-honey-900 sm:text-4xl">
                Little things that make the stay
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="card p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <item.icon className="text-2xl text-honey-500" />
                  <h3 className="mt-4 font-display text-lg font-bold text-honey-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-honey-800/85">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section-pad bg-white">
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="eyebrow">Gallery</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-honey-900 sm:text-4xl">
                A peek inside the hive
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {gallery.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt={`Busy Bees Motel gallery ${i + 1}`}
                  className={`h-36 w-full rounded-2xl object-cover sm:h-48 ${i === 0 || i === 5 ? 'md:col-span-1' : ''}`}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-pad bg-honey-100/60">
          <div className="container-page grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Our story</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-honey-900 sm:text-4xl">
                Built for travelers who still want warmth
              </h2>
              <p className="mt-4 text-honey-800/90 leading-relaxed">
                Busy Bees Motel started with a simple idea: roadside lodging doesn’t have to feel cold.
                We keep things small, clean, and kind — soft lighting, real hospitality, and rooms that
                help you actually recover.
              </p>
              <p className="mt-4 text-honey-800/90 leading-relaxed">
                Whether you’re passing through or staying a few nights, we want your stop to feel like a
                little golden pause in the middle of the map.
              </p>
            </div>
            <div className="card p-8">
              <div className="flex items-center gap-4">
                <Bee size={64} />
                <div>
                  <p className="font-display text-2xl font-bold text-honey-900">Since day one</p>
                  <p className="text-sm text-honey-700">Local-owned · Guest-first · Always buzzing</p>
                </div>
              </div>
              <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <dt className="text-2xl font-bold text-honey-600">24/7</dt>
                  <dd className="text-xs text-honey-800">Front desk</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-honey-600">12</dt>
                  <dd className="text-xs text-honey-800">Cozy rooms</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-honey-600">4.9</dt>
                  <dd className="text-xs text-honey-800">Guest rating</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-pad bg-white">
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="eyebrow">Guest love</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-honey-900 sm:text-4xl">
                What people say after checkout
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <motion.blockquote
                  key={t.name}
                  className="card p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="mb-3 flex text-honey-500">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <FaStar key={s} className="text-sm" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-honey-800/90">“{t.quote}”</p>
                  <footer className="mt-4 text-sm font-semibold text-honey-900">— {t.name}</footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING + CONTACT */}
        <section id="book" className="section-pad honeycomb">
          <div className="container-page grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Book a stay</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-honey-900 sm:text-4xl">
                Tell us when you’re buzzing in
              </h2>
              <p className="mt-4 max-w-lg text-honey-800/90">
                Fill this out and we’ll open WhatsApp with your booking details ready to send.
                Prefer a call or email? Reach us directly below.
              </p>
              <div className="mt-8 space-y-3 text-sm text-honey-800">
                <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-honey-500" /> 12 Hive Road, Lagos, Nigeria</p>
                <p className="flex items-center gap-2"><FaPhoneAlt className="text-honey-500" /> +234 800 000 0000</p>
                <p className="flex items-center gap-2"><FaEnvelope className="text-honey-500" /> stay@busybeesmotel.example</p>
              </div>
            </div>

            <form
              className="card p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault()
                window.open(whatsappHref, '_blank', 'noopener,noreferrer')
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="sm:col-span-2 text-sm font-medium text-honey-900">
                  Full name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-honey-200 bg-white px-3 py-2.5 outline-none ring-honey-400 focus:ring-2"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm font-medium text-honey-900">
                  Check-in
                  <input
                    required
                    type="date"
                    value={form.checkIn}
                    onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-honey-200 bg-white px-3 py-2.5 outline-none ring-honey-400 focus:ring-2"
                  />
                </label>
                <label className="text-sm font-medium text-honey-900">
                  Check-out
                  <input
                    required
                    type="date"
                    value={form.checkOut}
                    onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-honey-200 bg-white px-3 py-2.5 outline-none ring-honey-400 focus:ring-2"
                  />
                </label>
                <label className="text-sm font-medium text-honey-900">
                  Guests
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-honey-200 bg-white px-3 py-2.5 outline-none ring-honey-400 focus:ring-2"
                  >
                    {['1', '2', '3', '4'].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium text-honey-900">
                  Room
                  <select
                    value={form.room}
                    onChange={(e) => setForm({ ...form, room: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-honey-200 bg-white px-3 py-2.5 outline-none ring-honey-400 focus:ring-2"
                  >
                    {rooms.map((r) => (
                      <option key={r.name} value={r.name}>{r.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <button type="submit" className="btn-primary mt-6 w-full">
                <FaWhatsapp className="text-lg" />
                Send booking via WhatsApp
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-honey-200 bg-honey-900 text-honey-100">
        <div className="container-page flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Bee size={30} animated={false} />
            <div>
              <p className="font-display text-lg font-bold">Busy Bees Motel</p>
              <p className="text-xs text-honey-200">Warm beds. Sweet rest. Always buzzing.</p>
            </div>
          </div>
          <p className="text-xs text-honey-300">© {new Date().getFullYear()} Busy Bees Motel. Built with care.</p>
        </div>
      </footer>
    </div>
  )
}
