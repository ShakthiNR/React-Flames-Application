//Used to get the unmatched count from two strings
export const flamesFn = async (str1, str2) => {
  var matchCount = 0;
  let outerCondition, innerCondition, strOut, strIn;
  let stringCount1 = str1.split(" ").join("").length;
  let stringCount2 = str2.split(" ").join("").length;
  if (stringCount1 > stringCount2) {
    outerCondition = stringCount2;
    innerCondition = stringCount1;
    strOut = str2;
    strIn = str1;
  } else {
    outerCondition = stringCount1;
    innerCondition = stringCount2;
    strOut = str1;
    strIn = str2;
  }
  var temp = strIn;
  for (let i = 0; i < outerCondition; i++) {
    innerCondition = temp.length;
    for (let j = 0; j < innerCondition; j++) {
      if (strOut[i] === temp[j]) {
        matchCount++;
        temp = temp.replace(temp[j], "");
        break;
      }
    }
  }
  // console.log("matches Count", matchCount);
  let unMatchCount = stringCount1 + stringCount2 - 2 * matchCount;
  try {
    await flamesResult(unMatchCount);
  } catch (err) {
    return err;
  }
};

//Getting Flames Result Based on unmatched count
const flamesResult = (count) => {
  return new Promise((reject, resolve) => {
    if (count === 0 || count) {
      let string = "flames";
      let indexToSplit, len, rem, arr, first, second;
      for (let i = 0; i < 5; i++) {
        len = string.length;
        rem = count % len;
        arr = string.split("");
        if (rem === 0) {
          rem = len;
          indexToSplit = rem;
          arr.pop();
          string = arr.join("");
        } else {
          indexToSplit = rem - 1;
          first = arr.slice(0, indexToSplit);
          second = arr.slice(indexToSplit + 1);
          string = [...second, ...first].join("");
        }
      }
      resolve(string);
    } else {
      console.log("count", count);
      reject("Error in Function");
    }
  });
};
