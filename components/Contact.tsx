'use client';
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            });

            if (res.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-16"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Connect</span>
                        </h2>
                        <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                            Ready to start your next project? I'm currently open to new opportunities and collaborations in the Web3 space.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(255,0,229,0.3)] transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-mono mb-1">EMAIL</p>
                                    <p className="font-medium text-white text-lg">hello@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:border-secondary/50 group-hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-mono mb-1">PHONE</p>
                                    <p className="font-medium text-white text-lg">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(112,0,255,0.3)] transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-mono mb-1">LOCATION</p>
                                    <p className="font-medium text-white text-lg">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-premium p-8 rounded-3xl border border-glass-border relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-mono text-gray-400 ml-1">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all placeholder:text-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-mono text-gray-400 ml-1">EMAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all placeholder:text-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-mono text-gray-400 ml-1">MESSAGE</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all resize-none placeholder:text-gray-600"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold tracking-wide hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(112,0,255,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'TRANSMITTING...' : (
                                    <>
                                        SEND MESSAGE <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-400 text-sm text-center font-mono">Message transmitted successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-sm text-center font-mono">Transmission failed. Retry.</p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
