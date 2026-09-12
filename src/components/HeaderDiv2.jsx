const HeaderDiv2 = ({header="Header", content}) => {
    return(
        <div className="border-2 rounded-2xl m-5 py-2 text-white bg-linear-to-b from-transparent to-blue-200">
            <h1 className="font-title text-6xl m-5 mt-8 font-semibold text-blue-950">{header}</h1>
            {content}
        </div>
    );
}

export default HeaderDiv2