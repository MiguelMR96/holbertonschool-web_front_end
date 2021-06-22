const globalVariable = "Welcome";

const outer = () => {
  alert(globalVariable);
  let course = "Holberton";

  function inner() {
    alert(globalVariable + ' ' + course);
    let exclamation = "!";

    const inception = () => {
      alert(`${globalVariable} ${course}${exclamation}`);
    }
    inception();
  }
  inner();
}
outer();
