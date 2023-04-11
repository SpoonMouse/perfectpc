import './Help.css'

const  Help = () => {
  return (
    <div>     
    <h2 className="faq-title">Frequently Asked Questions</h2>
    <details className="faq-item">
      <summary className="faq-question">What is PerfectPC?</summary>
      <p className="faq-answer">
        PerfectPC is an online platform that helps users design and build custom PCs. Our intuitive interface and extensive component database simplify the process of choosing compatible parts for your perfect computer.
      </p>
    </details>
    <details className="faq-item">
      <summary className="faq-question">Is PerfectPC free to use?</summary>
      <p className="faq-answer">
        Yes, PerfectPC is completely free to use. We aim to make PC building accessible to everyone by providing a user-friendly platform with comprehensive information about components and compatibility.
      </p>
     </details>
     <details className="faq-item">
        <summary className="faq-question">How does PerfectPC ensure compatibility between components?</summary>
         <p className="faq-answer">
           PerfectPC uses an advanced compatibility algorithm that checks component specifications and compatibility requirements. Our dedicated team of experts constantly updates the platform to ensure that you have access to the latest components and the most accurate compatibility information.
         </p>
        </details>
       <details className="faq-item">
        <summary className="faq-question">Can I find deals and discounts on PerfectPC?</summary>
         <p className="faq-answer">
            Absolutely! PerfectPC provides real-time price updates and compares prices across multiple retailers to help you find the best deals and discounts on PC components.
         </p>
     </details>
    </div>
  )
}

export default Help