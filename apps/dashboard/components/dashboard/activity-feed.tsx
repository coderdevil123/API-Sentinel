import { Session } from "@/types/session";

export default function ActivityFeed({
  sessions
}: {
  sessions: Session[];
}) {

  return (

    <div
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
        mb-4
        "
      >
        Recent Activity
      </h2>

      <div
        className="
        space-y-4
        "
      >

        {
          sessions
            .slice(0, 5)
            .map(
              session => (

                <div
                  key={
                    session.scanId
                  }
                  className="
                  flex
                  justify-between
                  border-b
                  border-zinc-800
                  pb-3
                  "
                >

                  <span>
                    Scan Completed
                  </span>

                  <span
                    className="
                    text-zinc-500
                    "
                  >
                    {
                      session.target
                    }
                  </span>

                </div>

              )
            )
        }

      </div>

    </div>
  );
}