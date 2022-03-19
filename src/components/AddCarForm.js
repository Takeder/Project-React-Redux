import useInput from "../hooks/useInput"

function AddCarForm ({onCarAdd}) {

    let name = useInput();
    let img = useInput();
    let price = useInput();

    const addCar = (e) => {
        e.preventDefault();
        if(typeof onCarAdd === 'function') {
            onCarAdd({
                name: name.value,
                img: img.value,
                price: price.value
            });
        }
    }

    return (
        <form>
            <div>
                <label>
                    Наименование<br />
                    <input {...name} />
                </label>
            </div>
            <div>
                <label>
                    Картинка<br />
                    <input {...img} />
                </label>
            </div>
            <div>
                <label>
                    Цена<br />
                    <input {...price} />
                </label>
            </div>
            <button onClick={addCar}>Сохранить</button>
        </form>
    )
}

export default AddCarForm;