
import useInput from "../hooks/useInput";

function FeetBackForm () {

    let theme = useInput();
    let message = useInput();

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('Тема', theme);
        console.log('Сообщение', message);
    };

    return (
        <form>
            <div>
                <label>
                    Тема сообщения <br />
                    <input type="text" {...theme} />
                </label>
            </div>
            <div>
                <label>
                    Текст сообщения<br />
                    <textarea {...message}></textarea>
                </label>
            </div>
            <div>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </form>
    )
}

export default FeetBackForm;