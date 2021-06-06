import React from "react";

type Props = {
    register: any,
    name: string,
    touched: boolean,
    error?: string | undefined,
    disabled?: boolean,
    label?: string,
    placeholder?: string,
    defaultValue?: string,
    rules?: {[fieldName: string]: any}
} & {
    [attr: string]: any,
};

const NumberField = (props: Props) => {
    const {
        register,
        name,
        error,
        label,
        placeholder = '',
        defaultValue = '',
        rules = {},
        ...otherProps
    } = props;

    return (
        <div className={`form-field ${error ? 'has-error' : ''}`}>
            {
                !!label &&
                <>
                    <label>{label}</label>
                    <br/>
                </>
            }
            <input
                type="number"
                defaultValue={defaultValue}
                placeholder={placeholder}
                {...register(name, rules)}
                {...otherProps}
            />
            <div className={'pos-rel error-wrpr'}>
                {
                    error &&
                    <p className={'pos-abs m-0 txt-clr-error p8'}>{error}</p>
                }
            </div>
        </div>
    );
};

export default NumberField;
