import { ButtonProps } from "../types";

type RowProps = {
    buttonsProps?: [ButtonProps, ButtonProps, ButtonProps, ButtonProps];
} & React.HTMLAttributes<HTMLDivElement>;

export function Row({ buttonsProps, className }: RowProps) {
    const [b0, b1, b2, b3] = buttonsProps || (Array(4).fill({}) as [ButtonProps, ButtonProps, ButtonProps, ButtonProps]);

    return (
        <div className={`grid grid-cols-4 ${className}`}>
            <button {...b0} className={`w-20 aspect-square outline outline-[0.5px] outline-black ${b0?.className ? b0?.className : ""}`}>
                {b0.content}
                {b0.children}
            </button>
            <button {...b1} className={`w-20 aspect-square outline outline-[0.5px] outline-black ${b1?.className ? b1?.className : ""}`}>
                {b1.content}
                {b1.children}
            </button>
            <button {...b2} className={`w-20 aspect-square outline outline-[0.5px] outline-black ${b2?.className ? b2?.className : ""}`}>
                {b2.content}
                {b0.children}
            </button>
            <button {...b3} className={`w-20 aspect-square outline outline-[0.5px] outline-black ${b3?.className ? b3?.className : ""}`}>
                {b3.content}
                {b0.children}
            </button>
        </div>
    );
}
