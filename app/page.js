import Image from 'next/image'
import Hero from '@/components/Hero'
import PhdExperts from '@/components/PhdExperts'
import Mainservices from '@/components/Mainservices'
import WriteAReport from '@/components/WriteAReport'
import Offerservices from '@/components/Offerservices'
import ReportTypes from '@/components/ReportTypes'
import ReportStructure from '@/components/ReportStructure'
import Professors from '@/components/Professors'
import Accordion from '@/components/Accordion'

export default function Home() {
  return (
   <div>
    <Hero />
    <PhdExperts />
    <Mainservices />
    <WriteAReport />
    <Offerservices />
    <ReportTypes />
    <ReportStructure />
    <Professors />
    <Accordion />
   </div>
  )
}
