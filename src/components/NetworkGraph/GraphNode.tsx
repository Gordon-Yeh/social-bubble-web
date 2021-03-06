import React from 'react';

export default function GraphNode({
  radius, label, color, x, y, onClick
}) {

  function handleMouseOver(e) {
    let target = e.target as Element;
    target.setAttribute('r', radius+1)
  }

  function handleMouseOut(e) {
    let target = e.target as Element;
    target.setAttribute('r', radius)
  }

  return (
    <g>
      <circle
        className="node"
        r={radius}
        cx={x}
        cy={y}
        fill={color}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={onClick}
        stroke="white"
        strokeWidth="2"
      />
      <text
        x={x} y={y} 
        textAnchor="middle"
        stroke="white"
        strokeWidth="1px"
      > {label} </text>
    </g>
  )
}

GraphNode.defaultProps = {
  radius: 30,
  color: 'black',
  onClick: () => {},
  x: 0,
  y: 0
};
