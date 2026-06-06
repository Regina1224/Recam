import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Download, Pencil, BedDouble, Bath, Car, SquareDashedBottom, X} from "lucide-react";


{/* fack data */}
const downloadOptions = [
    {label: "Print Quality Photography", count: 16},
    {label: "Web Quality Photography", count: 16},
    {label: "Floor Plan", count: 1},
    {label: "Videography", count: 1},
]


const PropertyWebsitePage = () => {
    const navigate = useNavigate()

    const [download, setDownload] = useState<boolean>(false) 

    const [checked, setChecked] = useState<boolean[]>([false,false,false,false])
    const allChecked = checked.every(c=>c)


    return(
        <div>
            {/* Top navigation bar */}
            <header className="sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between px-24 py-3">
                {/* Left: Return + Download files */}
                <div className="flex items-center gap-4">
                <button onClick={()=> navigate('/my-order')}>
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                    className="bg-blue-400 text-white text-sm px-6 py-2 rounded-full flex items-center gap-2"
                    onClick={()=> setDownload(true)}>
                    <Download className="w-4 h-4" />
                    Download files</button>
                </div>

                {/* Right: Preview / Edit / Publish */}
                <div className="flex items-center gap-2">
                    <button className="border rounded-full text-sm text-center px-6 py-2">
                        Preview
                    </button>
                    <button className="border rounded-full text-sm text-center px-6 py-2 flex items-center gap-2">
                        <Pencil className="w-4 h-4" />
                        Edit
                    </button>
                    <button className="border rounded-full text-sm text-center px-6 py-2">
                        Publish
                    </button>
                </div>
            </header>


            {/* Main content */}
            <main>
                {/* Hero area */}
                <section className="flex h-128 px">
                    {/* Left: large picture */}
                    <div className="w-3/5 bg-gray-300"></div>
                    {/* Right: house detial */}
                    <div className="w-2/5 bg-[#3D1A1A] flex flex-col items-center justify-center p-8 text-center">
                        <span className="bg-white/20 text-gray-400 text-xs px-3 py-1 rounded-md mb-6 self-center">Apartment for Rent</span>
                        <h1 className="text-white text-4xl font-bold mb-2">93 Beach Road</h1>
                        <p className="text-white text-lg">North Bondi, NSW, 2026</p>
                        <hr className="border-white/30 w-16 my-6" />
                        {/* 4 logos */}
                        <div className="flex gap-8 text-white text-center">
                            <div className="flex flex-col items-center gap-1">
                                <div className="border border-white/50 rounded-full p-3">
                                    <BedDouble className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm">2 Beds</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="border border-white/50 rounded-full p-3">
                                    <Bath className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm">2 Baths</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="border border-white/50 rounded-full p-3">
                                    <Car className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm">2 Garages</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="border border-white/50 rounded-full p-3">
                                    <SquareDashedBottom className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm">112 m²</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Property Description */}
                <section className="py-16 text-center border-b border-gray-200">
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-3xl font-bold">Property Description</h2>
                        <p className="text-gray-400 text-sm">Please add property discription here</p>
                        <a className="text-sm underline cursor-pointer">Click to add</a>
                    </div>
                </section>

                {/* Photography */}
                <section className="py-16 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-center mb-8">Photography</h2>
                    {/* Picture grid */}
                    <div className="grid grid-cols-4 gap-4.5 px-16">
                        {/* Waiting for real pictures */}
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                        <div className="bg-gray-300 h-48"></div>
                    </div>
                </section>

                {/* Floor Plan */}
                <section className="py-16 text-center border-b border-gray-200 px-32">
                    <h2 className="text-3xl font-bold text-center mb-8">Floor Plan</h2>
                    {/* Picture */}
                    <div className="bg-gray-300 w-full aspect-4/3"></div>
                </section>

                {/* Videography */}
                <section className="py-16 text-center border-b border-gray-200 px-32">
                    <h2 className="text-3xl font-bold text-center mb-8">Videography</h2>
                    {/* Video */}
                    <div className="bg-gray-300 w-full aspect-4/3"></div>
                </section>

                {/* Location */}
                <section className="py-16 text-center border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-center mb-8">Location</h2>
                    {/* Map */}
                    <div className="px-32">
                        <div className="bg-gray-300 w-full aspect-4/3"></div>
                    </div>
                </section>

                {/* Contact */}
                <section className="py-16 text-center border-b border-gray-200">
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-3xl font-bold">Agents Contact</h2>
                        <p className="text-gray-400 text-sm">Please add agents contact</p>
                        <a className="text-sm underline cursor-pointer">Click to add</a>
                    </div>
                </section>

            </main>

            {/* Download */}
            {download && (
                <div className="fixed top-16 left-4 w-72 bg-white rounded-2xl shadow-xl p-6 z-50">
                    {/* title + close */}
                    <div className="relative mb-6">
                        <button className="absolute right-0 top-0" onClick={()=>setDownload(false)}>
                            <X className="w-4 h-4" />
                        </button>
                        <h3 className="font-bold text-lg text-center">Download</h3>
                    </div>


                    {/* Checkbox */}
                    <div className="flex flex-col gap-4">
                    {downloadOptions.map((option, index)=> (
                        <label key={index} className="flex items-center gap-3">
                            <input 
                                type="checkbox" 
                                checked={checked[index]} 
                                onChange={()=> {
                                    const newChecked = [...checked]
                                    newChecked[index] = !newChecked[index]
                                    setChecked(newChecked)
                                }}/>
                            <span className="text-sm">{option.label}({option.count})</span>
                        </label>
                    ))}    
                    </div>
                    

                    {/* Bottom */}
                    <div className="flex items-center justify-between mt-8">
                        <label className="flex items-center gap-2 text-sm" onClick={()=> setChecked(checked.map(()=> !allChecked))}>
                            <input type="checkbox" checked={allChecked} onChange={()=>{}} />
                            Select all
                        </label>
                        <button className="bg-blue-400 text-white text-sm px-6 py-2 rounded-full">
                            Download
                        </button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default PropertyWebsitePage;