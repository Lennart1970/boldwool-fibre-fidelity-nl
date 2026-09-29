const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`

type Accent = 'clay' | 'forest' | 'slate' | 'plum'

const accentStyles: Record<
  Accent,
  { tag: string; border: string; soft: string; number: string }
> = {
  clay: {
    tag: 'text-clay',
    border: 'border-l-clay',
    soft: 'bg-clay-soft',
    number: 'bg-clay-soft text-clay',
  },
  forest: {
    tag: 'text-forest',
    border: 'border-l-forest',
    soft: 'bg-forest-soft',
    number: 'bg-forest-soft text-forest',
  },
  slate: {
    tag: 'text-slate-accent',
    border: 'border-l-slate-accent',
    soft: 'bg-slate-soft',
    number: 'bg-slate-soft text-slate-accent',
  },
  plum: {
    tag: 'text-plum-accent',
    border: 'border-l-plum-accent',
    soft: 'bg-plum-soft',
    number: 'bg-plum-soft text-plum-accent',
  },
}

function Eyebrow({ children, accent = 'clay' }: { children: React.ReactNode; accent?: Accent }) {
  return (
    <p
      className={`m-0 mb-3.5 inline-block text-[0.8rem] font-semibold uppercase tracking-[0.08em] ${accentStyles[accent].tag}`}
    >
      {children}
    </p>
  )
}

function Card({
  children,
  className = '',
  accent,
}: {
  children: React.ReactNode
  className?: string
  accent?: Accent
}) {
  const border = accent ? `border-l-4 ${accentStyles[accent].border}` : ''
  return (
    <div
      className={`rounded-card border border-paper-line bg-card p-[22px] shadow-card md:p-[26px] ${border} ${className}`}
    >
      {children}
    </div>
  )
}

function Section({
  n,
  title,
  children,
  accent = 'clay',
  intro,
}: {
  n: string
  title: string
  children: React.ReactNode
  accent?: Accent
  intro?: React.ReactNode
}) {
  return (
    <section className="mt-14 md:mt-[76px]">
      <Eyebrow accent={accent}>{n}</Eyebrow>
      <h2 className="mb-1.5 text-[clamp(1.45rem,4.5vw,1.9rem)] font-bold leading-tight tracking-[-0.01em] text-ink">
        {title}
      </h2>
      {intro}
      <div className="mt-5">{children}</div>
    </section>
  )
}

function Photo({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="overflow-hidden rounded-card border border-paper-line bg-paper-soft shadow-card">
      <img src={src} alt={alt} className="w-full object-cover" loading="lazy" />
      {caption && (
        <figcaption className="px-4 py-2.5 text-sm text-ink-muted">{caption}</figcaption>
      )}
    </figure>
  )
}

function BigNumber({
  value,
  label,
  accent = 'clay',
}: {
  value: string
  label: string
  accent?: Accent
}) {
  return (
    <div className={`rounded-[14px] p-5 text-center ${accentStyles[accent].soft}`}>
      <p className={`text-3xl font-extrabold md:text-4xl ${accentStyles[accent].tag}`}>{value}</p>
      <p className="mt-1.5 text-base text-ink-muted">{label}</p>
    </div>
  )
}

const LOCKED_CLAIM_NL =
  'Eerste industriële proeven bij Havivank hebben aangetoond dat bestaande textielstructuren zoals denim en jute als drager kunnen worden behouden en door middel van naaldvilten mechanisch met nieuwe vezels kunnen worden geïntegreerd. Daarmee is de technische basis van Fibre Fidelity als procesprincipe reeds aangetoond. De volgende onderzoeksfase richt zich op materiaaleigenschappen, verschillende vezel- en textielcombinaties, procesparameters, duurzaamheid en toepasbaarheid.'

export default function Home() {
  return (
    <main className="mx-auto max-w-[980px] px-5 pb-10 pt-[max(28px,env(safe-area-inset-top))] text-ink antialiased md:px-8 md:pb-14 md:pt-14">
      {/* Brand bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2.5 pt-1.5">
        <p className="m-0 text-[1.05rem] font-bold tracking-[-0.01em] text-ink">
          Boldwool<span className="mx-[3px] text-clay">·</span>Fibre Fidelity
        </p>
        <span className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-card px-3.5 py-1.5 text-[0.9rem] font-semibold text-forest shadow-card">
          <span
            className="h-2 w-2 rounded-full bg-[#3f9a6e] shadow-[0_0_0_4px_rgba(63,154,110,.15)]"
            aria-hidden="true"
          />
          Dossier EKOO · adviseurs
        </span>
      </div>

      {/* Hero media — real industrial photo */}
      <figure className="relative -mx-5 mt-2 md:mx-0 md:mt-3.5">
        <img
          src={img('Start.jpg')}
          alt="Start: denim en textiel op de industriële lijn bij Havivank"
          className="aspect-video w-full bg-paper-soft object-cover md:rounded-3xl md:border md:border-paper-line md:shadow-card"
          loading="eager"
          fetchPriority="high"
        />
      </figure>

      {/* Hero */}
      <header className="pb-2 pt-[22px] md:pt-[34px]">
        <Eyebrow>BOLDWOOL · FIBRE FIDELITY · DOSSIER EKOO</Eyebrow>
        <h1 className="m-0 text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.15] tracking-[-0.025em] text-ink">
          Fibre Fidelity — <span className="text-forest">preserve before you recycle.</span>
        </h1>
        <p className="mt-[18px] max-w-[40em] text-[1.12rem] text-ink-muted">
          We behouden de bestaande textielstructuur en voegen alleen toe wat nodig is om het opnieuw
          bruikbaar te maken — via industrieel naaldvilten.
        </p>
        <p className="mt-[18px] text-sm text-ink-muted">
          Startbeeld — industriële proeven bij Havivank. Concept voor adviseurs; niet voor
          portal-indiening.
        </p>
      </header>

      {/* 2 — PROBLEEM */}
      <Section n="PROBLEEM" title="Recycling vernietigt eerst de structuur." accent="plum">
        <Card accent="plum">
          <p className="m-0 text-[1.05rem] text-ink-muted">
            De meeste textiel-“recycling” begint met vernietigen: kleding en stoffen versnipperen tot
            vezel, en daarna opnieuw opbouwen. Daarmee verdwijnt belichaamde waarde — weef-/breistructuur,
            dimensionele stabiliteit, visuele identiteit — en volgt vaak downcycling.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <BigNumber value="Structuur" label="gaat verloren bij shred-first" accent="plum" />
            <BigNumber value="Downcycle" label="is het gebruikelijke resultaat" accent="clay" />
          </div>
        </Card>
      </Section>

      {/* 3 — AANPAK */}
      <Section n="AANPAK" title="Upcycling, niet shred-first." accent="forest">
        <Card accent="forest">
          <p className="m-0 text-[1.05rem] text-ink-muted">
            Procesprincipe:{' '}
            <strong className="text-ink">
              bestaand textiel (drager) + toegevoegde vezel + industrieel naaldvilten → mechanisch
              geïntegreerd nieuw textieloppervlak
            </strong>
          </p>

          <div className="mt-5 rounded-[14px] bg-forest-soft p-4 md:p-5">
            <p className="m-0 mb-2.5 text-lg font-bold text-ink">
              Bewezen tot nu toe (industriële proeven, Havivank)
            </p>
            <ul className="m-0 space-y-2 pl-[1.1rem] text-ink-muted marker:text-clay">
              <li>
                Denimstukken behouden als textiel (niet eerst versnipperd), daarna naaldgevilt tot één
                doorlopend oppervlak
              </li>
              <li>Geweven jute/burlap + vezellaag door dezelfde industriële naaldviltlijn</li>
            </ul>
            <p className="mb-0 mt-3.5 font-bold text-ink">
              → Dit is een procesplatform, geen eenmalig denim-experiment.
            </p>
          </div>

          <div className="mt-3 rounded-[14px] bg-paper-soft p-4 md:p-5">
            <p className="m-0 mb-2.5 text-lg font-bold text-ink">
              Nog niet bewezen (volgende onderzoeksfase — subsidieerbaar)
            </p>
            <ul className="m-0 space-y-2 pl-[1.1rem] text-ink-muted marker:text-slate-accent">
              <li>Volgprocessen: cut/make, bonding, finishing met Havivank-viltstof</li>
              <li>Slijtage / wear · wasduurzaamheid · hechting · treksterkte</li>
              <li>Vezel × textielcombinaties &amp; procesparameters</li>
              <li>Toepassingsgeschiktheid voor beoogde uses</li>
            </ul>
            <p className="mb-0 mt-3.5 text-ink-muted">
              Open onderzoek blijft open — geen material-performance claims; ambachtelijke
              proef-eindproducten tonen richting, geen industriële doorzet.
            </p>
          </div>
        </Card>
      </Section>

      {/* 4 — CLAIM (locked NL) */}
      <Section n="CLAIM" title="Voorstellen-formulering (NL, vast)." accent="clay">
        <Card>
          <blockquote className="m-0 border-l-4 border-clay py-1 pl-4 text-[clamp(1.05rem,3.5vw,1.2rem)] font-semibold leading-relaxed tracking-[-0.01em] text-ink">
            {LOCKED_CLAIM_NL}
          </blockquote>
          <p className="mb-0 mt-4 text-sm text-ink-muted">
            Locked wording voor voorstellen — niet herschrijven zonder expliciete afstemming.
          </p>
        </Card>
      </Section>

      {/* 5 — BEWIJS */}
      <Section
        n="BEWIJS"
        title="Proces-POC: Start → lijn → eindresultaat."
        accent="slate"
        intro={
          <p className="m-0 mt-2 text-ink-muted">
            Industriële stills van de Fibre Fidelity-lijn (proces-POC bij Havivank) — viltstof als
            procesprincipe, geen eindproduct-claim.
          </p>
        }
      >
        <div className="space-y-4">
          <Photo
            src={img('Start.jpg')}
            alt="Start: denimstukken als textieldrager"
            caption="Start — bestaand textiel (o.a. denim) als drager, niet shred-first."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <Photo
              src={img('20250312_094731.jpg')}
              alt="Lijnstill: denim en vezel op de conveyor"
              caption="Lijnstill — denim + vezellaag op de industriële lijn."
            />
            <Photo
              src={img('20250312_104912.jpg')}
              alt="Lijnstill: blauwe laag over witte vezel"
              caption="Lijnstill — mechanische integratie op de naaldviltlijn."
            />
            <Photo
              src={img('20250312_105054.jpg')}
              alt="Lijnstill: charcoal/crème textiel over machine"
              caption="Lijnstill — geïntegreerd oppervlak in wording."
            />
            <Photo
              src={img('20250312_105425.jpg')}
              alt="Lijnstill: rollen felt/non-woven"
              caption="Lijnstill — rollen als tastbaar tussenproduct."
            />
          </div>
          <Photo
            src={img('End-result.jpg')}
            alt="Eindresultaat: rollen upcycled textiel"
            caption="Eindresultaat — georganiseerde rollen na industriële proeven."
          />
        </div>
      </Section>

      {/* 6 — BEGRIPPEN */}
      <Section n="BEGRIPPEN" title="Begrippen — FeltFabriCk / Fibre Fidelity" accent="forest">
        <Card accent="forest">
          <p className="m-0 mb-5 italic text-ink-muted">
            Preserve before you recycle. / Behoud vóór je recycleert.
          </p>
          <dl className="m-0 space-y-4">
            <div>
              <dt className="inline font-bold text-ink">Fibre Fidelity</dt>
              <dd className="inline text-ink-muted">
                {' '}
                — we behouden bestaande textielstructuur zo lang mogelijk; vezel-recycling is de
                laatste stap.
              </dd>
            </div>
            <div>
              <dt className="inline font-bold text-ink">FeltFabriCk</dt>
              <dd className="inline text-ink-muted">
                {' '}
                — lokale wol wordt door naaldvilten mechanisch verbonden met een bestaande geweven
                drager (denim, jute, canvas).
              </dd>
            </div>
            <div>
              <dt className="inline font-bold text-ink">Hybride materiaal</dt>
              <dd className="inline text-ink-muted">
                {' '}
                — wol op textiel, zonder lijm: een droog mechanisch proces.
              </dd>
            </div>
            <div>
              <dt className="inline font-bold text-ink">Minimum intervention</dt>
              <dd className="inline text-ink-muted">
                {' '}
                — alleen bewerken wat nodig is voor de volgende functie.
              </dd>
            </div>
            <div>
              <dt className="inline font-bold text-ink">Proef-eindproducten</dt>
              <dd className="inline text-ink-muted">
                {' '}
                — artisan sneakers en bodywarmers tonen toepassing; de industriële POC is het
                viltweefsel van de Havivank-lijn.
              </dd>
            </div>
            <div>
              <dt className="inline font-bold text-ink">Open vraag</dt>
              <dd className="inline text-ink-muted">
                {' '}
                — kan dat industriële viltweefsel betrouwbaar de vervolgprocessen in (confectie,
                hechting, wassen, slijtage)?
              </dd>
            </div>
          </dl>
        </Card>
      </Section>

      {/* 7 — PROEF-EINDPRODUCTEN */}
      <Section
        n="PROEF"
        title="Proef-eindproducten"
        accent="clay"
        intro={
          <>
            <p className="m-0 mt-2 italic text-ink-muted">
              Ambachtelijk gemaakt — zelfde Fibre Fidelity-procesidee; géén industriële doorzet.
            </p>
            <p className="mb-0 mt-2 text-base text-ink-muted">
              Artisan trial end products — handmatig door ambachtslieden, geen fabrieksdoorzet.
            </p>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card accent="clay">
            <h3 className="m-0 text-[1.15rem] font-bold text-ink">Sneaker Double Denim Stripe</h3>
            <p className="mb-4 mt-1 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-clay">
              Proef-eindproduct · ambachtelijk
            </p>
            <div className="space-y-3">
              <Photo
                src={img('trial/IMG_9482.jpeg')}
                alt="Proef-sneaker: paar Double Denim Stripe, grijs vilt"
              />
              <Photo
                src={img('trial/IMG_9494.jpeg')}
                alt="Proef-sneaker: frontaal, felted denim-oppervlak"
              />
              <Photo
                src={img('trial/IMG_9491.jpeg')}
                alt="Proef-sneakers: drie stilstanden, Double Denim Stripe"
              />
            </div>
          </Card>

          <Card accent="forest">
            <h3 className="m-0 text-[1.15rem] font-bold text-ink">Bodywarmers</h3>
            <p className="mb-4 mt-1 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-forest">
              Proef-eindproduct · ambachtelijk
            </p>
            <div className="space-y-3">
              <Photo
                src={img('trial/BoldWool_web.jpg')}
                alt="Proef-bodywarmers: amber en stone in het veld"
              />
              <Photo
                src={img('trial/BoldWool_web-3.jpg')}
                alt="Proef-bodywarmers: amber-jacket op de voorgrond"
              />
              <Photo
                src={img('trial/BoldWool_web-8.jpg')}
                alt="Proef-bodywarmers: amber en stone, side-by-side"
              />
            </div>
          </Card>
        </div>

        <p className="mb-0 mt-5 border-t border-paper-line pt-4 italic text-ink-muted">
          Stof-route: industriële Havivank-viltstof → ambachtelijke eindproducten. Onderzoeksvraag:
          volgprocessen + materiaaleigenschappen.
        </p>
      </Section>

      {/* 8 — EKOO */}
      <Section n="EKOO CE" title="Waarom dit past bij Circulaire economie." accent="slate">
        <Card accent="slate">
          <ul className="m-0 space-y-3 pl-[1.1rem] text-[1.05rem] text-ink-muted marker:text-slate-accent">
            <li>
              <strong className="text-ink">Thema:</strong> consumptiegoederen / textiel (circulaire
              innovatie)
            </li>
            <li>
              <strong className="text-ink">Stadium:</strong> R&amp;D op materiaaleigenschappen na
              proces-POC — geen pure recycling, geen pilot/demo (DEI+), geen fundamenteel onderzoek
            </li>
            <li>
              <strong className="text-ink">Window (publiek):</strong> 22 okt – 3 dec 2026 · max ~€500k
              · ≤2 jaar · consortium verplicht
            </li>
          </ul>
          <div className="mt-5 rounded-[14px] bg-paper-soft p-4 md:p-5">
            <p className="m-0 mb-1.5 font-bold text-ink">Parallel dossier</p>
            <p className="m-0 text-ink-muted">
              MIT Haalbaarheidsstudie Duurzaam Wolwassen (2025-005371) = andere tech-lane (ultrasoon
              wassen). Was-WPs niet dubbel financieren.
            </p>
          </div>
          <p className="mb-0 mt-5 text-ink-muted">
            Hypothese voor adviseurs — ter toetsing, geen vastgesteld kader.
          </p>
        </Card>
      </Section>

      {/* 9 — PARTNERS */}
      <Section n="PARTNERS" title="Partnerlogica." accent="forest">
        <div className="grid gap-3 md:grid-cols-2">
          <Card className="border-forest/20 bg-forest-soft" accent="forest">
            <p className="m-0 mb-1.5 text-lg font-bold text-ink">Boldwool</p>
            <p className="m-0 text-ink-muted">Bewezen procesprincipe + industriële trial-ervaring.</p>
          </Card>
          <Card accent="slate">
            <p className="m-0 mb-1.5 text-lg font-bold text-ink">Onderzoek / design (bijv. Elisa)</p>
            <p className="m-0 text-ink-muted">
              Onderzoekt materiaal- en designgevolgen — niet vanaf nul.
            </p>
          </Card>
        </div>
        <p className="mb-0 mt-5 text-ink-muted">
          Aanvrager: Bolderick Beheer B.V. (Boldwool) · dossier_EKOO
        </p>
      </Section>

      {/* 10 — VRAAG (dark green highlight block) */}
      <Section n="VRAAG" title="Vraag aan adviseurs." accent="forest">
        <div className="rounded-card border-0 bg-gradient-to-br from-forest to-forest-deep p-7 text-[#f3efe6] shadow-card md:p-10">
          <ol className="m-0 list-none space-y-3 p-0">
            {[
              'Bevestig EKOO CE als primaire pot voor de material-performance-fase',
              'Flag consortium- / eligibility-risico\'s vroeg',
              'Adviseer claimtaal vs. RVO-uitsluiting “geen pure recycling”',
              'Sequenceer t.o.v. MIT-wasdossier',
            ].map((item, i) => (
              <li
                key={i}
                className="relative rounded-card border border-white/15 bg-white/10 px-5 py-4 pl-16 text-[#dfe8e2]"
              >
                <span className="absolute left-[18px] top-[17px] grid h-8 w-8 place-items-center rounded-full bg-white text-[0.95rem] font-bold text-forest">
                  {i + 1}
                </span>
                <span className="font-semibold text-white">{item}</span>
              </li>
            ))}
          </ol>
          <p className="mb-0 mt-8 text-center text-lg font-bold text-white">
            Geen portal-indiening tot Lennart expliciet zegt te versturen.
          </p>
        </div>
      </Section>

      {/* 11 — FOOTER */}
      <footer className="mt-14 border-t border-paper-line pt-[22px] text-[0.92rem] text-ink-muted md:mt-[76px]">
        <p className="m-0 text-[clamp(1.25rem,4vw,1.6rem)] font-bold tracking-[-0.01em] text-ink">
          Draft voor adviseurs.
        </p>
        <p className="mt-2 text-[1.05rem]">
          Fibre Fidelity — preserve before you recycle. Status: concept voor discussie, niet voor
          subsidieportaal-submit.
        </p>
        <p className="mt-2 font-bold text-forest">
          <a href="https://boldwool.com/" className="text-forest no-underline">
            boldwool.com
          </a>
        </p>
        <p className="mt-6 text-[0.82rem] opacity-80">
          Lennart van Bolderick — Boldwool · Bolderick Beheer B.V. · Foto&apos;s: industriële
          proeven (Havivank) + ambachtelijke proef-eindproducten
        </p>
      </footer>
    </main>
  )
}
