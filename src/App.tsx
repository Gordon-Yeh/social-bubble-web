import React, { useState } from 'react';
// import NetworkGraph from './components/NetworkGraph';
import NetworkGraph from './components/D3NetworkGraph';
import DialogBox from './containers/DialogBox';
import './App.scss';

function App() {
  const [ user, setUser ] = useState({
    id: 0, email: 'demo@email.com', firstName: 'demo', lastName: 'demo', username: 'demo'
  });
  let a = getFakeNetwork()
  const [ bubble, setBubble ] = useState({});
  const [ selectedNode, setSelectedNode ] = useState({});

  // const [ bubble, setBubble ] = useState({ [user.id]: { ...user } });


  return (
    <div className="app">
      <div className="dialog-box">
        <DialogBox
          selectedNode={selectedNode}
          bubbleSize={Object.keys(bubble).length}
          setBubble={setBubble}
          setUser={setUser}
        />
      </div>
      <div className="bubble-graph">
        {/* <NetworkGraph 
          height={window.outerHeight + 300}
          width={window.outerWidth + 300}
          root={user}
          network={bubble}
        /> */}
        <NetworkGraph
          width={window.outerWidth}
          linkDistance={() => {
            if (window.outerWidth >= 576)
              return 300;
            else
              return 150;
          }}
          linkWidth={() => {
            if (window.outerWidth >= 576)
              return 2;
            else
              return 3;
          }}
          nodeRadius={() => {
            if (window.outerWidth >= 576)
              return 40;
            else
              return 30;
          }}
          height={window.outerHeight}
          graph={bubble}
          root={user}
        />
      </div>
    </div>
  );
}

function getFakeNetwork() {
  const nodeCount = 20;
  const graph = {};
  for (let i = 0; i < nodeCount; i++) {
    graph[i] = [];
    let n = Math.floor(Math.random() * nodeCount/3);
    for (let j = 0; j < n; j++) {
      let target = Math.floor(Math.random() * nodeCount);
      if (target !== i && !graph[i].includes(target))
        graph[i].push({ id: target });
    }
  }
  return graph;
}

export default App;
