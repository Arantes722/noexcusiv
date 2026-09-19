import { redirect } from "next/navigation";
import { AccountLayout } from "@/components/account/AccountLayout";
import { AccountHeader } from "@/components/account/AccountHeader";
import { ProfileForm } from "@/components/account/ProfileForm";
import { getAuthenticatedUser, getProfile } from "@/lib/account";

export const dynamic = "force-dynamic";

export default async function AccountSettingsPage() {
  const user = await getAuthenticatedUser();
  if (!user) redirect("/login");
  const profile = await getProfile(user.id);

  return <AccountLayout>
    <AccountHeader title={"PERSONAL\nINFORMATION"} description="Manage the personal information connected to your NOEXCUSIV account." />
    <section className="pt-14">
      <ProfileForm initialName={profile?.full_name || user.user_metadata.full_name || ""} email={user.email || profile?.email || ""} />
    </section>
  </AccountLayout>;
}
