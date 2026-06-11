"use client";

import {
  Card,
  CardContent
}
from "@/components/ui/card";

import {
  motion
}
from "framer-motion";

export default function MetricCard({
  title,
  value
}: {
  title: string;
  value: string | number;
}) {

  return (

    <motion.div
      whileHover={{
        scale: 1.02
      }}
      transition={{
        duration: 0.2
      }}
    >


    <Card
      className="
      bg-zinc-950
      border-zinc-800
      "
    >
      <CardContent
        className="
        p-6
        "
      >

        <p
          className="
          text-zinc-400
          text-sm
          "
        >
          {title}
        </p>

        <h2
          className="
          text-3xl
          font-bold
          mt-2
          text-white
          "
        >
          {value}
        </h2>

      </CardContent>
    </Card>
    </motion.div>
  );
}