import { Session }
from "@/types/session";

export default function DiscoveryTable({
  session
}: {
  session: Session;
}) {

  const endpoints =
    session.discovery
      ?.endpoints || [];

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
        mb-6
        "
      >
        Discovered Endpoints
      </h2>

      <div
        className="
        space-y-3
        "
      >

        {
          endpoints.map(
            (
              endpoint: any,
              index: number
            ) => (

              <div
                key={index}
                className="
                flex
                justify-between
                border-b
                border-zinc-800
                pb-2
                "
              >

                <span>
                  {
                    endpoint.method
                  }
                </span>

                <span>
                  {
                    endpoint.path
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