const JoinDiscord = () => {
  return<button onClick={goToDiscord()} className="text-purple-400 border-purple-400 border-2 rounded-lg p-3 m-3 px-16 bg-[#010026] font-bold text-2xl italic font-sans cursor-pointer hover:text-purple-200 hover:border-purple-600 duration-300 ease-in-out">join our discord</button>;
}

export default JoinDiscord;

const goToDiscord = () => {
  window.open("")
}