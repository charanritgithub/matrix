import React,{useState} from "react";

const MatrixApp = () => {
  const [matrix,setMatrix] = useState(
    Array(3).fill(null).map(() => Array(3).fill('white'))
  )

const [clickOrder,setClickOrder] = useState([])

const boxClickHandle = (row,col) => {
  const newMatrix = matrix.map((r,rowIndex)=>
     r.map((color,colIndex) =>
      rowIndex === row && colIndex === col ? "green" : color
    )
  )
  setMatrix(newMatrix);
  setClickOrder([...clickOrder,{row,col}])
}
//handling lastbox//
const lastBoxHandle = () => {
  let delay = 0
  const updatedMatrix = matrix.map((row) => [...row]);

  clickOrder.forEach(({row,col},index) => {
    setTimeout(() => {
      updatedMatrix[row][col] = "orange";
      setMatrix(updatedMatrix((r) => [...r]))
    },delay)
    delay += 500
  })
}

return (
  <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
    {matrix.map((row,rowIndex) => (
      <div style={{display:"flex",gap:"10px"}} key={rowIndex}>
        {row.map((color,colIndex) => (
          <div key={colIndex} 
          onClick={() => 
            rowIndex ===2 && colIndex === 2 ? lastBoxHandle():boxClickHandle(rowIndex,colIndex)} 
            style={{
              width:"50px",
              height:"50px",
              backgroundColor: color,
              border:"1px soliid black",
              display:"flex",
              justifyContent:"center",
              alignItems:'center',
              cursor:'pointer'
            }}
          ></div>
        ))}
      </div>
    ))}
  </div>
)
}
export default MatrixApp;