import { createStore } from 'vuex'

export default createStore({
  state: () =>({
    inputTop: 150,
    inputLeft: 200,
    inputHeight: 150,
    inputWidth: 130,
    sliderCentralSizes: 40,
    myBackground: 'blue',
    dragging: false,
    scalingRight: false,
    scalingLeft: false,
    scalingBottom: false,
    scalingTop: false,
    someX: 'no',
    someY: 'no',

  }),
  getters: {
    sliderCentralTop(state) {      
        return state.inputTop + state.inputHeight / 2 + 7
    },
    sliderCentralLeft(state) {
        return state.inputLeft + state.inputWidth / 2 + 7 
    },
  },
  mutations: {
    setInputTop(state, val) {
      state.inputTop = parseInt(val);
    },
    setInputLeft(state, val) {
      state.inputLeft = parseInt(val);
    },
    setInputHeight(state, val) {
      state.inputHeight = parseInt(val);
    },
    setInputWidth(state, val) {
      state.inputWidth = parseInt(val);
    },
    toggleColor(state) {
      state.myBackground === 'blue' ? state.myBackground = 'red' : state.myBackground = 'blue';
    },

    stopAll(state) {
      state.myBackground = 'blue';
      state.dragging = false;
      state.scalingRight = false;
      state.scalingLeft = false;
      state.scalingBottom = false;
      state.scalingTop = false;
    },


    startDrag(state) {
      state.dragging = true;
      state.myBackground = 'red'
      // state.someX = 50;
      // state.someY = 50;
    },
    doDrag(state, val) {      
      // state.someX = val.clientX;
      // state.someY = val.clientY;
      if(state.dragging === true 
        && val.clientX > state.inputWidth / 2  + 44 
        && val.clientY > state.inputHeight / 2 + 41
        && val.clientX < 660 - state.inputWidth / 2
        && val.clientY < 542 - state.inputHeight / 2) {
          state.inputLeft = Math.ceil(val.clientX - state.inputWidth / 2 - 50 - 6);
          state.inputTop = Math.ceil(val.clientY - state.inputHeight / 2 - 50 - 2);        
      }
    },


    startScalingRight(state) {
      state.myBackground = 'red'
      state.scalingRight = true;
    },
    doScalingRight(state, val) {
      if(state.scalingRight === true
        && val.clientX < 667) {
        state.inputWidth = Math.ceil(val.clientX - 50 - 7 - state.inputLeft - state.sliderCentralSizes / 2) + 15;
      }
    },

    startScalingLeft(state) {
      state.myBackground = 'red'
      state.scalingLeft = true;
    },
    doScalingLeft(state, val) {
      if(state.scalingLeft === true
        && val.clientX > 44) {
        state.someX = state.inputLeft + 57;       

        state.inputLeft = val.clientX - 57;

        state.inputWidth = state.inputWidth + (state.someX - val.clientX);
      }
    },

    startScalingBottom(state) {
      state.myBackground = 'red'
      state.scalingBottom = true;
    },
    doScalingBottom(state, val) {
      if(state.scalingBottom === true
        && val.clientY < 549) {
        state.inputHeight = Math.ceil(val.clientY - 50 - 7 - state.inputTop - state.sliderCentralSizes / 2) + 18;
      }
    },

    startScalingTop(state) {
      state.myBackground = 'red'
      state.scalingTop = true;
    },
    doScalingTop(state, val) {
      if(state.scalingTop === true
        && val.clientY > 44) {
        state.someY = state.inputTop + 57;       

        state.inputTop = val.clientY - 55;

        state.inputHeight = state.inputHeight + (state.someY - val.clientY) - 2;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
