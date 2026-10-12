'use client'

import { creators } from '@/lib/creators'

export default function CreatorMarquee() {
  const loop = [...creators, ...creators]

  return (
    <section aria-label="Kreator Craftly" className="pb-20">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track gap-4 px-4">
          {loop.map((creator, index) => (
            <div
              key={`${creator.name}-${index}`}
              className="flex w-[260px] shrink-0 items-center gap-3 rounded-3xl border border-ink/10 bg-white px-5 py-4"
            >
              <span className="w-11 h-11 shrink-0 rounded-2xl bg-accent flex items-center justify-center font-bold text-sm">
                {creator.initials}
              </span>
              <div className="min-w-0">
                <div className="font-semibold truncate text-sm">
                  {creator.name}
                </div>
                <div className="text-xs text-ink/60 truncate">
                  {creator.role}
                </div>
                <div className="text-xs font-medium text-ink/80 mt-1">
                  {creator.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
