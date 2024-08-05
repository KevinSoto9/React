import { Square } from "./Square"

export const Board = ({children,board }) => {
    return (
        board.map((cell,index) =>{
            return (
              <Square
                key={index}
                index={index}
                updateBoard={children}
                >
                  {cell}
                </Square>
            )
          })
    )
}