import { ArrowRight } from 'lucide-react';
import CardKomunitas from '../Fragments/CardKomunitas';
const KomunitasForm = () => {
  return (
    <div>
        <div className="px-8 py-20">
            <div className="flex gap-3 items-center w-max-full h-auto">
                <div className="rounded-full bg-[#5EAB80] w-[5rem] h-[5rem]"></div>
                <div className="rounded-full bg-[#5EAB80] w-[3rem] h-[3rem]"></div>
            </div>
            <div className="flex justify-center gap-5 items-center text-xl mt-12">
                <div className='flex flex-col gap-5'>
                    <textarea
                    type="text"
                    placeholder="Mau bercerita?..."
                    className="bg-teal-500 w-[50rem] p-3 h-[15rem] rounded-lg text-white placeholder-white outline-none"
                    ></textarea>
                </div>
                <button className="w-16 h-16 bg-teal-500 hover:bg-teal-600 rounded-full flex justify-center items-center">
                    <ArrowRight color="#fff" />
                </button>
            </div>
            <div className="flex justify-between mt-8">
                <div className="flex flex-col gap-2 items-end w-max-full h-auto">
                    <div className="rounded-full bg-[#5EAB80] w-[2rem] h-[2rem]"></div>
                    <div className="rounded-full bg-[#5EAB80] w-[4rem] h-[4rem]"></div>
                </div>
                <div className="flex items-center w-max-full h-auto">
                    <div className="rounded-full bg-[#0694A2] w-[2rem] h-[2rem]"></div>
                    <div className="rounded-full bg-[#0694A2] w-[4rem] h-[4rem]"></div>
                </div>
            </div>
        </div>
        <div className='w-full h-10 bg-cyan-800'>
        </div>
        <CardKomunitas />
        <CardKomunitas />
        <CardKomunitas />

    </div>

  )
}

export default KomunitasForm
