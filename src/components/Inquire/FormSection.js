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
        <label className={styles.label} htmlFor="company">
          Company
        </label>
        <input
          className={styles.input}
          type="text"
          id="company"
          name="company"
        />
        <label className={styles.label} htmlFor="message">
          Number of members
        </label>
        <select
          className={styles.select}
          id="Members1"
          name="Members"
          data-name="Members"
          required=""
          class="select-field w-select"
        >
          <option value="">Select one...</option>
          <option value="<50k">Less than 50,000 members</option>
          <option value="50k-250k">50,000 - 250,000 members</option>
          <option value="250k-1M">250,000 - 1M members</option>
          <option value="1M+">More than 1M members</option>
        </select>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
