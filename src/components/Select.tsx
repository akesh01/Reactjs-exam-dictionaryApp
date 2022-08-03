import React from "react";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonym";
import Antonyms from "./Antonyms";
  
const Select = ({ all, main, audio }:any) => {
  return (
    <>
      <div>
        <div >
          <div>
            {main.word}
          </div>
          {/* {audio ? (
            <audio
              controls
              src={audio}
            ></audio>
          ) : (
            <div>Audio not found</div>
          )} */}
          <div>
            meaning & definitions :
          </div>
          <div>
            <ol>
              <Definition all={all} />
            </ol>
          </div>
          <div>
            examples :
          </div>
          <div>
            <ol>
              <Example all={all} />
            </ol>
          </div>
          <div>
            synonyms :
          </div>
          <div>
            <ol>
              <Synonyms all={all} />
            </ol>
          </div>
          <div>
            antonyms :
          </div>
          <div>
            <ol>
              <Antonyms all={all} />
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
  
export default Select;