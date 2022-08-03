import React from "react";
  
const Definition = ({ all }:any) => {
  return (
    <>
      {all.map((Val:any) => {
        return Val.meanings.map((Means:any) => {
          return Means.definitions.map((Def:any) => {
            return (
              <>
                <li>
                  {Def.definition}
                </li>
                <hr />
              </>
            );
          });
        });
      })}
    </>
  );
};
  
export default Definition;