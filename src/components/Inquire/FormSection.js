import styles from "./formSection.module.css";

function Form() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.fullNameContainer}>
          <div className={styles.firstName}>
            <label className={styles.label} htmlFor="first name">
              First Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="first name"
              name="first name"
            />
          </div>
          <div className={styles.lastName}>
            <label className={styles.label} htmlFor="last name">
              Last Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="last name"
              name="last name"
            />
          </div>
        </div>
        <label className={styles.label} htmlFor="email">
          Work Email
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="work email"
        />
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <input className={styles.input} id="message" name="message"></input>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
