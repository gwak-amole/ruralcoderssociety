const HeaderDiv2 = ({header="Header", content}) => {
    return(
        <div className="border-2 rounded-2xl m-5 py-10 bg-blue-950 text-white">
            <h1 className="text-6xl m-5 mt-8 font-semibold text-white">{header}</h1>
            {content}
        </div>
    );
}

export default HeaderDiv2