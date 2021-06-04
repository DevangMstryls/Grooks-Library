import React, {useState} from "react";
import {connect} from "react-redux";
import {APP_STATE, BooksState} from "../../core/types/stateTypes";
import {useLocation, useParams} from "react-router";
import {FieldError, useForm} from "react-hook-form";
import {ACTION_TYPES, MSGS} from "../../core/constants";
import TextField from "../form/TextField";
import TextareaField from "../form/TextareaField";
import NumberField from "../form/NumberField";
import {Book} from "../../core/types/types";


const mapStateToProps = (state: APP_STATE) => {
    return {
        books: state.books,
    };
};

type Props = {
    books: BooksState,
} & any

const formFields = {
    name: 'name',
    description: 'description',
    author: 'author',
    publisher: 'publisher',
    availableStock: 'availableStock',
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

const AddUpdateBook = (props: Props) => {

    const params: any = useParams();
    const location = useLocation();
    const [waitForAddUpdate, setWaitForAddUpdate] = useState(false);

    const {
        books,
        dispatch,
    } = props;

    const book = books.data[params.id] || null;

    const initialValues = {
        [formFields.name]: book?.name || '',
        [formFields.description]: book?.description || '',
        [formFields.author]: book?.author || '',
        [formFields.publisher]: book?.publisher || '',
        [formFields.availableStock]: book?.availableStock || '',
    };

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
        setWaitForAddUpdate(true);
        if (mode === 'add') {
            const bookToAdd: Book = {
                ...data,
                addedOn: new Date().toISOString(),
                id: Math.floor(Math.random() * 1000),
            };

            setTimeout(() => {
                dispatch({
                    type: ACTION_TYPES.ADD_BOOK,
                    payload: bookToAdd,
                });
                setWaitForAddUpdate(false);
            }, 1000);
        }
        else if (mode === 'edit') {
            const bookToUpdate: Book = {
                ...data,
                id: book.id,
            };

            setTimeout(() => {
                dispatch({
                    type: ACTION_TYPES.UPDATE_BOOK,
                    payload: bookToUpdate,
                });
                setWaitForAddUpdate(false);
            }, 1000);
        }
    };

    if (mode === 'edit' && !book) {
        return (
            <p>Book not found</p>
        );
    }

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
                <button
                    disabled={waitForAddUpdate}
                    type="submit">
                    {
                        mode === 'edit'
                            ? (waitForAddUpdate ? 'Updating book...' : 'Update Book')
                            : (waitForAddUpdate ? 'Adding book...' : 'Add Book')
                    }</button>
            </div>
        </form>
    );
};

export default connect(mapStateToProps)(AddUpdateBook);
