import Select from "react-select";
import styles from "./formSection.module.css";

function Form() {
  const options = [
    { value: "<50k", label: "Less than 50,000 members" },
    { value: "50k-250k", label: "50,000 - 250,000 members" },
    { value: "250k-1M", label: "250,000 - 1M members" },
    { value: "1M+", label: "More than 1M members" },
  ];

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
        <Select options={options} />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
