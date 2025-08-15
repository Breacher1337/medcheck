import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
      <section className="py-20">
        <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
          <div className="relative text-center">
            {/* Main title for the MedCheck application, highlighting its purpose */}
            <h1 className="mx-auto mt-12 max-w-xl text-balance text-5xl font-medium"> In health, simplicity matters.
            </h1>
            {/* Descriptive text explaining MedCheck's mission and target audience */}
            <p className="text-muted-foreground mx-auto mb-6 mt-4 text-balance text-xl">
              MedCheck is a community-driven tool designed for rural areas in the Philippines to help local communities easily understand and manage their health information.
            </p>
            {/* Call-to-action buttons for user registration and login */}
            <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto">
              <Button asChild variant="default" size="sm">
                <Link href="/dashboard" prefetch={true}>
                  <span className="text-nowrap">Get Started</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link
                    href="/dashboard"
                    target="_blank"
                    rel="noreferrer"
                >
                  <span className="text-nowrap">Login</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-3xl bg-black/10">
            <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da601ed?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A community health worker talking to a family"
                className="absolute inset-0 size-full object-cover"
                width={1920}
                height={1080}
            />
          </div>
        </div>
      </section>
  );
}
