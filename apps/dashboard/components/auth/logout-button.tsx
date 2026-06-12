export default function LogoutButton() {

  return (

    <a
      href="/api/auth/logout"
      className="
      px-4
      py-2
      rounded-lg
      bg-red-500
      text-white
      "
    >
      Logout
    </a>
  );
}