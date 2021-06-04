import React, {useEffect} from "react";
import {connect} from "react-redux";
import {APP_STATE, BooksState} from "../../core/types/stateTypes";
import {useLocation, useParams} from "react-router";
import {FieldError, useForm} from "react-hook-form";
import {MSGS} from "../../core/constants";
import TextField from "../form/TextField";
import TextareaField from "../form/TextareaField";
import NumberField from "../form/NumberField";


const mapStateToProps = (state: APP_STATE) => {
    return {
        books: state.books,
    };
};

type AddUpdateBookProps = {
    books: BooksState,
} & any

const formFields = {
    name: 'name',
    description: 'description',
    author: 'author',
    publisher: 'publisher',
    availableStock: 'availableStock',
};

const initialValues = {
    [formFields.name]: 'Hooked',
    [formFields.description]: '',
    [formFields.author]: '',
    [formFields.publisher]: '',
    [formFields.availableStock]: '',
};

const getErrorMessage = (e: FieldError | undefined): string => {
    if (!e) return '';

    const fieldName = e.ref?.name;
    if (fieldName) {
        const message = MSGS[fieldName]?.[e.type];
        if (message) {
            return message;
        }
    }

    return '';
};

const AddUpdateBook = (props: AddUpdateBookProps) => {

    const params: any = useParams();
    const location = useLocation();

    const {
        books,
        // dispatch,
    } = props;

    const book = books.data[params.id] || null;

    let mode = '';
    if (location.pathname.includes('/add'))
        mode = 'add';
    else if (location.pathname.includes('/edit'))
        mode = 'edit';

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            touchedFields,
        },
    } = useForm();

    const onSubmit = (data: any) => {
        // TODO: set field as touched
    };

    const getBook = () => {
        // TODO: fetch book
    };

    // EFFECTS

    useEffect(() => {
        if (mode === 'edit' && !book) {
            getBook();
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <TextField
                label={'Book Name'}
                placeholder={'To kill a mocking bird'}
                name={formFields.name}
                defaultValue={initialValues[formFields.name]}
                touched={touchedFields[formFields.name]}
                error={getErrorMessage(errors[formFields.name])}
                register={register}
                rules={{
                    required: true,
                }}
            />

            {/* description */}
            <TextareaField
                label={'Description'}
                placeholder={'A brief about the book'}
                name={formFields.description}
                defaultValue={initialValues[formFields.description]}
                touched={touchedFields[formFields.description]}
                error={getErrorMessage(errors[formFields.description])}
                register={register}
                rules={{
                    required: true,
                }}
            />

            {/* author */}
            <TextField
                label={'Author'}
                placeholder={'J. K. Rowling'}
                name={formFields.author}
                defaultValue={initialValues[formFields.author]}
                touched={touchedFields[formFields.author]}
                error={getErrorMessage(errors[formFields.author])}
                register={register}
                rules={{
                    required: true,
                }}
            />

            {/* publisher */}
            <TextField
                label={'Publisher'}
                placeholder={'Rupa Publications'}
                name={formFields.publisher}
                defaultValue={initialValues[formFields.publisher]}
                touched={touchedFields[formFields.publisher]}
                error={getErrorMessage(errors[formFields.publisher])}
                register={register}
                rules={{
                    required: true,
                }}
            />

            {/* available stock */}
            <NumberField
                label={'Available Stock'}
                placeholder={'1000'}
                name={formFields.availableStock}
                defaultValue={initialValues[formFields.availableStock]}
                touched={touchedFields[formFields.availableStock]}
                error={getErrorMessage(errors[formFields.availableStock])}
                register={register}
                rules={{
                    required: true,
                    valueAsNumber: true,
                    min: 0,
                }}
            />

            <div>
                <button type="submit">{mode === 'edit' ? 'Update' : 'Add'}</button>
            </div>
        </form>
    );
};

export default connect(mapStateToProps)(AddUpdateBook);
