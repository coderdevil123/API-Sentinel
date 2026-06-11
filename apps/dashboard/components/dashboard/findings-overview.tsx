"use client";

import {
  motion
}
from "framer-motion";

import {
  Session
}
from "@/types/session";

export default function FindingsOverview({
  sessions
}: {
  sessions: Session[];
}) {

  const findings =
    sessions.reduce(
      (sum, session) =>
        sum +
        (
          session.scanResult
            ?.totalFindings || 0
        ),
      0
    );

  return (

    <motion.div
      whileHover={{
        y: -4
      }}
      transition={{
        duration: 0.15
      }}
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-xl
      p-6
      "
    >

      <h2
        className="
        text-xl
        font-semibold
        mb-2
        "
      >
        Findings Overview
      </h2>

      <p
        className="
        text-5xl
        font-bold
        "
      >
        {findings}
      </p>

    </motion.div>
  );
}