import {ChevronLeftIcon} from "./icons";
import React from "react";

type Props = {
    onClick: () => void,
};

const BackLink = (props: Props) => {
    return (
        <div
            className="d-inline-flex flex-row flex-align-items-center cur-p back-link"
            onClick={props.onClick}
        >
            <ChevronLeftIcon/>
            <p className="p6 m-0">&nbsp;Back</p>
        </div>
    );
};

export default BackLink;
