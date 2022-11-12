import React, { useState } from 'react';

export const Tooltip = ({ tooltipValues, index, date }: any) => {
    return (
        <div
            id={`tooltip-default-${index}`}
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
        >
            {tooltipValues} {date}
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    );
};
