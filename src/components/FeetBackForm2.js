
import {useEffect, useRef} from 'react';

function FeetBackForm2 () {

    let themeInput = useRef();
    let themeText = useRef();

    let timer;

    const sendMessage = (e) => {
        e.preventDefault();
        
        timer = setInterval(() => {
            console.log('Тема', themeInput.current.value);
            console.log('Сообщение', themeText.current.value);
        }, 1000);
    };

    const stopSend = (e) => {
        e.preventDefault();
        clearInterval(timer);
    };

    return (
        <form>
            <div>
                <label>
                    Тема сообщения <br />
                    <input ref={themeInput} type="text" defaultValue={'123'} />
                </label>
            </div>
            <div>
                <label>
                    Текст сообщения<br />
                    <textarea ref={themeText}></textarea>
                </label>
            </div>
            <div>
                <button onClick={sendMessage}>Отправить</button>
                <button onClick={stopSend}>Остановить</button>
            </div>
        </form>
    )
}

export default FeetBackForm2;