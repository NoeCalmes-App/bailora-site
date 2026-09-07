import { app } from '../config/site'
import { StoreButtons } from './StoreButtons'

export function Cta() {
  return (
    <section className="bg-bg text-ink">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
        <h2 className="font-display text-[2.1rem] leading-[1.08] font-bold tracking-[-0.015em] text-balance md:text-[2.9rem]">
          Reprenez la main sur vos SCI.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-ink-2 md:text-[18px]">
          {app.nom} arrive sur l'App Store et Google Play.
        </p>
        <div className="mt-8 flex justify-center">
          <StoreButtons />
        </div>
      </div>
    </section>
  )
}
