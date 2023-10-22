import React from "react";


export const Feedback = ({ handleClick, option }) => {
    return (
        <main >
            <div >
                <h1>Please leave Feedback</h1>
                <div >
                    {Object.keys(option).map((name, i) => (
                        <button type="button" onClick={handleClick} key={i}>{name}</button>
                    ))}
                </div>
            </div>
        </main>
    )
}
export default Feedback;