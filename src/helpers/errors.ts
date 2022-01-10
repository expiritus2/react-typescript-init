/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from 'lodash-es';
import * as toastr from 'toastr';

const loopErrors = (errors: any): void => {
    if (errors && Array.isArray(errors)) {
        errors.forEach((error) => {
            toastr.error(error?.message);
        });
    }
};

export const showErrorMessage = (err: any): undefined => {
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
