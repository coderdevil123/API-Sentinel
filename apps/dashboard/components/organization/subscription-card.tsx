import {
  getSubscription
}
from "@/services/subscription.service";

import PlanBadge
from "./plan-badge";

export default async function
SubscriptionCard(){

  const subscription=
    await getSubscription();

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

        Subscription

      </h2>

      <div
          className="
          flex
          justify-between
          items-center
          "
        >

          <p>

            Current Plan

          </p>

          <PlanBadge
            plan={subscription.plan}
          />

        </div>

      <p>

        Seats:

        {" "}

        {subscription.usedSeats}

        /

        {subscription.seats}

      </p>

      <div
          className="
          w-full
          h-3
          bg-zinc-800
          rounded-full
          overflow-hidden
          "
        >

          <div
            style={{

              width:
                `${
                  subscription.usedSeats
                  /
                  subscription.seats
                  *
                  100
                }%`

            }}

            className="
            h-full
            bg-green-500
            "
          />

        </div>

      <p>

        Renewal

        {" "}

        {

          new Date(

            subscription.expiresAt

          ).toLocaleDateString()

        }

      </p>

    </div>

  );

}