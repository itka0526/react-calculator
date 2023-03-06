import { ButtonProps } from "../types";

type CustomRowProps = {
    buttonsProps?: [ButtonProps, ButtonProps, ButtonProps];
} & React.HTMLAttributes<HTMLDivElement>;

export function CustomRow({ buttonsProps, className }: CustomRowProps) {
    const [b1, b2, b3] = buttonsProps || Array(3).fill({});
    return (
        <div className={`grid grid-cols-[2fr,1fr,1fr] ${className}`}>
            <button {...b1} className={`w-full outline outline-[0.5px] outline-black ${b1?.className ? b1?.className : ""}`}>
                {b1.content}
            </button>
            <button {...b2} className={`w-20 aspect-square outline outline-[0.5px] outline-black ${b2?.className ? b2?.className : ""}`}>
                {b2.content}
            </button>
            <button {...b3} className={`w-20 aspect-square outline outline-[0.5px] outline-black ${b3?.className ? b3?.className : ""}`}>
                {b3.content}
            </button>
        </div>
    );
}
