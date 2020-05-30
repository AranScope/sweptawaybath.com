import React from "react"
import SideBySide from "./sideBySide"

export default props => (
    <SideBySide>
        <>
            <h1 className="text-gray-900 text-5xl leading-tight" style={{fontFamily: "Nunito Sans"}}>Professional,
                Experienced Chimney Sweep</h1>
            <p className="text-gray-600 text-xl font-serif leading-loose">Manual sweeps, power sweeps, camera
                inspections, and more. Our services are varied, but all come with the same promise of quality,
                dedication and durability. Licensed, insured and over 10 years of experience. I guarantee my work,
                as well as offering free estimates.</p>
        </>
        <>
            <h2><a className="text-gray-700 font-semibold">SCHEDULE APPOINTMENT</a></h2><br/>
            <p className="text-gray-600 text-xl font-serif leading-loose">All estimates are free and flexible. No
                hidden charges. No up selling.</p>
            <button
                className="border-solid border-2 border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-4 my-8 px-8">BOOK
                NOW
            </button>
        </>
    </SideBySide>
)