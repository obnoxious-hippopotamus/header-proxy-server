import React from 'react';




class Select extends React.Component {
    constructor() {
        super();
        this.selectedElement = React.createRef()
        this.state = {
            isOpen: false, 
            style: {
                position: 'absolute',
                top: 0, 
                left: 0
            }
        }
    }

  static displayName = 'Select'


  componentDidMount() {
    this.getPos();
  }

  getPos = (left, top, height) => {
      this.setState(prevState => ({style: {...prevState.style, left, top: top + height}}))
      return React.cloneElement(child, {open: this.open, getPos: this.getPos})
  }


  render() {
      const { children, open} = this.props
      return React.cloneElement(children, { ref: this.selectedElement, onClick: open})
  }
}




export default Select