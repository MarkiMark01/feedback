import React from "react";

export const Statistic = ({ stats, total, percentage }) => {
    const isPositive = Object.values(stats).some((value) => value > 0)
    return (
        <>
            {isPositive ? (
                <>
                    {Object.keys(stats).map((name, i) => (
                        <p key={i}>{name}: {stats[name]}</p>
                    ))}
                    <p>Total: {total}</p>
                    <p>Positive feedback: {percentage}%</p>
                </>
            ) : (<p>"There is no feedback"</p>)}
        </>
    );
};
export default Statistic;
