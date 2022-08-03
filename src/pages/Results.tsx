import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Select from '../components/Select';
import './results.css' ;

// interface propsType {
//     data : [{}];
// }
function Results() {
    const location:any = useLocation();
    const [All,setAll] = useState<any>([]);
    const [main,setMain] = useState<any>([]);
    const wordforsearch = (location.state.word).toString();
    
    useEffect(() => {
        dataApi();
      }, []);

    const dataApi = async () => {
        const data = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${wordforsearch}`
        );
        const dataJ = await data.json();
        console.log(dataJ);
        console.log(dataJ[0]);
        
        setAll(dataJ);
        setMain(dataJ[0]);
      };
    
    
  return  (
    <>
    { wordforsearch === "" ? (
        <div className="">
          alert("'No Definitions Found':You can try the search again at later time")
        </div>
      ) : (
        // i Tried implementing the response through various components ,but was getting typeerror [Never]
        // So dsiplayed the results in same component
        //  <Select All={All} main={main} />
         <div className='Title'>
           Keyword :<strong>{main.word}</strong>
        <div className='definition_class'>
         <h3>definition</h3>
         {All.map((Val:any) => {
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
        </div>


        

        <div >
            <h3 className='Synonyms_class'>Synonyms</h3>
            {All.map((Val:any) => {
                return Val.meanings.map((Means:any) => {
                return Means.definitions.map((Def:any) => {
                    return Def.synonyms.map((Syn:any) => {
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
        </div>

            <div className='Antonyms_class'>
                <h3>Antonyms</h3>
                {All.map((Val:any) => {
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
                </div>


         <div className='Example_class'>
            <h3>Example</h3>
            {All.map((Val:any) => {
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
            </div>        
        </div>
      )
    }
   </>
  )
};

export default Results ;