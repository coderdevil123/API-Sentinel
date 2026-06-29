import {
  getFeatures
}
from "@/services/feature.service";

export default async function
FeaturesCard(){

  const features=
    await getFeatures();

  return(

    <div
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-xl
      p-6
      space-y-3
      "
    >

      <h2
        className="
        text-xl
        font-semibold
        "
      >

        Enabled Features

      </h2>

      {

        features.map(

          feature=>(

            <div

              key={feature.id}

              className="
              flex
              justify-between
              "
            >

              <span>

                {feature.name}

              </span>

              <span>

                {

                  feature.enabled

                  ? "✅"

                  : "❌"

                }

              </span>

            </div>

          )

        )

      }

    </div>

  );

}