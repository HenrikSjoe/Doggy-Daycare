async function DogList(setDogList) {

    const dogListAPI = 'https://api.jsonbin.io/b/623c6ee67caf5d6783710588';

    const respons = await fetch(dogListAPI);
    
    const data = await respons.json();

    await setDogList(data);


}

export default DogList; 