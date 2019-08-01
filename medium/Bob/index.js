/**
 * Bob
 *
 * Bob is a lackadaisical teenager. In conversation, his responses are very limited.
 *
 * Bob answers 'Sure.' if you ask him a question.
 *
 * He answers 'Whoa, chill out!' if you yell at him.
 *
 * He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
 *
 * He says 'Fine. Be that way!' if you address him without actually saying anything.
 *
 * He answers 'Whatever.' to anything else.
 */
function hey (input){
  input =  input.replace(/\s\s+/g, '');
  let lastSymbol = input.charAt(input.length-1);
  let numbersInArray = input.split(/\W+/);
  let numbersOnly = numbersInArray.join("");
  // input is empty
  if(!input.trim()){
        return "Fine. Be that way!";
      } else if (lastSymbol === '?'&&input === input.toUpperCase()&&isNaN(numbersOnly)){
        return "Calm down, I know what I'm doing!";
      } else if (lastSymbol === '?'){
        return 'Sure.';
      } else if (input === input.toUpperCase()){
        if (isNaN(numbersOnly)){
          return "Whoa, chill out!";
        } else {
          return "Whatever.";
        }
      }
    return "Whatever.";
  }
  module.exports = hey;