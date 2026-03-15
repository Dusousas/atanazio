import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";
import ServiceGallery from "./ServiceGallery";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Serviço não encontrado | Atanazio Terraplanagem" };
  }

  return {
    title: `${service.title} | Atanazio Terraplanagem`,
    description: service.description,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: `${service.title} | Atanazio Terraplanagem`,
      description: service.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-[#111009] text-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative border-b border-white/8 py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-[#f8d244]/8 blur-[120px]" />
        </div>

        <div className="maxW relative z-10 pt-10 pb-0">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[#f8d244]/70 transition hover:text-[#f8d244]"
          >
            <span className="inline-block h-px w-4 bg-current" />
            Serviços
          </Link>

          <div className="mt-8 grid min-h-[420px] grid-cols-1 gap-0 lg:grid-cols-2">
            <div className="flex flex-col justify-between border border-white/8 bg-white/[0.025] p-8 lg:p-12">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f8d244]">
                  Solução Especializada
                </p>
                <h1 className="mt-5 text-3xl font-bold uppercase leading-[1.1] tracking-tight text-white lg:text-[2.6rem]">
                  {service.title}
                </h1>
                <p className="mt-6 text-sm leading-[1.85] text-zinc-400 lg:text-[0.925rem]">
                  {service.intro}
                </p>
              </div>

              <Link
                href="https://api.whatsapp.com/send/?phone=5514996794593&text=Ol%C3%A1+gostaria+de+algumas+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
                className="mt-10 inline-flex items-center gap-3 self-start border border-[#f8d244] bg-[#f8d244] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1400] transition hover:bg-transparent hover:text-[#f8d244]"
              >
                Solicitar Orçamento
                <span className="inline-block h-px w-5 bg-current" />
              </Link>
            </div>

            <div className="relative min-h-[280px] overflow-hidden border border-l-0 border-white/8 lg:min-h-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={95}
                className="absolute inset-0 h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111009]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111009]/80 via-[#111009]/10 to-transparent" />
              <span className="absolute bottom-6 right-6 text-[10px] font-medium uppercase tracking-[0.28em] text-[#f8d244]/60">
                Atanazio Terraplanagem
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights strip ─────────────────────────────────── */}
      <section className="border-b border-white/8">
        <div className="maxW">
          <div
            className="flex flex-col justify-center items-center divide-x lg:divide-white/8 lg:flex-row"
            style={{
              gridTemplateColumns: `repeat(${service.highlights.length}, 1fr)`,
            }}
          >
            {service.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 px-6 py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-[#f8d244]" />
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galeria ──────────────────────────────────────────── */}
      <section className="border-b border-white/8 py-16 lg:py-20">
        <div className="maxW">
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-white/10" />
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f8d244]">
              Galeria do Serviço
            </h2>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <ServiceGallery images={service.gallery} title={service.title} />
        </div>
      </section>

      {/* ── Body: Process + Ideal Para ───────────────────────── */}
      <section className="pb-20">
        <div className="maxW">
        <div className="grid grid-cols-1 gap-px border border-white/8 bg-white/8 lg:grid-cols-2">
          <div className="bg-[#111009] p-8 lg:p-12">
            <header className="mb-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-white/10" />
              <h2 className="pb-20 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f8d244]">
                Como Executamos
              </h2>
              <span className="h-px flex-1 bg-white/10" />
            </header>

            <ol className="space-y-8">
              {service.process.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-5">
                  <div className="flex flex-col items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center border border-[#f8d244]/40 text-[11px] font-bold text-[#f8d244]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index < service.process.length - 1 && (
                      <span className="w-px flex-1 bg-white/8" />
                    )}
                  </div>

                  <div className="pb-2">
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.8] text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-[#0d0b07] p-8 lg:p-12">
            <header className="mb-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-white/10" />
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f8d244]">
                Ideal Para
              </h2>
              <span className="h-px flex-1 bg-white/10" />
            </header>

            <ul className="space-y-3">
              {service.idealFor.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border border-white/6 bg-white/[0.02] px-5 py-4 text-sm text-zinc-300 transition hover:border-[#f8d244]/20 hover:bg-[#f8d244]/5"
                >
                  <span className="mt-0.5 text-[10px] font-bold text-[#f8d244]/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-white/8 pt-10">
              <p className="text-xs leading-6 text-zinc-500">
                Entre em contato para uma avaliação sem compromisso.
              </p>
              <Link
                href="https://api.whatsapp.com/send/?phone=5514996794593&text=Ol%C3%A1+gostaria+de+algumas+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
                className="mt-5 inline-flex w-full items-center justify-center gap-3 border border-[#f8d244]/30 bg-[#f8d244]/8 px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f8d244] transition hover:bg-[#f8d244] hover:text-[#1a1400]"
              >
                Falar com a Equipe
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}


