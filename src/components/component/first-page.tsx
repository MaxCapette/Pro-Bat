/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";

import ContactPage from "../contact/contact";

export function FirstPage() {
  return (
    <>
      <header className="bg-gray-100 text-gray-900 py-6 shadow  ">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <HomeIcon className="h-6 w-6 text-gray-900 " />
            <span className="text-xl font-bold">PRO BAT</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              className="font-medium hover:text-gray-900 "
              href="#"
            >
              Accueil
            </Link>
            <Link
              className="font-medium hover:text-gray-900 "
              href="#services"
            >
              Services
            </Link>
            <Link
              className="font-medium hover:text-gray-900 "
              href="#services"
            >
              Projets
            </Link>
            <Link
              className="font-medium hover:text-gray-900 "
              href="#about"
            >
              À propos
            </Link>
            <Link
              className="font-medium hover:text-gray-900 "
              href="#contact"
            >
              Contact
            </Link>
          </nav>
          <Link className="hidden md:inline-flex" href="#contact">
            <Button className="hidden md:inline-flex" variant="outline">
              Demander un devis
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-full max-w-xs bg-gray-100  p-6"
              side="right"
            >
              <div className="flex flex-col gap-6">
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 "
                    href="#"
                  >
                    Accueil
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 "
                    href="#services"
                  >
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 "
                    href="#services"
                  >
                    Projets
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 "
                    href="#about"
                  >
                    À propos
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 "
                    href="#contact"
                  >
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#contact">
                    <Button className="w-full" variant="outline">
                      Demander un devis
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>
        <section className="bg-gray-100 text-gray-900 py-12 md:py-20 lg:py-28   topo">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Construire et rénover avec PRO BAT
              </h1>
              <p className="text-gray-600  text-lg">
                Depuis plus de 20 ans, PRO BAT accompagne ses clients dans la
                réalisation de leurs projets de construction et de rénovation.
              </p>
            </div>
            <img
              alt="Construction site"
              className="rounded-lg shadow-lg"
              height={400}
              src="/city.jpg"
              width={600}
            />
          </div>
        </section>
        <section
          className="bg-gray-100 text-gray-900 py-12 md:py-20 lg:py-28  "
          id="services"
        >
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Nos services</h2>
              <p className="text-gray-600  text-lg">
                Que vous ayez besoin de construire une nouvelle maison ou de
                rénover votre espace de vie, notre équipe d&apos;experts est là
                pour vous accompagner.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200  rounded-lg p-4 flex flex-col items-start gap-2">
                  <HomeIcon className="h-8 w-8 text-gray-900 " />
                  <h3 className="text-xl font-semibold">Construction</h3>
                  <p className="text-gray-600 ">
                    Nous construisons des bâtiments sur mesure pour répondre à
                    vos besoins.
                  </p>
                </div>
                <div className="bg-gray-200  rounded-lg p-4 flex flex-col items-start gap-2">
                  <RefreshCwIcon className="h-8 w-8 text-gray-900 " />
                  <h3 className="text-xl font-semibold">Rénovation</h3>
                  <p className="text-gray-600 ">
                    Nous rénovons et modernisons vos espaces pour les rendre
                    plus fonctionnels et agréables.
                  </p>
                </div>
                <div className="bg-gray-200  rounded-lg p-4 flex flex-col items-start gap-2">
                  <WrenchIcon className="h-8 w-8 text-gray-900 " />
                  <h3 className="text-xl font-semibold">Aménagement</h3>
                  <p className="text-gray-600 ">
                    Nous aménageons vos espaces intérieurs et extérieurs pour
                    optimiser leur utilisation.
                  </p>
                </div>
                <div className="bg-gray-200  rounded-lg p-4 flex flex-col items-start gap-2">
                  <BoltIcon className="h-8 w-8 text-gray-900 " />
                  <h3 className="text-xl font-semibold">Réparation</h3>
                  <p className="text-gray-600 ">
                    Nous intervenons rapidement pour réparer tous types de
                    dommages à votre bâtiment.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Nos projets</h2>
              <p className="text-gray-600  text-lg">
                Découvrez quelques-uns de nos projets les plus récents et
                inspirants.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 transition-all rounded-lg overflow-hidden dark:focus-visible:ring-gray-300">
                  <img
                    alt="Project 1"
                    className="aspect-[3/2] object-cover"
                    height={200}
                    src="/project1.jpg"
                    width={300}
                  />
                </div>
                <div className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 transition-all rounded-lg overflow-hidden dark:focus-visible:ring-gray-300">
                  <img
                    alt="Project 2"
                    className="aspect-[3/2] object-cover"
                    height={200}
                    src="/project2.jpg"
                    width={300}
                  />
                </div>
                <div className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 transition-all rounded-lg overflow-hidden dark:focus-visible:ring-gray-300">
                  <img
                    alt="Project 3"
                    className="aspect-[3/2] object-cover"
                    height={200}
                    src="/project3.jpg"
                    width={300}
                  />
                </div>
                <div className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 transition-all rounded-lg overflow-hidden dark:focus-visible:ring-gray-300">
                  <img
                    alt="Project 4"
                    className="aspect-[3/2] object-cover"
                    height={200}
                    src="/project4.jpg"
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-gray-100 text-gray-900 py-12 md:py-20 lg:py-28  "
          id="about"
        >
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                À propos de PRO BAT
              </h2>
              <p className="text-gray-600  text-lg">
                Depuis plus de 20 ans, PRO BAT est un acteur majeur dans le
                domaine de la construction et de la rénovation. Nous mettons
                notre expertise et notre savoir-faire au service de nos clients
                pour réaliser leurs projets dans les meilleures conditions.
              </p>
              <p className="text-gray-600  text-lg">
                Notre équipe de professionnels qualifiés s&apos;engage à fournir
                un travail de qualité, dans le respect des délais et du budget.
                Nous utilisons les dernières technologies et techniques de
                construction pour garantir la durabilité et la performance de
                vos bâtiments.
              </p>
            </div>
            <img
              alt="PRO BAT team"
              className="rounded-lg shadow-lg"
              height={400}
              src="/team.jpg"
              width={600}
            />
          </div>
        </section>
        <section
          className=" py-12 md:py-20 lg:py-24 space-y-4 bg-gray-100"
          id="contact"
        >
          <ContactPage />
        </section>
      </main>
      <footer className="bg-gray-100 text-gray-900 py-8  ">
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="text-gray-600  mt-4 md:mt-0">
            © 2024 PRO BAT. Tous droits réservés.
          </p>
          <p className="text-gray-600  mt-4 md:mt-0">
            206 ALLEE DE MONTFERMEIL
          </p>
          <p className="text-gray-600  mt-4 md:mt-0">
            93220 GAGNY
          </p>
          <p className="text-gray-600  mt-4 md:mt-0">
            TEL: contact@probat93.fr
          </p>
          <p className="text-gray-600  mt-4 md:mt-0">
            TEL: 01 85 10 03 72
          </p>
        </div>
      </footer>
    </>
  );
}

function BoltIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function RefreshCwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

function WrenchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
