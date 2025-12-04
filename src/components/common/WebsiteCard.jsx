const WebsiteCard = ({ title, category, imageUrl, backgroundColor }) => {
  return (
    <div className="group cursor-pointer relative z-10 h-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
        {/* Imagen - sin border radius inferior */}
        <div
          className="aspect-[4/3] relative overflow-hidden w-full flex-shrink-0"
          style={{ backgroundColor: backgroundColor || '#f5f5f5' }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Contenedor de texto con fondo blanco sólido - altura fija */}
        <div className="bg-white p-5 rounded-b-lg flex-grow">
          <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 h-10 overflow-hidden">
            {title}
          </h3>
          <p className="text-xs font-medium text-gray-500">
            {category}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WebsiteCard


