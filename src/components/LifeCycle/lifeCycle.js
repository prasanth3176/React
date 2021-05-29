import React, {Component} from "react";
import LifeCycleData from "./lifeCycleData";
 

// const Shop = () => {
//   return (
//     <div>
//       <h1> Shop </h1>
//     </div>
//   );
// };

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          }
    }
    render() { 
        return (
          <div>
            <h1>Life Methods</h1>
            <LifeCycleData />
          </div>
        );
    }
}
 
export default LifeCycle;

