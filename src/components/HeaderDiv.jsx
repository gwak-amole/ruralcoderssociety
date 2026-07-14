const HeaderDiv = ({header="Header", content}) => {
    return(
        <div className="border-2 rounded-2xl m-5 py-5">
            <h1 className="text-6xl m-5 mt-8 font-semibold text-blue-950">{header}</h1>
            {content}
        </div>
    );
}

export default HeaderDiv