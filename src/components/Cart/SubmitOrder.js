import styles from './SubmitOrder.module.css';
import { useRef } from 'react';

const SubmitOrder = (props) => {
  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const addressInputRef = useRef();

  const confirmOrderHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
  };

  return (
    <form className={styles.form} onClick={confirmOrderHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Введите имя</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">Введите название города</label>
        <input ref={cityInputRef} type="text" id="city" />
      </div>
      <div className={styles.control}>
        <label htmlFor="address">Введите адрес</label>
        <input ref={addressInputRef} type="text" id="address" />
      </div>
      <div className={styles.actions}>
        <button className={styles.submit}>Подтвердить заказ</button>
        <button type="button" onClick={props.onCancel}>
          Отменить
        </button>
      </div>
    </form>
  );
};
export default SubmitOrder;
