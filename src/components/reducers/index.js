const initialState = {
  projects: [
    {
      title: "lorem",
      content:
        'Lorem Ipsum is simply dummy text of the printing and',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
    console.log(action);
};

export default rootReducer;
