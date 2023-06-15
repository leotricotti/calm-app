import Select from "react-select";
import styles from "./formSection.module.css";

function Form() {
  const options = [
    { value: "<50k", label: "Less than 50,000 members" },
    { value: "50k-250k", label: "50,000 - 250,000 members" },
    { value: "250k-1M", label: "250,000 - 1M members" },
    { value: "1M+", label: "More than 1M members" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f3f3f3",
      background: " var(--clr-selectBackground)",
      border: state.isFocused ? "1px solid #3898ec" : "1px solid #ccc",
      borderRadius: "0",
      boxShadow: "none",
    }),
  };

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
          className={styles.companyInput}
          type="text"
          id="company"
          name="company"
        />
        <label className={styles.label} htmlFor="message">
          Number of members
        </label>
        <Select
          value={"Select one..."}
          options={options}
          className={styles.select}
          styles={customStyles}
        />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
