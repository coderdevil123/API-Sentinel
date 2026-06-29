import {
  AuditLog
}
from "@/types/audit-log";

export default function
AuditLogCard({
  log
}:{
  log: AuditLog;
}){

  return(

    <div
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-xl
      p-4
      "
    >

      <h3
        className="font-medium"
      >
        {log.action}
      </h3>

      <p
        className="
        text-sm
        text-zinc-500
        "
      >
        {log.actor}
      </p>

      <p
        className="
        text-xs
        text-zinc-600
        "
      >
        {
          new Date(
            log.createdAt
          ).toLocaleDateString()
        }
      </p>

    </div>

  );

}