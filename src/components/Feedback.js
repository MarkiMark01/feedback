import React from "react";


export const Feedback = ({ handleClick, option }) => {
    return (
        <main >
            <div >
                <h1 className="h1">Please leave your feedback</h1>
                <div className="button-container">
                    {Object.keys(option).map((name, i) => (
                        <button className="button" type="button" onClick={() => handleClick(name)} key={i}>{name}</button>
                    ))}
                </div>
            </div>
        </main>
    )
}
export default Feedback;