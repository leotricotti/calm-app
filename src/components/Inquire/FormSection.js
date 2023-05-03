import styles from "./formSection.module.css";

function Form() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          First Name
        </label>
        <input className={styles.input} type="text" id="name" name="name" />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input className={styles.input} type="email" id="email" name="email" />
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
        ></textarea>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
