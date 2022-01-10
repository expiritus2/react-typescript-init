import { get } from 'lodash-es';
import * as toastr from 'toastr';
import { IDataObject } from '../types';

interface IErrors {
    message: string;
}

const loopErrors = (errors: IErrors): void => {
    if (errors && Array.isArray(errors)) {
        errors.forEach((error) => {
            toastr.error(error?.message);
        });
    }
};

export const showErrorMessage = (err: string | IDataObject | unknown): undefined => {
    if (typeof err === 'string') {
        toastr.error(err);
        return;
    }

    const backendErrorMessage = get(err, 'response.data.message');
    if (backendErrorMessage) {
        toastr.error(backendErrorMessage);
        return;
    }

    const axiosErrors = get(err, 'response.data.errors');
    if (axiosErrors) {
        loopErrors(axiosErrors);
        return;
    }

    const message = get(err, 'message');
    if (message) {
        toastr.error(message);
    }
};
