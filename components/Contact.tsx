'use client';
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
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

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Construct mailto link
        const subject = `Portfolio Contact: ${formState.name}`;
        const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
        const mailtoLink = `mailto:jvillegas.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.location.href = mailtoLink;

        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        setTimeout(() => setStatus('idle'), 5000);
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
                            {t.contact.title}
                        </h2>
                        <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                            {t.contact.subtitle}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(255,0,229,0.3)] transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-mono mb-1">{t.contact.labels.email}</p>
                                    <p className="font-medium text-white text-lg">jvillegas.dev@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(112,0,255,0.3)] transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-mono mb-1">{t.contact.labels.location}</p>
                                    <p className="font-medium text-white text-lg">Viña del Mar, Chile</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-premium p-8 rounded-3xl border border-glass-border relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-mono text-gray-400 ml-1">{t.contact.labels.name}</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all placeholder:text-gray-600"
                                    placeholder={t.contact.namePlaceholder}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-mono text-gray-400 ml-1">{t.contact.labels.email}</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all placeholder:text-gray-600"
                                    placeholder={t.contact.emailPlaceholder}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-mono text-gray-400 ml-1">{t.contact.labels.message}</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all resize-none placeholder:text-gray-600"
                                    placeholder={t.contact.messagePlaceholder}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold tracking-wide hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(112,0,255,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? t.contact.sending : (
                                    <>
                                        {t.contact.send} <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-400 text-sm text-center font-mono">{t.contact.success}</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-sm text-center font-mono">{t.contact.error}</p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
