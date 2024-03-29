import React from "react";

type IconProps = {
    height?: number,
    width?: number,
    color?: string,
}

export const ChevronDownIcon = (props: IconProps) => {
    const {
        height = 24,
        width = 24,
        color = '#000000',
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`}
            fill={color}>
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
        </svg>
    );
};

export const ChevronUpIcon = (props: IconProps) => {
    const {
        height = 24,
        width = 24,
        color = '#000000',
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`}
            fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
        </svg>
    );
};

export const ChevronLeftIcon = (props: IconProps) => {
    const {
        height = 24,
        width = 24,
        color = '#000000',
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`}
            fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
        </svg>
    );
};

export const AddIcon = (props: IconProps) => {
    const {
        height = 24,
        width = 24,
        color = '#000000',
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`}
            fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
    );
};

export const DeleteIcon = (props: IconProps) => {
    const {
        height = 24,
        width = 24,
        color = '#000000',
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`}
            fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
        </svg>
    );
};

export const EditIcon = (props: IconProps) => {
    const {
        height = 24,
        width = 24,
        color = '#000000',
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`}
            fill={color}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
    );
};

export const BookIcon = (props: IconProps) => {
    const {
        height = 24,
        width = 24,
        color = '#000000',
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={`${height}px`}
            viewBox="0 0 24 24"
            width={`${width}px`} fill={color}>
            <g>
                <rect fill="none" height={height} width={width} x="0"/>
            </g>
            <g>
                <path
                    d="M22.47,5.2C22,4.96,21.51,4.76,21,4.59v12.03C19.86,16.21,18.69,16,17.5,16c-1.9,0-3.78,0.54-5.5,1.58V5.48 C10.38,4.55,8.51,4,6.5,4C4.71,4,3.02,4.44,1.53,5.2C1.2,5.36,1,5.71,1,6.08v12.08c0,0.58,0.47,0.99,1,0.99 c0.16,0,0.32-0.04,0.48-0.12C3.69,18.4,5.05,18,6.5,18c2.07,0,3.98,0.82,5.5,2c1.52-1.18,3.43-2,5.5-2c1.45,0,2.81,0.4,4.02,1.04 c0.16,0.08,0.32,0.12,0.48,0.12c0.52,0,1-0.41,1-0.99V6.08C23,5.71,22.8,5.36,22.47,5.2z M10,16.62C8.86,16.21,7.69,16,6.5,16 c-1.19,0-2.36,0.21-3.5,0.62V6.71C4.11,6.24,5.28,6,6.5,6C7.7,6,8.89,6.25,10,6.72V16.62z M19,0.5l-5,5V15l5-4.5V0.5z"/>
            </g>
        </svg>
    );
};

export const CloseIcon = (props: IconProps) => {
    const {
        height = 24,
        width = 24,
        color = '#000000',
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`}
            fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
        </svg>
    );
};

export const CheckIcon = (props: IconProps) => {
    const {
        height = 24,
        width = 24,
        color = '#000000',
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`}
            fill={color}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
    );
};


