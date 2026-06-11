"use client";

import {
  motion
}
from "framer-motion";

export default function PlatformHealth() {

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
        text-lg
        font-semibold
        mb-4
        "
      >
        Platform Health
      </h2>

      <div
        className="
        flex
        justify-between
        "
      >

        <span>
          Scanner Engine
        </span>

        <span
          className="
          text-green-500
          "
        >
          ONLINE
        </span>

      </div>

      <div
        className="
        flex
        justify-between
        mt-2
        "
      >

        <span>
          Discovery Engine
        </span>

        <span
          className="
          text-green-500
          "
        >
          ONLINE
        </span>

      </div>

      <div
        className="
        flex
        justify-between
        mt-2
        "
      >

        <span>
          Risk Engine
        </span>

        <span
          className="
          text-green-500
          "
        >
          ONLINE
        </span>

      </div>

    </motion.div>
  );
}