import { ReactElement } from "react";
import { flushSync } from "react-dom";

interface ButtonInterface{
    title: string;
    size: "lg" | "sm" | "md";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    variant: "primary" | "secondary";
}


const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl",
    "md": "px-4 p-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm",
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600"
}

export function Button(props: ButtonInterface) {
    const Comp = props.startIcon;
    return <button className={sizeStyles[props.size]}>
        <div className="flex items-center">
            <span className="text-xs">
                <Comp size={props.size}></Comp>
            </span>
        </div>
    </button>
}
