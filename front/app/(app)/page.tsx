import ActiveSessionAuction from "@/components/home-page/active-section-auction"
import ResultSessionAuction from "@/components/home-page/result-session-auction"
import UpcomingSessionAuction from "@/components/home-page/upcoming-session.auction"

export default async function HomePage() {

  return (
    <main className="p-20 text-black min-h-screen bg-gray-50">
      <ActiveSessionAuction />
      <UpcomingSessionAuction />
      <ResultSessionAuction />
    </main>
  )
}