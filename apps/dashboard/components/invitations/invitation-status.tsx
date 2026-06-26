export default function
InvitationStatus({
  status
}:{
  status:
    | "PENDING"
    | "ACCEPTED"
    | "EXPIRED";
}){

  const colors={

    PENDING:
      "bg-yellow-500/20 text-yellow-400",

    ACCEPTED:
      "bg-green-500/20 text-green-400",

    EXPIRED:
      "bg-red-500/20 text-red-400"

  };

  return(

    <span
      className={`
      px-2
      py-1
      rounded-md
      text-xs
      ${colors[status]}
      `}
    >

      {status}

    </span>

  );

}