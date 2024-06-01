const CardKomunitas = () => {
  return (
    <div>
      <div className="w-max-screen h-[10rem] text-black border-b-2 border-solid border-cyan-600 px-8 flex items-center  py-[6rem]">
            <img className="rounded-full w-24 h-24 mr-4" src="https://via.placeholder.com/60" alt="Profile Picture" />
            <div className="flex-grow">
                <div className="flex flex-col gap-2 mb-2">
                    <h3 className="text-base text-[#0694A2] md:text-lg lg:text-2xl font-bold">Tatang Mulyadi</h3>
                    <p className="text-xs md:text-sm lg:text-base">Hari ini aku mengalami hal buruk, aku melihat orang yang dulu membully aku. Aku merasa sangat tertrigered.... Hibur aku dong, teman:)</p>

                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium items-center">
                    <div className="flex-auto flex space-x-4">
                        <button className="h-10 px-6 font-semibold rounded-md bg-[#5EAB80] text-white" type="submit">
                        Lihat
                        </button>
                        <button className="h-10 px-6 font-semibold rounded-md bg-[#5EAB80] border border-slate-200 text-white" type="button">
                        Tanggapi
                        </button>
                    </div>
                    <p className='font-regular text-slate-600'>19.20 | 20 Mei 2024</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardKomunitas
