import {
  getCurrentOrganization
}
from "@/lib/current-organization";

export default async function
SettingsCard() {

  const organization =
    await getCurrentOrganization();

  const settings =
    organization.settings;

  return (

    <div
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-xl
      p-6
      space-y-5
      "
    >

      <h2
        className="
        text-xl
        font-semibold
        "
      >
        Organization Settings
      </h2>

      <div>

        <p className="text-zinc-400">
          Allow Exports
        </p>

        <p>
          {
            settings.allowExports
              ? "Enabled"
              : "Disabled"
          }
        </p>

      </div>

      <div>

        <p className="text-zinc-400">
          Allow Invitations
        </p>

        <p>
          {
            settings.allowInvites
              ? "Enabled"
              : "Disabled"
          }
        </p>

      </div>

      <div>

        <p className="text-zinc-400">
          API Access
        </p>

        <p>
          {
            settings.allowApiAccess
              ? "Enabled"
              : "Disabled"
          }
        </p>

      </div>

    </div>

  );

}