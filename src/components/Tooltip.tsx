import React from 'react';

export const Tooltip = ({ text }: { text: any }) => {
    return (
        <div
            id={`tooltip-country`}
            data-tooltip-target={'tooltip-country'}
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm bg-highlight_300 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-lightblue_500"
        >
            {text}
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    );
};
