import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Envelope } from "@/components/wedding/envelope";
import { HeartDivider, SmallCar, Sprig } from "@/components/wedding/ornaments";
import leaves from "@/assets/wedding/leaves.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lojain & Taha — Wedding Invitation" },
      { name: "description", content: "With love, you're invited to the wedding of Lojain & Taha — November 11th, 2026." },
      { property: "og:title", content: "Lojain & Taha — Wedding Invitation" },
      { property: "og:description", content: "Open your invitation to the wedding of Lojain & Taha, November 11th, 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="relative mx-auto flex min-h-dvh max-w-md flex-col items-center overflow-hidden px-4 pb-28 pt-10">
      {open && (
        <img
          src={leaves.url}
          alt=""
          aria-hidden
          width={112}
          height={285}
          className="art-on-dark fade-edges pointer-events-none absolute right-0 top-28 w-20 animate-fade-up"
        />
      )}
      <header className="text-center">
        <Sprig />
        <h1 className="title-caps mt-3 text-[1.65rem] text-antique">Lojain &amp; Taha</h1>
        <p key={String(open)} className="label-caps mt-2 animate-fade-up text-[11px] text-muted-foreground">
          {open ? "November 11th, 2026" : "Wedding Invitation"}
        </p>
        <HeartDivider className="mt-4" />
      </header>

      <div className="mt-10 w-full">
        <Envelope open={open} onOpen={() => setOpen(true)} />
      </div>

      {!open ? (
        <section className="mt-10 text-center" aria-label="Invitation">
          <p className="title-caps text-sm leading-relaxed text-antique/85">
            With love
            <br />
            You're invited
            <br />
            to the wedding of
          </p>
          <p className="title-caps mt-2 text-xl text-antique">Lojain &amp; Taha</p>
          <SmallCar className="mt-4" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="label-caps mt-3 animate-soft-pulse text-[10px] text-muted-foreground"
          >
            Tap the seal to open
          </button>
        </section>
      ) : (
        <HeartDivider className="mt-10 animate-fade-up" />
      )}
    </main>
  );
}
