const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`

function Section({
  n,
  title,
  children,
  bg = 'bg-white',
}: {
  n: string
  title: string
  children: React.ReactNode
  bg?: string
}) {
  return (
    <section className={`${bg} py-14 px-5`}>
      <div className="mx-auto max-w-3xl">
        <p className="text-amber-700 font-bold tracking-widest text-sm mb-2">{n}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-8 leading-tight">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

function Photo({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="rounded-2xl overflow-hidden shadow-md bg-stone-100">
      <img src={src} alt={alt} className="w-full object-cover" loading="lazy" />
      {caption && (
        <figcaption className="text-sm text-stone-600 px-4 py-2">{caption}</figcaption>
      )}
    </figure>
  )
}

function BigNumber({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
      <p className="text-4xl md:text-5xl font-extrabold text-amber-800">{value}</p>
      <p className="text-lg text-stone-700 mt-2">{label}</p>
    </div>
  )
}

const LOCKED_CLAIM_NL =
  'Eerste industriële proeven bij Havivank hebben aangetoond dat bestaande textielstructuren zoals denim en jute als drager kunnen worden behouden en door middel van naaldvilten mechanisch met nieuwe vezels kunnen worden geïntegreerd. Daarmee is de technische basis van Fibre Fidelity als procesprincipe reeds aangetoond. De volgende onderzoeksfase richt zich op materiaaleigenschappen, verschillende vezel- en textielcombinaties, procesparameters, duurzaamheid en toepasbaarheid.'

export default function Home() {
  return (
    <main className="text-stone-800 text-lg leading-relaxed antialiased">
      {/* 1 — HERO */}
      <header className="bg-stone-900 text-white py-20 px-5">
        <div className="mx-auto max-w-3xl">
          <p className="text-amber-400 font-bold tracking-widest text-sm mb-4">
            BOLDWOOL · FIBRE FIDELITY · DOSSIER EKOO
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Fibre Fidelity — preserve before you recycle.
          </h1>
          <p className="text-2xl text-stone-300 mb-10">
            We behouden de bestaande textielstructuur en voegen alleen toe wat nodig is om het
            opnieuw bruikbaar te maken — via industrieel naaldvilten.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={img('Start.jpg')}
              alt="Start: denim en textiel op de industriële lijn bij Havivank"
              className="w-full object-cover max-h-[420px]"
            />
          </div>
          <p className="text-sm text-stone-400 mt-3">
            Startbeeld — industriële proeven bij Havivank. Concept voor adviseurs; niet voor
            portal-indiening.
          </p>
        </div>
      </header>

      {/* 2 — PROBLEEM */}
      <Section n="PROBLEEM" title="Recycling vernietigt eerst de structuur." bg="bg-stone-50">
        <p className="text-xl mb-6">
          De meeste textiel-“recycling” begint met vernietigen: kleding en stoffen versnipperen tot
          vezel, en daarna opnieuw opbouwen. Daarmee verdwijnt belichaamde waarde — weef-/breistructuur,
          dimensionele stabiliteit, visuele identiteit — en volgt vaak downcycling.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <BigNumber value="Structuur" label="gaat verloren bij shred-first" />
          <BigNumber value="Downcycle" label="is het gebruikelijke resultaat" />
        </div>
      </Section>

      {/* 3 — AANPAK */}
      <Section n="AANPAK" title="Upcycling, niet shred-first.">
        <p className="text-xl mb-6">
          Procesprincipe:{' '}
          <strong>
            bestaand textiel (drager) + toegevoegde vezel + industrieel naaldvilten → mechanisch
            geïntegreerd nieuw textieloppervlak
          </strong>
        </p>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
          <p className="font-bold text-xl mb-3">Bewezen tot nu toe (industriële proeven, Havivank)</p>
          <ul className="space-y-2">
            <li>
              Denimstukken behouden als textiel (niet eerst versnipperd), daarna naaldgevilt tot één
              doorlopend oppervlak
            </li>
            <li>
              Geweven jute/burlap + vezellaag door dezelfde industriële naaldviltlijn
            </li>
          </ul>
          <p className="mt-4 font-bold">
            → Dit is een procesplatform, geen eenmalig denim-experiment.
          </p>
        </div>

        <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-6">
          <p className="font-bold text-xl mb-3">
            Nog niet bewezen (volgende onderzoeksfase — subsidieerbaar)
          </p>
          <ul className="space-y-2">
            <li>Volgprocessen: cut/make, bonding, finishing met Havivank-viltstof</li>
            <li>Slijtage / wear · wasduurzaamheid · hechting · treksterkte</li>
            <li>Vezel × textielcombinaties &amp; procesparameters</li>
            <li>Toepassingsgeschiktheid voor beoogde uses</li>
          </ul>
          <p className="mt-4 text-stone-600">
            Open onderzoek blijft open — geen material-performance claims; ambachtelijke
            proef-eindproducten tonen richting, geen industriële doorzet.
          </p>
        </div>
      </Section>

      {/* 4 — CLAIM (locked NL) */}
      <Section n="CLAIM" title="Voorstellen-formulering (NL, vast)." bg="bg-amber-50">
        <blockquote className="bg-white border-l-4 border-amber-600 rounded-r-2xl p-6 shadow-sm text-xl leading-relaxed">
          {LOCKED_CLAIM_NL}
        </blockquote>
        <p className="text-sm text-stone-600 mt-4">
          Locked wording voor voorstellen — niet herschrijven zonder expliciete afstemming.
        </p>
      </Section>

      {/* 5 — BEWIJS / PROCES (industrial POC = Havivank felt fabric) */}
      <Section n="BEWIJS" title="Proces-POC: Start → lijn → eindresultaat.">
        <p className="text-xl mb-8">
          Industriële stills van de Fibre Fidelity-lijn (proces-POC bij Havivank) — viltstof als
          procesprincipe, geen eindproduct-claim.
        </p>
        <div className="space-y-6 mb-8">
          <Photo
            src={img('Start.jpg')}
            alt="Start: denimstukken als textieldrager"
            caption="Start — bestaand textiel (o.a. denim) als drager, niet shred-first."
          />
          <div className="grid md:grid-cols-2 gap-6">
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

      {/* 6 — BEGRIPPEN (glossary — NL 6-regel blok verbatim) */}
      <Section n="BEGRIPPEN" title="Begrippen — FeltFabriCk / Fibre Fidelity" bg="bg-stone-50">
        <p className="text-base text-stone-600 italic mb-6">
          Preserve before you recycle. / Behoud vóór je recycleert.
        </p>
        <dl className="space-y-4 text-lg">
          <div>
            <dt className="font-bold text-stone-900 inline">Fibre Fidelity</dt>
            <dd className="inline">
              {' '}
              — we behouden bestaande textielstructuur zo lang mogelijk; vezel-recycling is de
              laatste stap.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-stone-900 inline">FeltFabriCk</dt>
            <dd className="inline">
              {' '}
              — lokale wol wordt door naaldvilten mechanisch verbonden met een bestaande geweven
              drager (denim, jute, canvas).
            </dd>
          </div>
          <div>
            <dt className="font-bold text-stone-900 inline">Hybride materiaal</dt>
            <dd className="inline">
              {' '}
              — wol op textiel, zonder lijm: een droog mechanisch proces.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-stone-900 inline">Minimum intervention</dt>
            <dd className="inline">
              {' '}
              — alleen bewerken wat nodig is voor de volgende functie.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-stone-900 inline">Proef-eindproducten</dt>
            <dd className="inline">
              {' '}
              — artisan sneakers en bodywarmers tonen toepassing; de industriële POC is het
              viltweefsel van de Havivank-lijn.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-stone-900 inline">Open vraag</dt>
            <dd className="inline">
              {' '}
              — kan dat industriële viltweefsel betrouwbaar de vervolgprocessen in (confectie,
              hechting, wassen, slijtage)?
            </dd>
          </div>
        </dl>
      </Section>

      {/* 7 — PROEF-EINDPRODUCTEN (artisan trial; not factory throughput) */}
      <Section n="PROEF" title="Proef-eindproducten">
        <p className="text-xl mb-2 text-stone-700 italic">
          Ambachtelijk gemaakt — zelfde Fibre Fidelity-procesidee; géén industriële doorzet.
        </p>
        <p className="text-base text-stone-600 mb-8">
          Artisan trial end products — handmatig door ambachtslieden, geen fabrieksdoorzet.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border-2 border-stone-200 rounded-2xl p-5">
            <h3 className="font-bold text-xl text-stone-900 mb-1">Sneaker Double Denim Stripe</h3>
            <p className="text-sm text-amber-800 font-bold tracking-wide mb-4">
              Proef-eindproduct · ambachtelijk
            </p>
            <div className="space-y-4">
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
          </div>

          <div className="bg-white border-2 border-amber-200 rounded-2xl p-5">
            <h3 className="font-bold text-xl text-stone-900 mb-1">Bodywarmers</h3>
            <p className="text-sm text-amber-800 font-bold tracking-wide mb-4">
              Proef-eindproduct · ambachtelijk
            </p>
            <div className="space-y-4">
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
          </div>
        </div>

        <p className="text-base text-stone-600 italic border-t border-stone-200 pt-4">
          Stof-route: industriële Havivank-viltstof → ambachtelijke eindproducten. Onderzoeksvraag:
          volgprocessen + materiaaleigenschappen.
        </p>
      </Section>

      {/* 8 — EKOO */}
      <Section n="EKOO CE" title="Waarom dit past bij Circulaire economie." bg="bg-stone-50">
        <ul className="space-y-4 text-xl mb-8">
          <li>
            <strong>Thema:</strong> consumptiegoederen / textiel (circulaire innovatie)
          </li>
          <li>
            <strong>Stadium:</strong> R&amp;D op materiaaleigenschappen na proces-POC — geen pure
            recycling, geen pilot/demo (DEI+), geen fundamenteel onderzoek
          </li>
          <li>
            <strong>Window (publiek):</strong> 22 okt – 3 dec 2026 · max ~€500k · ≤2 jaar ·
            consortium verplicht
          </li>
        </ul>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
          <p className="font-bold mb-2">Parallel dossier</p>
          <p>
            MIT Haalbaarheidsstudie Duurzaam Wolwassen (2025-005371) = andere tech-lane (ultrasoon
            wassen). Was-WPs niet dubbel financieren.
          </p>
        </div>
        <p className="mt-6 text-stone-600">Hypothese voor adviseurs — ter toetsing, geen vastgesteld kader.</p>
      </Section>

      {/* 9 — PARTNERS */}
      <Section n="PARTNERS" title="Partnerlogica.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
            <p className="font-bold text-xl mb-2">Boldwool</p>
            <p>Bewezen procesprincipe + industriële trial-ervaring.</p>
          </div>
          <div className="bg-white border-2 border-stone-200 rounded-2xl p-6">
            <p className="font-bold text-xl mb-2">Onderzoek / design (bijv. Elisa)</p>
            <p>Onderzoekt materiaal- en designgevolgen — niet vanaf nul.</p>
          </div>
        </div>
        <p className="mt-6 text-stone-600">
          Aanvrager: Bolderick Beheer B.V. (Boldwool) · dossier_EKOO
        </p>
      </Section>

      {/* 10 — VRAAG */}
      <Section n="VRAAG" title="Vraag aan adviseurs." bg="bg-green-50">
        <ol className="space-y-4 text-xl">
          <li className="bg-white rounded-2xl p-5 shadow-sm">
            <strong>1.</strong> Bevestig EKOO CE als primaire pot voor de material-performance-fase
          </li>
          <li className="bg-white rounded-2xl p-5 shadow-sm">
            <strong>2.</strong> Flag consortium- / eligibility-risico&apos;s vroeg
          </li>
          <li className="bg-white rounded-2xl p-5 shadow-sm">
            <strong>3.</strong> Adviseer claimtaal vs. RVO-uitsluiting “geen pure recycling”
          </li>
          <li className="bg-white rounded-2xl p-5 shadow-sm">
            <strong>4.</strong> Sequenceer t.o.v. MIT-wasdossier
          </li>
        </ol>
        <p className="mt-8 text-center font-bold text-xl">
          Geen portal-indiening tot Lennart expliciet zegt te versturen.
        </p>
      </Section>

      {/* 11 — FOOTER */}
      <footer className="bg-stone-900 text-white py-16 px-5 text-center">
        <p className="text-3xl font-extrabold mb-4">Draft voor adviseurs.</p>
        <p className="text-xl text-stone-300 mb-2">
          Fibre Fidelity — preserve before you recycle. Status: concept voor discussie, niet voor
          subsidieportaal-submit.
        </p>
        <p className="text-amber-400 text-xl font-bold">boldwool.com</p>
        <p className="text-stone-500 text-sm mt-6">
          Lennart van Bolderick — Boldwool · Bolderick Beheer B.V. · Foto&apos;s: industriële
          proeven (Havivank) + ambachtelijke proef-eindproducten
        </p>
      </footer>
    </main>
  )
}
