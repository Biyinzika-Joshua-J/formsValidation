import Typewriter from 'typewriter-effect';//https://www.npmjs.com/package/typewriter-effect



const Typer = () => (
  <>
    <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString("New here? Let's get a few details from you")
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteChars(3)
      .typeString('your name')
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
  </>
);

export default Typer