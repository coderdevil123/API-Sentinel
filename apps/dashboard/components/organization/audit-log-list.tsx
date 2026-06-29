import {
  getAuditLogs
}
from "@/services/audit-log.service";

import AuditLogCard
from "./audit-log-card";

export default async function
AuditLogList(){

  const logs=
    await getAuditLogs();

  return(

    <div
      className="
      space-y-4
      "
    >

      <h2
        className="
        text-xl
        font-semibold
        "
      >
        Audit Log
      </h2>

      {

        logs.map(
          log=>(

            <AuditLogCard

              key={log.id}

              log={log}

            />

          )
        )

      }

    </div>

  );

}