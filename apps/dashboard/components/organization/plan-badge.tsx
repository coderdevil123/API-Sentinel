export default function
PlanBadge({
  plan
}:{
  plan:
    | "FREE"
    | "PRO"
    | "ENTERPRISE";
}){

  const colors={

    FREE:
      "bg-zinc-700",

    PRO:
      "bg-blue-500",

    ENTERPRISE:
      "bg-green-600"

  };

  return(

    <span
      className={`
      px-3
      py-1
      rounded-lg
      text-xs
      font-semibold
      ${colors[plan]}
      `}
    >

      {plan}

    </span>

  );

}