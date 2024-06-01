import { Karla } from 'next/font/google'
import  DashboardSidebar  from '@/components/dashboard/dashboardSidebar';
import PageWrapper from '@/components/dashboard/pagewrapper';
import { Metadata } from 'next';
import { Sidebar } from 'lucide-react';
import DashboardHeader from '@/components/dashboard/dashboardHeader';
import "./dashboards.css"

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})
export const metadata: Metadata = {
  title: "Dashboard after login",
  description: "NextJs dashboard Peer2Share"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + ' h-screen overflow-hidden '}>
       
        <DashboardSidebar>

        </DashboardSidebar>
        <div className='pb-16'>
        <DashboardHeader></DashboardHeader>
        </div>
        <PageWrapper>{children}</PageWrapper>


      </body>
    </html>
  )
}