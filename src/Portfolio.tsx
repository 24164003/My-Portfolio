import portfolioPDF from "../public/pdfportfolio.pdf"

const Portfolio = () => {
    return (
        <div><iframe src={portfolioPDF} style={{ height: '92vh', width: '100%', overflowY: 'hidden' }}></iframe></div>
    )
}

export default Portfolio