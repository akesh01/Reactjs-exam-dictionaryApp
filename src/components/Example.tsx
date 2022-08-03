import React from "react";
  
const Example = ({ all}:any) => {
  return (
    <>
      {all.map((Val:any) => {
        return Val.meanings.map((Means:any) => {
          return Means.definitions.map((Def:any) => {
            return (
              <>
                {Def.example ? (
                  <li>
                    {Def.example}
                  </li>
                ) : (
                 ""
                )}
              </>
            );
          });
        });
      })}
    </>
  );
};
  
export default Example;