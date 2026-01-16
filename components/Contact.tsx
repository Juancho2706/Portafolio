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
        await new Promise(resolve => setTimeout(resolve, 1000));
        const subject = `Portfolio Contact: ${formState.name}`;
        const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
        window.location.href = `mailto:jvillegas.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-tartarus">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rotate-45 transform translate-x-1/2 -translate-y-1/2 blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rotate-45 transform -translate-x-1/2 translate-y-1/2 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-none relative overflow-hidden max-w-5xl mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    {/* Calling Card Aesthetic - Red Diagonal */}
                    <div className="absolute top-0 right-0 w-[300px] h-full bg-primary/20 -skew-x-12 transform translate-x-16" />

                    <div className="grid md:grid-cols-2">
                        {/* Info Side */}
                        <div className="p-12 relative z-10 bg-black/40">
                            <h2 className="text-5xl font-impact text-white mb-2 uppercase italic text-stroke-sm">{t.contact.title}</h2>
                            <p className="text-secondary font-mono text-sm mb-12 tracking-widest">// SEND_MESSAGE_TO_PHANTOM</p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 bg-white text-tartarus flex items-center justify-center transform -skew-x-12 group-hover:scale-110 transition-transform shadow-[4px_4px_0_#1A4CD2]">
                                        <Mail size={24} className="skew-x-12" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-mono tracking-wider">{t.contact.labels.email}</p>
                                        <p className="font-bold text-white text-lg font-tech">jvillegas.dev@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 bg-white text-tartarus flex items-center justify-center transform -skew-x-12 group-hover:scale-110 transition-transform shadow-[4px_4px_0_#1A4CD2]">
                                        <MapPin size={24} className="skew-x-12" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-mono tracking-wider">{t.contact.labels.location}</p>
                                        <p className="font-bold text-white text-lg font-tech">Viña del Mar, Chile</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="p-12 relative z-10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="group">
                                    <label htmlFor="name" className="text-xs font-mono text-secondary mb-1 block uppercase tracking-wider">{t.contact.labels.name}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-tartarus/80 border-b-2 border-white/20 px-4 py-3 text-white focus:border-secondary focus:outline-none focus:bg-tartarus transition-colors font-tech text-lg"
                                        placeholder="CODENAME"
                                    />
                                </div>

                                <div className="group">
                                    <label htmlFor="email" className="text-xs font-mono text-secondary mb-1 block uppercase tracking-wider">{t.contact.labels.email}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-tartarus/80 border-b-2 border-white/20 px-4 py-3 text-white focus:border-secondary focus:outline-none focus:bg-tartarus transition-colors font-tech text-lg"
                                        placeholder="CONTACT@DOMAIN.COM"
                                    />
                                </div>

                                <div className="group">
                                    <label htmlFor="message" className="text-xs font-mono text-secondary mb-1 block uppercase tracking-wider">{t.contact.labels.message}</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-tartarus/80 border-b-2 border-white/20 px-4 py-3 text-white focus:border-secondary focus:outline-none focus:bg-tartarus transition-colors font-tech text-lg resize-none"
                                        placeholder="MISSION DETAILS..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-primary text-white font-impact uppercase text-xl hover:bg-white hover:text-tartarus transition-all shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] disabled:opacity-50"
                                >
                                    {isSubmitting ? t.contact.sending : (
                                        <span className="flex items-center justify-center gap-2">
                                            {t.contact.send} <Send size={20} className="-rotate-45" />
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
