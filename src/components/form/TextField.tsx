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

const TextField = (props: Props) => {
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
                type="text"
                defaultValue={defaultValue}
                placeholder={placeholder}
                {...register(name, rules)}
            />
            <div className={'pos-rel error-wrpr'}>
                {
                    (touched && error) &&
                    <p className={'pos-abs m-0 txt-clr-error p8'}>{error}</p>
                }
            </div>
        </div>
    );
};

export default TextField;
