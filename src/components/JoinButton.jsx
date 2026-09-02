const join = () => {
  window.open("https://ruralcoderssociety.fillout.com/t/fHUR7XnmwBus")
}

const JoinButton = () => {
  return<button onClick={join} className="text-amber-400 border-amber-400 border-2 rounded-lg p-3 px-16 bg-[#010026] font-bold text-2xl m-3 italic font-sans cursor-pointer hover:text-yellow-200 hover:border-yellow-600 duration-300 ease-in-out">join us</button>;
}
export default JoinButton;