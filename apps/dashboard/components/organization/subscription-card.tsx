import {
  getSubscription
}
from "@/services/subscription.service";

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

      <p>

        Plan:

        {" "}

        {subscription.plan}

      </p>

      <p>

        Seats:

        {" "}

        {subscription.usedSeats}

        /

        {subscription.seats}

      </p>

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