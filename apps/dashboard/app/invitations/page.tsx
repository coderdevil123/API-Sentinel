import DashboardLayout
from "@/components/layout/dashboard-layout";

import InvitationsGrid
from "@/components/invitations/invitations-grid";

import InviteMemberForm
from "@/components/invitations/invite-member-form";

export default function
InvitationsPage(){

  return(

    <DashboardLayout>

      <div
        className="
        grid
        xl:grid-cols-3
        gap-8
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          "
        >

          Organization Invitations

        </h1>

        <div>

            <InviteMemberForm/>

        </div>

        <div
            className="
            xl:col-span-2
            "
            >

            <InvitationsGrid/>

        </div>

      </div>

    </DashboardLayout>

  );

}