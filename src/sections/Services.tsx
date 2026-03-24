import { useTranslation } from 'react-i18next'
import { SERVICES } from '../config'

export default function Services() {
    const { t } = useTranslation()
    return (
        <section id="services" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="section-label">{t('services.label')}</p>
                    <h2 className="section-title">
                        {t('services.title_start')}{' '}
                        <span className="gradient-text">{t('services.title_span')}</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm">
                        {t('services.desc')}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {SERVICES.map((s, idx) => (
                        <div
                            key={s.title}
                            className="card group p-7 flex flex-col gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-2xl
                              group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-base mb-2 group-hover:text-indigo-500 transition-colors">
                                    {t(`services.items.${idx}.title`)}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    {t(`services.items.${idx}.description`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call-to-action strip */}
                <div className="mt-14 rounded-2xl glass p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-1">
                            {t('services.cta_title')}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            {t('services.cta_desc')}
                        </p>
                    </div>
                    <a href="#contact" className="btn-primary shrink-0">
                        {t('services.cta_btn')}
                    </a>
                </div>
            </div>
        </section>
    )
}
