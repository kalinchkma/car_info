import { MouseEventHandler } from "react";

export enum btn {
    button = "button",
    submit = "submit"
}

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType: btn;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}


export interface SearchManufacturerProps {
    selected: string;
    setSelected: (manufacturer: string) => void
}

export interface CarProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders:number,
    displacement:   number,
    drive: string,
    fuel_type:string,
    highway_mpg:number,
    make:string,
    model:string,
    transmission:string,
    year:number
}

export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
    setFilter: (p: any) => void
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (p: any) => void
}
