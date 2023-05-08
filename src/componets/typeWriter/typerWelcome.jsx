import Typewriter from 'typewriter-effect';//https://www.npmjs.com/package/typewriter-effect



const TyperWelcome = () => {
    const length = "New here? Let's get a few details from you";
  return (<>
    <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString("New here? Let's get a few details from you.")
      .pauseFor(400)
      .changeDeleteSpeed(1)
      .changeDelay(3)
      .deleteChars(length.length+1)
      .typeString('First, provide us with your name')
      .start();
  }}
/>
  </>)
};

export default TyperWelcome