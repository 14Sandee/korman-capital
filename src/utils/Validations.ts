/** Validates email
 *
 *  @param {String} email
 *  @returns {Boolean} returns true if valid email
 */
export const isEmailValid = (email: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
};

/** Validates Indian Phone number
 *  @param {String} phone
 *  @returns {Boolean} returns true if valid phone number
 */
export const isPhoneNumberValid = (phone: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    return (
        /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/.test(
            phone
        ) && phone.length <= 10
    );
};

/** Validates Name
 *
 *  @param {String} name
 *  @returns {Boolean} returns true if valid name
 */
export const isValidName = (name: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    return /^[a-zA-Z ]+$/.test(name);
}