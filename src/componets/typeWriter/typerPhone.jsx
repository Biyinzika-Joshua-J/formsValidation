import Typewriter from 'typewriter-effect';//https://www.npmjs.com/package/typewriter-effect



const TyperPhone = () => (
  <>
    <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString("Your phone number")
      .pauseFor(1500)
      .start();
  }}
/>
  </>
);

export default TyperPhone