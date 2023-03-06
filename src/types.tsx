import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";

export type ButtonProps = {
    content: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
    PropsWithChildren;
