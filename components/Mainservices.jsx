import React from 'react'
import { casestudy, assignment, coursework, dissertation, essay, phdthesis, plagiarism, proofreading, referencing, report, researchpaper,transcription} from '@/public/assets'
import Image from 'next/image'
const Mainservices = () => {
  return (
    <div className="container py-12 relative mx-auto px-1 lg:px-8 flex flex-col ">
      <div className="justify-between items-center">
      <h2 className="heading text-center">Our Services</h2>
        <div className="flex flex-wrap gap-7 justify-center items-center my-10">
            <Servicecard name="Case Study" image={casestudy} />
            <Servicecard name="Assignment" image={assignment} />
            <Servicecard name="Coursework" image={coursework} />
            <Servicecard name="Dissertation" image={dissertation} />
            <Servicecard name="Essay" image={essay} />
            <Servicecard name="PhD Thesis" image={phdthesis} />
            <Servicecard name="Plagiarism Checker" image={plagiarism} />
            <Servicecard name="Proofreading" image={proofreading} />
            <Servicecard name="Referencing" image={referencing} />
            <Servicecard name="Report" image={report} />
            <Servicecard name="Research Paper" image={researchpaper} />
            <Servicecard name="Transcription" image={transcription} />
        </div>
        </div>
    </div>
  )
}

const Servicecard = ({name,image}) => {
    return (
        <div className='hover:scale-105 transition-all hover:shadow-xl border border-primary w-72 rounded-xl' >
            <div className="p-10 flex flex-col justify-center items-center">
            <Image src={image} width={100} height={100} alt={name} />
            <h2 className='text-center text-xl font-bold'>{name}</h2>
            </div>
        </div>
    )
}

export default Mainservices