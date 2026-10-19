import StandingsMini from '@/features/classifications/components/StandingsMini.jsx'
import HomeCompetitionSection from '@/features/competitions/components/home/HomeCompetitionSection.jsx'
import TodayMatchesSection from '@/features/matches/components/TodayMatchesSection.jsx'
import NewsSection from '@/features/news/components/NewsSection.jsx'

export default function Home() {
  return (
    <main className="container-app flex flex-col gap-8">
      <TodayMatchesSection />
      <NewsSection aside={<StandingsMini subtitle="Série A" />} />
      <HomeCompetitionSection limit={4} />
    </main>
  )
}
