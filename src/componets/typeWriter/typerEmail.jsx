import Typewriter from 'typewriter-effect';//https://www.npmjs.com/package/typewriter-effect



const TyperEmail = () => (
  <>
    <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString("Your email address")
      .pauseFor(1500)
      .start();
  }}
/>
  </>
);

export default TyperEmail