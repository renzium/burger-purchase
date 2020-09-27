// import React from 'react';
// const withClass = (WrappedComponent, className) => {
//   return props => <div className={className}>
//     <WrappedComponent {...props} />
//   </div>
// }
// export default withClass;
import React, { Component } from 'react';
const withClass = (WrappedComponent,className) => {
  const WithClass = class extends Component{
  render() {
    return (
      <div className={className}>
        <WrappedComponent {...this.props} ref={this.props.forwardedRef}/>
      </div>
    )
  }
  }
  return React.forwardRef((props, ref) => {
    return<WithClass {...props} forwardedRef={ref}/>
  })
}

export default withClass;