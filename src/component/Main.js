import { useState } from "react";
import { useEffect } from "react";


const Main = () => {
  
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [equal, setEqual] = useState(false);

  // const Displayer = (id) => {
   
useEffect(() => {
  
    let resultText = text;
     

    console.log("This is text ", resultText);
    console.log("Text length outside loop", text.length)
    for (let i = 0; i <= resultText.length; i++) {
      console.log("Text length inside loop", text.length)

      let j = 0;

      // one section
      while (j < resultText.length) {
        if (resultText.charAt(j) === "/") {
          let k = j + 1;
          let str1 = "";
          let str2 = "";

          while (k < resultText.length) {
            if (
              resultText.charAt(k) !== "/" &&
              resultText.charAt(k) !== "*" &&
              resultText.charAt(k) !== "+" &&
              resultText.charAt(k) !== "-"
            ) {
              str1 = str1.concat(resultText.charAt(k));
              console.log("resultextcharat", resultText.charAt(k));
              console.log("str1", str1);
            }
            else {
              break;
            }
            k++;
          }

          k = j - 1;

          while (k >= 0) {
            if (
              resultText.charAt(k) !== "/" &&
              resultText.charAt(k) !== "*" &&
              resultText.charAt(k) !== "+" &&
              resultText.charAt(k) !== "-"
            ) {
              str2 = str2.concat(resultText.charAt(k));
              const strRev = (str2) => [...str2].reverse().join("");
              str2 = strRev(str2);
              console.log("str2", str2);
            }
            else{
              break;
            }
            k--

          }

          let int = parseInt(str2) / parseInt(str1);
          k = 5 / 2;
          console.log("k", k);
          console.log("int", int);

          let replaceStr = `${str2}/${str1}`;
          console.log("Replacester", replaceStr);
          resultText = resultText.replace(replaceStr, int.toString());
          setResult(resultText);

          console.log("This is result text  ", resultText);
        }
        j++;
      }
      // one section

      // two section
      j = 0;
      while (j < resultText.length) {
        if (resultText.charAt(j) === "*") {
          let k = j + 1;
          let str1 = "";
          let str2 = "";

          while (k < resultText.length) {
            if (
              resultText.charAt(k) !== "/" &&
              resultText.charAt(k) !== "*" &&
              resultText.charAt(k) !== "+" &&
              resultText.charAt(k) !== "-"
            ) {
              str1 = str1.concat(resultText.charAt(k));
              console.log("resultextcharat", resultText.charAt(k));

              console.log("str1", str1);
            }
          else {
            break;
          }
            k++;
          }

          k = j - 1;

          while (k >= 0) {
            if (
              resultText.charAt(k) !== "/" &&
              resultText.charAt(k) !== "*" &&
              resultText.charAt(k) !== "+" &&
              resultText.charAt(k) !== "-"
            ) {
              str2 = str2.concat(resultText.charAt(k));
              const strRev = (str2) => [...str2].reverse().join("");
              str2 = strRev(str2);
              console.log("str2", str2);
            }
            else{
              break;
            }

            k--;
          }

          let int = parseInt(str2) * parseInt(str1);
          k = 5 / 2;
          console.log("k", k);
          console.log("int", int);

          let replaceStr = `${str2}*${str1}`;
          console.log("Replacester", replaceStr);
          resultText = resultText.replace(replaceStr, int.toString());
          setResult(resultText);

          console.log("This is result text  ", resultText);
        }
        j++;
      }

      // two section

      // three section 
      j = 0;
      while (j < resultText.length) {
        if (resultText.charAt(j) === "+") {
          let k = j + 1;
          let str1 = "";
          let str2 = "";

          while (k < resultText.length) {
            if (
              resultText.charAt(k) !== "/" &&
              resultText.charAt(k) !== "*" &&
              resultText.charAt(k) !== "+" &&
              resultText.charAt(k) !== "-"
            ) {
              str1 = str1.concat(resultText.charAt(k));
              console.log("resultextcharat", resultText.charAt(k));

              console.log("str1", str1);
            }
            else {
              break;
            }
            k++;
          }

          k = j - 1;

          while (k >= 0) {
            if (
              resultText.charAt(k) !== "/" &&
              resultText.charAt(k) !== "*" &&
              resultText.charAt(k) !== "+" &&
              resultText.charAt(k) !== "-"
            ) {
              str2 = str2.concat(resultText.charAt(k));
              const strRev = (str2) => [...str2].reverse().join("");
              str2 = strRev(str2);

              console.log("str2", str2);
            }
            else{
              break;
            }

            k--;
          }

          let int = parseInt(str2) + parseInt(str1);
          k = 5 / 2;
          console.log("k", k);
          console.log("int", int);

          let replaceStr = `${str2}+${str1}`;
          console.log("Replacester", replaceStr);
          resultText = resultText.replace(replaceStr, int.toString());
          setResult(resultText);

          console.log("This is result text  ", resultText);
        }
        j++;
      }
// three section

// Four section
      j = 0;

      while (j < resultText.length) {
        if (resultText.charAt(j) === "-") {
          let k = j + 1;
          let str1 = "";
          let str2 = "";

          while (k < resultText.length) {
            if (
              resultText.charAt(k) !== "/" &&
              resultText.charAt(k) !== "*" &&
              resultText.charAt(k) !== "+" &&
              resultText.charAt(k) !== "-"
            ) {
              str1 = str1.concat(resultText.charAt(k));
              console.log("resultextcharat", resultText.charAt(k));
              console.log("str1", str1);
            }
            else {
              break;
            }
            k++;
          }

          k = j - 1;

          while (k >= 0) {
            if (
              resultText.charAt(k) !== "/" &&
              resultText.charAt(k) !== "*" &&
              resultText.charAt(k) !== "+" &&
              resultText.charAt(k) !== "-"
            ) {
              str2 = str2.concat(resultText.charAt(k));
              const strRev = (str2) => [...str2].reverse().join("");
              str2 = strRev(str2);

              console.log("str2", str2);
            }
            else{
              break;
            }

            k--;
          }

          let int = parseInt(str2) - parseInt(str1);
          k = 5 / 2;
          console.log("k", k);
          console.log("int", int);

          let replaceStr = `${str2}-${str1}`;
          console.log("Replacester", replaceStr);
          resultText = resultText.replace(replaceStr, int.toString());

          setResult(resultText);

          console.log("This is result text  ", resultText);
        }
        j++;
      }
      // Four section

      
    }
  }, [text])
  // };

 

  return (

    <div className="container">
      <button className="btn btn-lg screen border border-dark " type="button">
        {text}  {equal && ` = ${result}`}
      </button>

      <div className="grid-container">
       <button
          type="button"
          onClick={() => {
            setText((text) => text.concat(1));
            // Displayer(1);
          }} 
          className="btn btn-dark"
        >
          1
        </button>

        <button
          type="button"
          onClick={() => {
            setText((text) => text.concat(2));
            // Displayer(2);
          }}
          className="btn btn-dark"
        >
          2
        </button>

        <button
          type="button"
          onClick={() => {
            setText((text) => text.concat(3));
            // Displayer(3);
          }}
          className="btn btn-dark"
        >
          3
        </button>

        <button
          type="button"
          onClick={() => {
            setText((text) => text.concat(4));
            // Displayer(4);
          }}
          className="btn btn-dark"
        >
          4
        </button>
        <button
          type="button"
          onClick={() => {
            setText((text) => text.concat(5));
            // Displayer(5);
          }}
          className="btn btn-dark"
        >
          5
        </button>
        <button
          type="button"
          onClick={() => {
            setText((text) => text.concat(6));
            // Displayer(6);
          }}
          className="btn btn-dark"
        >
          6
        </button>
        <button
          type="button"
          onClick={() => {
            setText((text) => text.concat(7));
            // Displayer(7);
          }}
          className="btn btn-dark"
        >
          7
        </button>
        <button
          type="button"
          onClick={() => {
            setText((text) => text.concat(8));
            // Displayer(8);
          }}
          className="btn btn-dark"
        >
          8
        </button>

        <button
          type="button"
          onClick={() => {
            // Displayer(9);
            setText((text) => text.concat(9));
          }}
          className="btn btn-dark"
        >
          9
        </button>

        <button
          type="button"
          onClick={() => {
            // Displayer("+");
            setText((text) => text.concat("+"));
          }}
          className="btn btn-light border border-primary"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            // Displayer(0);
            setText((text) => text.concat(0));
          }}
          className="btn btn-dark"
        >
          0
        </button>
        <button
          type="button"
          onClick={() => {
            // Displayer("-");
            setText((text) => text.concat("-"));
          }}
          className="btn btn-light border border-primary"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            // Displayer("*");
            setText((text) => text.concat("*"));
          }}
          className="btn btn-primary"
        >
          *
        </button>
        <button
          type="button"
          onClick={() => {
            // Displayer("/");
            setText((text) => text.concat("/"));
          }}
          className="btn btn-primary"
        >
          /
        </button>
        <button
          type="button"
          onClick={() => {
            setText((text) => text.concat("."));
            // Displayer(".");
          }}
          className="btn btn-primary"
        >
          .
        </button>
        <button
          type="button"
          onClick={() => {
            setText((text) => text.concat("%"));
            // Displayer("%");
          }}
          className="btn btn-primary"
        >
          %
        </button>
        <button
          type="button"
          onClick={() => {
            // setText((text) => text.concat("="));
            // Displayer("=");
            setEqual(true);
          }}
          className="btn btn-primary"
        >
          =
        </button>
        <button
          type="button"
          onClick={() => {
            setText("");
            setResult("");
            setEqual(false);
          }}
          className="btn btn-success"
        >
          AC
        </button>
      </div>
    </div>
  );
};

export default Main;
