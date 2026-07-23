"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-32 pb-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <span className="mb-6 inline-block rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-400">
              First Drop
            </span>

            <h1 className="text-6xl font-black leading-none tracking-tight md:text-8xl">
              NO
              <br />
              EXCUSES.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              Premium apparel for people who choose discipline over excuses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/10 bg-transparent text-white hover:bg-white hover:text-black"
              >
                Our Story
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: .2, duration: .8 }}
            className="flex justify-center"
          >
            <Image
              src="/images/mockup.jpg"
              alt="NO EXCUSES Hat"
              width={700}
              height={700}
              priority
              className="drop-shadow-[0_30px_80px_rgba(255,255,255,.08)]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
);
}