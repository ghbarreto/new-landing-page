import { colorHelper } from '../utils/color_helper';
import { square } from '../store/square';

export const Square = ({ index, value, isDesktop }: any) => {
    const hideMobile = !isDesktop ? 'mobile:hidden' : '';

    return (
        <div
            data-tooltip-target={`tooltip-default-${index}`}
            onClick={() => {
                square.set(index);
            }}
            className={`
				border-2 w-4 h-4 border-white rounded-full 
				dark:border-bg_dark dark:hover:border-gray-600 
				hover:border-gray-400 hover:drop-shadow-md
				${colorHelper(value)} ${hideMobile} 
			`}
        >
            <div className="invisible" data-tooltip-target="tooltip-default">
                {value}
            </div>
        </div>
    );
};
