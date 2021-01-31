const setProps = (component, isError, name, value) => {
    if (isError) {
        component.setProps({
            [`${name}Error`]: 'error-message__show',
            [`${name}Value`]: value,
        });
    }
    else {
        component.setProps({
            [`${name}Error`]: '',
            [`${name}Value`]: value,
        });
    }
};
export default setProps;
