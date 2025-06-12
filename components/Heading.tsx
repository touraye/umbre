const Heading = ({ align, mdAlign, top, button, color }: {align?: string, mdAlign?: string, top: string; button: string, color?: string }) => {
    // Default values for align and mdAlign
    align = align || 'start';
    mdAlign = mdAlign || 'start';
    
    // Style for the span element

    const spanStyle = color ? { color: color } : {};
  return (
    <div className={`text-${align} md:text-${mdAlign}`}>
    <h2 className="heading-1">
      {top} <br />
      <span className="heading-1-extra" style={spanStyle}>{button}</span>
    </h2>          
  </div>
  )
}

export default Heading
