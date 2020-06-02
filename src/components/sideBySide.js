import React from "react"

export default ({children}) => {
    console.log(children)
    console.log(React.Children.count(children))
    children = React.Children.toArray(children)
    return (
        <section className="md:flex mb-6">
            <div className="md:w-3/4 md:pr-20">
                {children[0]}
            </div>
            {React.Children.count(children) > 1 && (
                <div className="md:w-1/4 pt-6 md:pt-3">
                    {children[1]}
                </div>
            )
            }
        </section>
    );
}