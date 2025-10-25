 export interface ButtonProps {
    name: string;
    heightCS: string;
    widthCS: string;
    typeInput?: string
    state?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}