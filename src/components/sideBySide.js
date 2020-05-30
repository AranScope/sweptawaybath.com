import React from "react"
import Section from "./section"

export default ({children}) => (
    <Section>
        <div className="md:w-3/4 md:pr-20">
            {children[0]}
        </div>
        {React.Children.count(children) > 1 && (
            <div className="md:w-1/4 pt-3">
                {children[1]}
            </div>
        )
        }
    </Section>
)