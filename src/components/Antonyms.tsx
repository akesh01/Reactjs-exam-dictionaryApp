import React from "react";
  
const Antonyms = ({ all }:any) => {
  return (
    <>
      {all.map((Val:any) => {
        return Val.meanings.map((Means:any) => {
          return Means.definitions.map((Def:any) => {
            return Def.antonyms.map((Syn:any) => {
              return (
                <>
                  <li>
                    {Syn}
                  </li>
                </>
              );
            });
          });
        });
      })}
    </>
  );
};
  
export default Antonyms;