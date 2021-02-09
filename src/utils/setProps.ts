import Block from "../lib/block.js";

const setProps = (component: Block, isError: boolean, name: string | undefined, value: string | undefined) => {
  if (isError) {
    component.setProps({
      [`${name}Error`]: 'error-message__show',
      [`${name}Value`]: value,
    })
  } else {
    component.setProps({
      [`${name}Error`]: '',
      [`${name}Value`]: value,
    })
  }
}

export default setProps;
