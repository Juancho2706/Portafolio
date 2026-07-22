'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import emailjs from '@emailjs/browser';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const ProjectForm = () => {
    const { t } = useLanguage();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // EmailJS Configuration
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setStatus('error');
            return;
        }

        setIsLoading(true);
        setStatus('idle');

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );
            setStatus('success');
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    if (!t.brief) return null; // Safety check

    return (
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode='wait'>
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-white/5 border border-ethereal/20 rounded-2xl p-8 text-center backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="w-16 h-16 bg-ethereal/10 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <CheckCircle2 className="text-ethereal w-8 h-8" />
                        </motion.div>
                        <h3 className="text-2xl font-display text-starlight mb-2">{t.brief.form.success}</h3>
                        <p className="text-starlight/60">{t.brief.form.successDesc}</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-6 text-ethereal hover:underline text-sm font-mono tracking-wider"
                        >
                            {t.brief.form.sendAnother}
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6"
                    >
                        {/* Name & Email Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="from_name" className="text-xs font-mono tracking-widest text-ethereal/80 uppercase ml-1">
                                    {t.brief.form.name}
                                </label>
                                <input
                                    id="from_name"
                                    type="text"
                                    name="from_name"
                                    required
                                    placeholder={t.brief.form.namePlaceholder}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-starlight placeholder:text-starlight/20 focus:outline-none focus:border-ethereal/50 focus:ring-1 focus:ring-ethereal/50 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="from_email" className="text-xs font-mono tracking-widest text-ethereal/80 uppercase ml-1">
                                    {t.brief.form.email}
                                </label>
                                <input
                                    id="from_email"
                                    type="email"
                                    name="from_email"
                                    required
                                    placeholder={t.brief.form.emailPlaceholder}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-starlight placeholder:text-starlight/20 focus:outline-none focus:border-ethereal/50 focus:ring-1 focus:ring-ethereal/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label htmlFor="from_phone" className="text-xs font-mono tracking-widest text-ethereal/80 uppercase ml-1">
                                {t.brief.form.phone}
                            </label>
                            <input
                                id="from_phone"
                                type="tel"
                                name="from_phone"
                                placeholder={t.brief.form.phonePlaceholder}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-starlight placeholder:text-starlight/20 focus:outline-none focus:border-ethereal/50 focus:ring-1 focus:ring-ethereal/50 transition-all"
                            />
                        </div>

                        {/* Project Type & Budget Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="project_type" className="text-xs font-mono tracking-widest text-ethereal/80 uppercase ml-1">
                                    {t.brief.form.type}
                                </label>
                                <div className="relative">
                                    <select
                                        id="project_type"
                                        name="project_type"
                                        required
                                        defaultValue=""
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-starlight appearance-none focus:outline-none focus:border-ethereal/50 focus:ring-1 focus:ring-ethereal/50 transition-all cursor-pointer"
                                    >
                                        <option value="" disabled className="bg-void">{t.brief.form.typePlaceholder}</option>
                                        <option value="web" className="bg-void">{t.brief.form.types.web}</option>
                                        <option value="ecommerce" className="bg-void">{t.brief.form.types.ecommerce}</option>
                                        <option value="landing" className="bg-void">{t.brief.form.types.landing}</option>
                                        <option value="app" className="bg-void">{t.brief.form.types.app}</option>
                                        <option value="other" className="bg-void">{t.brief.form.types.other}</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-starlight/30">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="budget" className="text-xs font-mono tracking-widest text-ethereal/80 uppercase ml-1">
                                    {t.brief.form.budget}
                                </label>
                                <div className="relative">
                                    <select
                                        id="budget"
                                        name="budget"
                                        required
                                        defaultValue=""
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-starlight appearance-none focus:outline-none focus:border-ethereal/50 focus:ring-1 focus:ring-ethereal/50 transition-all cursor-pointer"
                                    >
                                        <option value="" disabled className="bg-void">{t.brief.form.budgetPlaceholder}</option>
                                        <option value="small" className="bg-void">{t.brief.form.budgets.small}</option>
                                        <option value="medium" className="bg-void">{t.brief.form.budgets.medium}</option>
                                        <option value="large" className="bg-void">{t.brief.form.budgets.large}</option>
                                        <option value="enterprise" className="bg-void">{t.brief.form.budgets.enterprise}</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-starlight/30">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-mono tracking-widest text-ethereal/80 uppercase ml-1">
                                {t.brief.form.description}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder={t.brief.form.descriptionPlaceholder}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-starlight placeholder:text-starlight/20 focus:outline-none focus:border-ethereal/50 focus:ring-1 focus:ring-ethereal/50 transition-all resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isLoading}
                            type="submit"
                            className="w-full bg-ethereal/10 hover:bg-ethereal/20 text-ethereal border border-ethereal/50 font-display font-medium tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    {t.brief.form.submit}
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </motion.button>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-400 text-sm justify-center bg-red-400/10 p-2 rounded-lg">
                                <AlertCircle className="w-4 h-4" />
                                {t.brief.form.errorDesc}
                            </div>
                        )}
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectForm;
