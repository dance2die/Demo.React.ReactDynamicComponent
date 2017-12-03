// import React, { Component } from "react";
// import shortid from "shortid";
// import PushEvent from './components/PushEvent';
// import ReleaseEvent from './components/ReleaseEvent';
// import StatusEvent from './components/StatusEvent';

// import "./App.css";

// class IfApp extends Component {
//   render() {
//     const {events} = this.props;
//     const eventElement = events.map(event => {
//       switch (event) {
//         case "PushEvent": return <PushEvent key={shortid.generate()} />;
//         case "ReleaseEvent": return <ReleaseEvent key={shortid.generate()} />;
//         case "StatusEvent": return <StatusEvent key={shortid.generate()} />;
//         default: return <div key={shortid.generate()}></div>;
//       }
//     });

//     return (
//       <div>
//         {eventElement}
//       </div>
//     );
//   }
// }

// export default IfApp;