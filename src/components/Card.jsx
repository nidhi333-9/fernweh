import { ImLocation } from "react-icons/im"
function Card(props) {
    return (
        <>
            <div className="card  w-fit border p-10  md:flex">
                <img className="image" src={props.img} width="300px" alt="" />
                <div className="content text-center pt-5 md:text-left md:px-10">
                    <div className="location flex justify-center md:justify-start">
                        <p className=" tracking-widest uppercase font-semibold flex justify-center px-1"><ImLocation color="crimson" />{props.location}</p>
                        <a className=" px-5 text-slate-700 underline" href={props.googleMap}>View On Google Map</a>
                    </div>
                    <h1 className="from-neutral-900 text-3xl py-3 font-semibold">{props.title}</h1>

                    <p className="font-bold uppercase "><span>{props.startD}</span><span className="px-6">{props.endD}</span></p>
                    <h2 className="py-4">{props.desc}</h2>

                </div>
            </div>
        </>
    )
}

export default Card;