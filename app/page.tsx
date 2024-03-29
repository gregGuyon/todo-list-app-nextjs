import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from 'next/link';

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div>
        <Link href="/todo" className="button-class">Go to Todo Page</Link>
      </div>
    </div>
  );
}
