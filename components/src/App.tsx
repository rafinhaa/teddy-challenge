import Button from "./components/Button";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}

export default App;
