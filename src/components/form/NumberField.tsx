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
}

const NumberField = (props: Props) => {
    const {
        register,
        name,
        touched,
        error,
        label,
        placeholder = '',
        defaultValue = '',
        rules = {},
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
            />
            {
                (touched && error) &&
                <p className={'m-0 txt-clr-error p7'}>{error}</p>
            }
        </div>
    );
};

export default NumberField;
