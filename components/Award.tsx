import Image from "next/image"


const Award = () => {
  return (
    <section className="relative bg-white overflow-hidden">
    {/* Background Decorative Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/assets/awards-bg.webp" 
        alt="Decorative background lines"
        layout="fill"
        objectFit="cover"
        className="opacity-40"
      />
    </div>
    
    <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
      <div className="mb-4">
        <h2 className="text-3xl sm:text-4xl text-gray-800">
                      Awards and Recognition from <br />
                      <span className="font-bold text-gray-900">Industry Leaders</span>
        </h2>
      </div>                               
              <Image
                src="/assets/awards.webp"
                alt="Awards and Recognition"                
                width={100}
                height={100}
                className="h-28 sm:h-36 w-auto object-contain z-50"
            />                          
    </div>
  </section>
  )
}

export default Award
