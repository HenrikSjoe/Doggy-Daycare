import { Link } from "react-router-dom";

const DogDetail = ({activeDog}) => {
    var dogName = activeDog.name

    return (
        <section className="info-section">
            <Link to={"/register"}>
                <p>Back</p>
            </Link>
                <img src={activeDog.img} alt="Picture of dog" />
                    <p><span >Name:  </span>{activeDog.name}</p>
                    <p><span >Breed:  </span>{activeDog.breed}</p>
                    <p><span >Gender:  </span>{activeDog.sex}</p>
                    <p><span >Age:  </span>{activeDog.age}</p>
                    <p><span >Owner:  </span>{activeDog.owner.name} {activeDog.owner.lastName}</p>
                    <p><span>{(activeDog.present ? dogName +' is at the daycare today' : dogName + ' is at home today')} </span></p>
        </section>
    )
}

export default DogDetail;
