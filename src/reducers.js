function IncDec(state, action) {
  let newState;
  switch (action.type) {
    case "increase":
      newState = { value: state.value + 1 };
      break;
    case "descrease":
      newState = { value: state.value - 1 };
      break;
    default:
      throw new Error();
  }
  return newState;
}

export { IncDec };
