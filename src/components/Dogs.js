import { Link } from "react-router-dom";

const Dogs = ({dogList, showInfo}) => {

    let listOfDogs = null;
    
    if(dogList != null) {

      listOfDogs = dogList.map(dog => (
          <div key={dog.name} className="dog"  onClick={() => showInfo(dog)}>             
             <Link to={"/info"}>
                <img src={dog.img} alt="Picture of a dog" />  
                <p>{dog.name}</p>
             </Link>             
          </div>   
        ))     
    }

    return (
        <section>
          <div>  
            <p ><span>The gang</span> - Click for details</p>
          </div>
            <section className="dogs_list">
                {listOfDogs}
            </section>
            
        </section>
    )
}

export default Dogs;